---
layout: page
---

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme';

const contributors = [
  {
    avatar: 'https://pic1.zhimg.com/v2-b4251de7d2499e942c7ebf447a90d2eb_xll.jpg?source=32738c0c',
    name: 'LSTM-Kirigaya (錦恢)',
    title: '創設者 & 開発者',
    links: [
      { icon: 'github', link: 'https://github.com/LSTM-Kirigaya' },
      { icon: 'zhihu', link: 'https://www.zhihu.com/people/can-meng-zhong-de-che-xian' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/434469188?spm_id_from=333.1007.0.0' },
      { icon: 'blog', link: 'https://kirigaya.cn/home' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/55867654?v=4',
    name: 'PeaceSheep',
    title: '創設者 & 開発者',
    links: [
      { icon: 'github', link: 'https://github.com/li1553770945' },
      { icon: 'blog', link: 'https://peacesheep.xyz' },
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/8943691?v=4',
    name: 'appli456',
    title: '開発者',
    links: [
      { icon: 'github', link: 'https://github.com/appli456' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/115577936?v=4',
    name: 'AmeSoraQwQ (AmeZora)',
    title: '創設者 & 運営',
    links: [
      { icon: 'bilibili', link: 'https://b23.tv/bqflzuJ' },
      { icon: 'github', link: 'https://github.com/ArcStellar2025' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/129645384?v=4',
    name: 'SFXJX (社奉行佳婿)',
    title: '開発者',
    links: [
      { icon: 'github', link: 'https://github.com/STUzhy' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/37235140?v=4',
    name: 'hao (cybermanhao)',
    title: '開発者',
    links: [
      { icon: 'github', link: 'https://github.com/cybermanhao' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/213030338?v=4',
    name: 'reliedejuedouzhe2',
    title: '開発者',
    links: [
      { icon: 'github', link: 'https://github.com/reliedejuedouzhe2' },
    ]
  }
]
</script>

<Contributors
  :contributors="contributors"
/>