import { Showpad } from '@showpad/experience-app-sdk';

const showGreetings = async (): Promise<void> => {
    const userInfo = await Showpad.getUserInfo();
    document.querySelector<HTMLDivElement>('#userGreetings')!.innerText = `Hello ${userInfo.fullName}!`;
};

const main = async (): Promise<void> => {
    try {
        // Wait for the Showpad SDK to be initialized
        await Showpad.onShowpadLibLoaded();

        // Show greetings
        await showGreetings();
    } catch (error) {
        Showpad.handleErrorWithToast(error);
        console.error(error);
    }
};

main();
