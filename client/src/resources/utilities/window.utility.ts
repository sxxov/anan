import { $ } from './$.utility';

export class WindowUtility {
	private static cache: {
		inner?: typeof WindowUtility['inner'];
		viewport?: typeof WindowUtility['viewport'];
		client?: typeof WindowUtility['client'];
		isMobile?: boolean;
	} = {};

	public static invalidateCache(): void {
		this.cache = {};
	}

	public static refresh(): void {
		this.invalidateCache();

		this.cache = {
			inner: this.inner,
			viewport: this.viewport,
			client: this.client,
			isMobile: this.isMobile,
		};
	}

	public static vh(amount: number): number {
		return (this.viewport.height / 100) * amount;
	}

	public static vw(amount: number): number {
		return (this.viewport.width / 100) * amount;
	}

	public static px(amount: number): number {
		return amount * window.devicePixelRatio;
	}

	static get client(): {
		height: number;
		width: number;
		min: number;
		max: number;
	} {
		if (this.cache?.client?.height
			|| this.cache?.client?.width) {
			return this.cache.client;
		}

		return {
			height: document.documentElement.clientHeight,
			width: document.documentElement.clientWidth,
			max: Math.max(document.documentElement.clientHeight, document.documentElement.clientWidth),
			min: Math.min(document.documentElement.clientHeight, document.documentElement.clientWidth),
		};
	}

	static get inner(): {
		height: number;
		width: number;
		min: number;
		max: number;
	} {
		if (this.cache?.inner?.height
			|| this.cache?.inner?.width) {
			return this.cache.inner;
		}

		return {
			height: window.innerHeight,
			width: window.innerWidth,
			max: Math.max(window.innerHeight, window.innerWidth),
			min: Math.min(window.innerHeight, window.innerWidth),
		};
	}

	static get viewport(): {
		height: number;
		width: number;
		min: number;
		max: number;
	} {
		if (this.cache?.viewport?.height
			|| this.cache?.viewport?.width) {
			return this.cache.viewport;
		}

		const viewportCalibrator = $(document.createElement('div'));

		viewportCalibrator.css({
			height: '100vh',
			width: '100vw',
			visibility: 'hidden',
		});

		document.body.appendChild(viewportCalibrator);

		const height = viewportCalibrator.offsetHeight;
		const width = viewportCalibrator.offsetWidth;

		document.body.removeChild(viewportCalibrator);

		return {
			height,
			width,
			max: Math.max(height, width),
			min: Math.min(height, width),
		};
	}

	static get isMobile(): boolean {
		if (this.cache?.isMobile) {
			return this.cache.isMobile;
		}

		const isMobile = window.matchMedia('(pointer: coarse)').matches
			|| window.matchMedia('(pointer: cnone)').matches;

		this.cache.isMobile = isMobile;

		return isMobile;
	}
}

if (typeof window !== String(undefined)) {
	$(window).on('resize', () => {
		WindowUtility.refresh();
	});
}
