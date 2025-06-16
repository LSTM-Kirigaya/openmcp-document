<template>
    <VPTeamPage>
        <VPTeamPageTitle>
            <template #title>
                {{ messages[lang].title }}
            </template>
            <template #lead>
                {{ messages[lang].lead }}
            </template>
        </VPTeamPageTitle>
        <VPTeamMembers :members />
    </VPTeamPage>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme';
import { customIcons } from '../../hook/icons';
import { useData } from 'vitepress'

const { lang } = useData();

console.log(lang.value);


const messages = {
    zh: {
        title: 'OpenMCP 贡献者列表',
        lead: 'OpenMCP 是一个非盈利的开源项目，它由对编程和AI技术热爱的开发者共同开发。我们欢迎任何有兴趣参与的开发者加入我们的项目中，一起努力提高AI技术的应用水平。'
    },
    en: {
        title: 'OpenMCP Contributors',
        lead: 'OpenMCP is a non-profit open source project developed by developers passionate about programming and AI technology. We welcome any interested developers to join our project and work together to improve the application of AI technology.'
    },
    ja: {
        title: 'OpenMCP コントリビューター一覧',
        lead: 'OpenMCPは、プログラミングとAI技術を愛する開発者によって共同開発された非営利のオープンソースプロジェクトです。興味のある開発者の参加を歓迎し、AI技術の応用向上に一緒に取り組みましょう。'
    }
}

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