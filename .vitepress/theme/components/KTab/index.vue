<template>
    <div class="k-tabs">
        <div class="k-tabs-tags">
            <div class="k-tabs-tag-item" v-for="pane of tabsContainer.paneInfos" :key="pane.id"
                :ref="el => tabsContainer.getPanes(el, pane.id)" @click="tabsContainer.switchLabel(pane.id)" :class="{
                    'active-tab': tabsContainer.lastPaneId === pane.id,
                    'prev-tab': pane.id === prevActiveIndex
                }">
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
import { reactive, useSlots, nextTick, onMounted, ref } from 'vue';
import gsap from 'gsap';

type PaneInfo = {
    id: number;
    label: string;
    labelClass: string;
};

const slots = useSlots();
const prevActiveIndex = ref<number | null>(null);

const tabsContainer = reactive({
    paneInfos: [] as PaneInfo[],
    panes: [] as HTMLElement[],
    lastPaneId: 0,
    panelContainer: undefined as any,

    getPanes(el: any, id: number) {
        if (el) this.panes[id] = el;
    },

    async switchLabel(id: number) {
        if (this.lastPaneId === id) return;

        const oldId = this.lastPaneId;
        prevActiveIndex.value = oldId;
        this.lastPaneId = id;

        const container = this.panelContainer;
        if (!container) return;

        const panels = Array.from(container.children) as HTMLElement[];
        const oldPanel = panels[oldId];
        const newPanel = panels[id];

        // 1. First shrink the old panel to 0.3 scale
        if (oldPanel) {
            await gsap.to(oldPanel, {
                scale: 0.3,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in"
            });
        }

        // 2. Hide all other panels
        panels.forEach((panel, index) => {
            if (index !== id) {
                gsap.set(panel, {
                    display: 'none',
                    opacity: 0,
                    scale: 1
                });
            }
        });

        // 3. Show and animate in the new panel
        gsap.set(newPanel, {
            display: 'block',
            opacity: 0,
            scale: 1.2
        });

        gsap.to(newPanel, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.2)"
        });
    },

    updateLabels() {
        this.paneInfos = (slots.default?.() || []).map((vnode, index) => ({
            id: index,
            label: vnode.props?.label || '',
            labelClass: vnode.props?.labelClass || '',
        }));
    }
});

// Initialize
tabsContainer.updateLabels();

onMounted(() => {
    if (tabsContainer.panelContainer) {
        const panels = Array.from(tabsContainer.panelContainer.children) as HTMLElement[];
        panels.forEach((panel, index) => {
            panel.style.position = 'absolute';
            panel.style.width = '100%';

            if (index !== 0) {
                panel.style.display = 'none';
            } else {
                gsap.from(panel, {
                    scale: 1.2,
                    opacity: 0,
                    duration: 0.5
                });
            }
        });
    }
});
</script>

<style scoped>
.k-tabs {
    position: relative;
}

.k-tabs-tags {
    display: flex;
    margin-bottom: 20px;
    position: relative;
    z-index: 10;
    gap: 8px;
}

.k-tabs-tag-item {
    background-color: var(--vp-button-alt-bg);
    border-radius: .5em;
    padding: 6px 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    transform-origin: center;
    will-change: transform;
}

.k-tabs-tag-item.active-tab {
    background-color: var(--vp-c-brand-3);
    transform: scale(1.05);
}

html[lang="zh"] .k-tabs-content {
    position: relative;
    min-height: 500px;
}

html[lang="en"] .k-tabs-content {
    position: relative;
    min-height: 600px;
}

html[lang="ja"] .k-tabs-content {
    position: relative;
    min-height: 600px;
}

.k-tabs-content>* {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    will-change: transform, opacity;
    backface-visibility: hidden;
    transform-origin: center center;
}
</style>