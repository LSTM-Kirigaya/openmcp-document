<template>
    <div class="k-tabs" :style="panelStyle">
        <div class="k-tabs-tags">
            <div class="k-tabs-tag-item" v-for="pane of tabsContainer.paneInfos" :key="pane.id"
                :ref="el => tabsContainer.getPanes(el, pane.id)" @click="tabsContainer.switchLabel(pane.id)"
                :class="{ 'active-tab': tabsContainer.lastPaneId === pane.id }">
                <span :class="pane.labelClass"></span>
                <span>{{ pane.label }}</span>
            </div>
        </div>
        <div class="k-tabs-content" :ref="el => tabsContainer.panelContainer = el">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, useSlots, provide, nextTick, computed, onMounted } from 'vue';

type PaneInfo = {
    id: number;
    label: string;
    labelClass: string;
};

interface TabsContainer {
    paneInfos: PaneInfo[];
    panes: HTMLElement[];
    lastPaneId?: number;
    activeLabel: string;
    panelContainer?: any;
    height: string;
    getPanes: (el: any, id: string | number) => void;
    switchLabel: (id: number) => void;
    updateLabels: () => void;
}

const slots = useSlots();
let maxChildHeight = 0;

function resizeTab(id: number) {
    const container = tabsContainer.panelContainer;
    if (container) {
        const panels = Array.from(container.children) as HTMLElement[];

        const currentPanel = panels[id];
        if (currentPanel) {
            maxChildHeight = Math.max(maxChildHeight, currentPanel.clientHeight);
            tabsContainer.height = maxChildHeight + 'px';
        }
    }
}

const panelStyle = computed(() => ({
    height: tabsContainer.height
}));

const tabsContainer: TabsContainer = reactive({
    paneInfos: [],
    panes: [],
    lastPaneId: 0,
    activeLabel: '',
    hoverBar: null,
    panelContainer: undefined,
    height: '0',
    getPanes(el: HTMLElement | null, id: string | number) {
        if (el) {
            this.panes[id] = el;
        }
    },
    switchLabel(id: number) {
        if (this.lastPaneId === id) {
            return;
        }
        this.lastPaneId = id;
        this.activeLabel = this.paneInfos[id]?.label || '';

        const container = tabsContainer.panelContainer;
        const panels = Array.from(container.children) as HTMLElement[];

        panels.forEach((panel, index) => {
            console.log('index', index);
            console.log('id', id);

            panel.style.transition = 'opacity 0.3s ease';
            if (index === id) {
                panel.style.display = 'block';
                setTimeout(() => {
                    panel.style.opacity = '1';
                }, 150);
            } else {
                panel.style.opacity = '0';
                setTimeout(() => {
                    panel.style.display = 'none';
                }, 300);
            }
        });


        nextTick(() => {
            resizeTab(id);
        });
    },
    updateLabels() {
        const defaultChildren = slots.default?.() || [];

        this.paneInfos = [];
        for (const index in defaultChildren) {
            const vnode = defaultChildren[index];
            this.paneInfos.push({
                id: Number(index),
                label: vnode.props?.label || '',
                labelClass: vnode.props?.labelClass || '',
            });
        }
        if (this.paneInfos.length > 0) {
            this.activeLabel = this.paneInfos[0]?.label || '';
            nextTick(() => {
                resizeTab(0);
            });
        }
    }
});

tabsContainer.updateLabels();
onMounted(() => {
    if (tabsContainer.panelContainer) {
        const panels = Array.from(tabsContainer.panelContainer.children) as HTMLElement[];
        panels.forEach((panel, index) => {
            panel.style.position = 'absolute';
            
            if (index != tabsContainer.lastPaneId) {
                panel.style.display = 'none';
                panel.style.opacity = '0';
            }
        });
    }
});
</script>

<style scoped>
.k-tabs {
    position: relative;
    height: fit-content;
}

.k-tabs-tags {
    display: flex;
    margin-bottom: 20px;
    width: 100%;
    position: relative;
}

.k-tabs-tag-item { 
    background-color: var(--vp-button-alt-bg);
    color: white;
    border-radius: .5em;
    margin-right: 10px;
    padding: 2px 8px;
    font-size: 0.8rem;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

@media (min-width: 768px) {
    .k-tabs-tag-item { 
        padding: 6px 16px;
        font-size: 1rem;
    }
}

.k-tabs-tag-item:hover { 
    background-color: var(--vp-c-brand-2);
}

.k-tabs-tag-item.active-tab { 
    background-color: var(--vp-c-brand-3);
}

@media screen and (max-width: 414px) {
    .k-tabs-tags {
        overflow-x: scroll
    }
}

.hover-bar {
    background-color: var(--vp-c-brand-3);
    border-radius: .9em .9em 0 0;
    transition: .35s ease-in-out;
    position: absolute;
}

.k-tabs-content>* {
    transition: opacity 0.3s ease;
}
</style>
