export const TOGGLE_AUDIO_TYPE = 'audio/SELECT';
export const END_AUDIO_TYPE = 'audio/END_AUDIO_TYPE';

const HAS_END_LISTENER = Symbol();

const audio = new Audio();

// TODO: move this out of here
const toggleAudioElement = (url, {reset = false} = {reset: false}) => {

	if (audio.src !== url) {
		audio.pause();
		audio.src = url;
		audio.currentTime = 0;
		audio.play();
		return;
	}

	if (audio.paused) {
		if (reset) audio.currentTime = 0;
		audio.play();
	} else {
		audio.pause();
	}
};

const toggleAudioAction = (url, reset) => (dispatch) => {

	toggleAudioElement(url, reset);

	if (!audio[HAS_END_LISTENER]) {
		audio.addEventListener('ended', () => {
			dispatch({type: END_AUDIO_TYPE});
		});
		audio[HAS_END_LISTENER] = true;
	}

	dispatch({
		type: TOGGLE_AUDIO_TYPE,
		value: {
			url,
			playing: !audio.paused
		}
	});
};

export default toggleAudioAction;
