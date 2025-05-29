
export interface AnimationOption {
    durationMs?: number;
    name?: 'fade' | 'slide'
    easing?: 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

function sleep(time: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

let lastAnimationId = '';
let lastAnimationOption: AnimationOption | undefined = undefined;

export async function animateIn(id: string, animationOption?: AnimationOption) {
    const element = document.getElementById(id);
    if (!element) {
        return;
    }

    lastAnimationId = id;
    lastAnimationOption = animationOption;

    const { durationMs = 150, name = 'fade', easing = 'ease-out' } = animationOption || {};
    element.style.transition = `all ${durationMs / 1000}s ${easing}`;

    element.classList.remove(name + '-in');
    element.classList.add(name + '-out');
    await sleep(durationMs);
}

export async function animateOut(animationOption?: AnimationOption) {
    animationOption = animationOption || lastAnimationOption;

    const element = document.getElementById(lastAnimationId);
    if (!element) {
        return;
    }

    const { durationMs = 150, name = 'fade', easing = 'ease-out' } = animationOption || {};
    element.style.transition = `all ${durationMs / 1000}s ${easing}`;

    element.classList.remove(name + '-out');
    element.classList.add(name + '-in');
}