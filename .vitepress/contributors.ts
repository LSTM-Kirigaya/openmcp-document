interface SocialEntry {
    type: 'github' | 'twitter' | 'email' | string;
    link: string;
}

interface Contributor {
    /**
     * The overriding display name of the contributor in default locale
     */
    name?: string;
    /**
     * The overriding display name of the contributor in other locales if needed
     */
    i18n?: Record<string, string>;
    /**
     * The overriding GitHub, GitLab, Gitea username of the contributor
     */
    username?: string;
    /**
     * The overriding avatar of the contributor
     */
    avatar?: string;
    /**
     * Whether to add a link to the contributor's profile
     */
    links?: string | SocialEntry[];
    /**
     * More names to be recognized as the same contributor.
     *
     * Useful when you changed your name or email address in the past.
     *
     * @deprecated Use `mapByNameAliases` instead
     * @see mapByNameAliases
     */
    nameAliases?: string[];
    /**
     * More names to be recognized as the same contributor.
     *
     * Useful when you changed your name or email address in the past.
     */
    mapByNameAliases?: string[];
    /**
     * More emails to be recognized as the same contributor.
     *
     * Useful when you changed your email address in the past.
     *
     * @deprecated Use `mapByEmailAliases` instead
     * @see mapByEmailAliases
     */
    emailAliases?: string[];
    /**
     * More emails to be recognized as the same contributor.
     *
     * Useful when you changed your email address in the past.
     */
    mapByEmailAliases?: string[];
}

export const contributors = [
    {
        name: 'LSTM-Kirigaya (锦恢)',
        nameAliases: ['LSTM-Kirigaya', 'Kirigaya'],
        mapByEmailAliases: ['1193466151@qq.com'],
        links: [{ type: '', link: 'https://www.zhihu.com/people/can-meng-zhong-de-che-xian' }]
    },
    {
        name: 'PeaceSheep',
        nameAliases: ['li1553770945'],
        avatar: 'https://avatars.githubusercontent.com/u/55867654?v=4',
        mapByEmailAliases: ['1553770945@qq.com'],
        links: [{ type: '', link: 'https://peacesheep.xyz/home' }]
    },
    {
        name: '星弧梦影',
        nameAliases: ['StarArc'],
        avatar: 'https://avatars.githubusercontent.com/u/115577936?v=4',
        mapByEmailAliases: ['3951001763@qq.com'],
        links: [{ type: '', link: 'https://b23.tv/bqflzuJ' }]
    }
] as Contributor[];