---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://pic1.zhimg.com/v2-b4251de7d2499e942c7ebf447a90d2eb_xll.jpg?source=32738c0c',
    name: 'LSTM-Kirigaya (锦恢)',
    title: 'Creator & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/LSTM-Kirigaya' },
      { icon: 'zhihu', link: 'https://www.zhihu.com/people/can-meng-zhong-de-che-xian' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/55867654?v=4',
    name: 'li1553770945 (Li Yaning)',
    title: 'Creator & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/li1553770945' },
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/8943691?v=4',
    name: 'appli456',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/appli456' },
    ]
  },
    {
    avatar: 'https://avatars.githubusercontent.com/u/115577936?v=4',
    name: 'AmeSoraQwQ (AmeZora)',
    title: 'Creator & Operation',
    links: [
      { icon: 'github', link: 'https://github.com/AmeSoraQwQ' },
    ]
  },
]
</script>

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