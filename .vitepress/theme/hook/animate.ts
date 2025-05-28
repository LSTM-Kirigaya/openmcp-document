
export interface AnimationOption {
    durationMs?: number;
    name?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
    easing?: 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

function sleep(time: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

let lastAnimationId = '';

export async function animateIn(id: string, animationOption?: AnimationOption) {
    const element = document.getElementById(id);
    if (!element) {
        return;
    }

    lastAnimationId = id;

    const { durationMs = 150, name = 'fade', easing = 'ease-out' } = animationOption || {};
    element.style.transition = `opacity ${durationMs / 1000}s ${easing}`;

    element.classList.remove(name + '-in');
    element.classList.add(name + '-out');
    await sleep(durationMs);
}

export async function animateOut(animationOption?: AnimationOption) {
    const element = document.getElementById(lastAnimationId);
    if (!element) {
        return;
    }

    const { durationMs = 150, name = 'fade', easing = 'ease-out' } = animationOption || {};
    element.style.transition = `opacity ${durationMs / 1000}s ${easing}`;

    element.classList.remove(name + '-out');
    element.classList.add(name + '-in');
}