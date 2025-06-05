import { reactive } from 'vue';

interface ScrollbarController {
    element: any;
    display: boolean;
    height: number;
    width: number;
    top: number;
    opacity: number;
    percentage: number;
}

export const scrollbarController = reactive<ScrollbarController>({
    element: undefined,
    display: true,
    height: 0,
    width: 5,
    top: 0,
    opacity: 0,
    percentage: 0
});

export const navigationBarController = reactive({
    show: true
});