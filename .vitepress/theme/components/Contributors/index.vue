<template>
    <VPTeamPage>
        <VPTeamPageTitle>
            <template #title>
                OpenMCP 贡献者列表
            </template>
            <template #lead>
                OpenMCP 是一个非盈利的开源项目，它由对编程和AI技术热爱的开发者共同开发。我们欢迎任何有兴趣参与的开发者加入我们的项目中，一起努力提高AI技术的应用水平。
            </template>
        </VPTeamPageTitle>
        <VPTeamMembers :members />
    </VPTeamPage>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme';
import { customIcons } from '../../hook/icons';

interface Contributor {
    name: string;
    avatar: string;
    title: string;
    links: { icon: string; link: string; }[];
}

const props = defineProps({
    contributors: { type: Array as PropType<Contributor[]>, required: true },
});

const members = computed(() => {
    return props.contributors.map((contributor) => ({
        avatar: contributor.avatar,
        name: contributor.name,
        title: contributor.title,
        links: contributor.links.map(({ icon, link }) => {
            if (icon in customIcons) {
                return { icon: customIcons[icon as keyof typeof customIcons], link };
            }
            return { icon, link };
        }),
    }));
})


</script>

<style></style>