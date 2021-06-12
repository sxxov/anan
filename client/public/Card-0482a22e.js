
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { A as create_slot, B as update_slot, f as transition_in, g as transition_out, k as dispatch_dev, q as assign, F as Fragment, e as element, c as create_component, G as set_style, H as CSSUtility, a as attr_dev, b as add_location, i as insert_dev, m as mount_component, w as get_spread_update, x as get_spread_object, h as detach_dev, j as destroy_component, J as compute_rest_props, n as noop, K as subscribe, v as validate_slots, M as writable, N as validate_store, a1 as onMount, a2 as Shadow, D as binding_callbacks, O as exclude_internal_props, l as SvelteComponentDev, o as init, p as safe_not_equal, P as flush } from './index-8afd74d9.js';

var undefined$1 = undefined;

/* src\ui\blocks\Card.svelte generated by Svelte v3.38.2 */
const file = "src\\ui\\blocks\\Card.svelte";

// (33:1) <Scene    backgroundColour='transparent'    height='100%'    width='100%'    {...$$restProps}   >
function create_default_slot(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[13].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[15], null);

	const block = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32768)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[15], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(33:1) <Scene    backgroundColour='transparent'    height='100%'    width='100%'    {...$$restProps}   >",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let component;
	let scene;
	let current;

	const scene_spread_levels = [
		{ backgroundColour: "transparent" },
		{ height: "100%" },
		{ width: "100%" },
		/*$$restProps*/ ctx[9]
	];

	let scene_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};

	for (let i = 0; i < scene_spread_levels.length; i += 1) {
		scene_props = assign(scene_props, scene_spread_levels[i]);
	}

	scene = new Fragment({ props: scene_props, $$inline: true });

	const block = {
		c: function create() {
			component = element("component");
			create_component(scene.$$.fragment);
			set_style(component, "--colour-background", CSSUtility.parse(/*backgroundColour*/ ctx[0]));
			set_style(component, "--colour-hover", CSSUtility.parse(/*hoverColour*/ ctx[1]));
			set_style(component, "--height", CSSUtility.parse(/*$heightW*/ ctx[7]));
			set_style(component, "--width", CSSUtility.parse(/*$widthW*/ ctx[8]));

			set_style(component, "--box-shadow", /*isFloatingInverted*/ ctx[3]
			? "var(--shadow)"
			: "var(--shadow-inactive)");

			set_style(component, "--active-box-shadow", /*isFloatingInverted*/ ctx[3]
			? "var(--shadow-inactive)"
			: "var(--shadow)");

			set_style(component, "--card-roundness", CSSUtility.parse(/*roundness*/ ctx[2]));
			attr_dev(component, "class", "svelte-8idjyq");
			add_location(component, file, 20, 0, 699);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, component, anchor);
			mount_component(scene, component, null);
			/*component_binding*/ ctx[14](component);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const scene_changes = (dirty & /*$$restProps*/ 512)
			? get_spread_update(scene_spread_levels, [
					scene_spread_levels[0],
					scene_spread_levels[1],
					scene_spread_levels[2],
					get_spread_object(/*$$restProps*/ ctx[9])
				])
			: {};

			if (dirty & /*$$scope*/ 32768) {
				scene_changes.$$scope = { dirty, ctx };
			}

			scene.$set(scene_changes);

			if (!current || dirty & /*backgroundColour*/ 1) {
				set_style(component, "--colour-background", CSSUtility.parse(/*backgroundColour*/ ctx[0]));
			}

			if (!current || dirty & /*hoverColour*/ 2) {
				set_style(component, "--colour-hover", CSSUtility.parse(/*hoverColour*/ ctx[1]));
			}

			if (!current || dirty & /*$heightW*/ 128) {
				set_style(component, "--height", CSSUtility.parse(/*$heightW*/ ctx[7]));
			}

			if (!current || dirty & /*$widthW*/ 256) {
				set_style(component, "--width", CSSUtility.parse(/*$widthW*/ ctx[8]));
			}

			if (!current || dirty & /*isFloatingInverted*/ 8) {
				set_style(component, "--box-shadow", /*isFloatingInverted*/ ctx[3]
				? "var(--shadow)"
				: "var(--shadow-inactive)");
			}

			if (!current || dirty & /*isFloatingInverted*/ 8) {
				set_style(component, "--active-box-shadow", /*isFloatingInverted*/ ctx[3]
				? "var(--shadow-inactive)"
				: "var(--shadow)");
			}

			if (!current || dirty & /*roundness*/ 4) {
				set_style(component, "--card-roundness", CSSUtility.parse(/*roundness*/ ctx[2]));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(scene.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(scene.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(component);
			destroy_component(scene);
			/*component_binding*/ ctx[14](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"depth","backgroundColour","hoverColour","roundness","isFloatingInverted","height","width","heightW","widthW"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);

	let $heightW,
		$$unsubscribe_heightW = noop,
		$$subscribe_heightW = () => ($$unsubscribe_heightW(), $$unsubscribe_heightW = subscribe(heightW, $$value => $$invalidate(7, $heightW = $$value)), heightW);

	let $widthW,
		$$unsubscribe_widthW = noop,
		$$subscribe_widthW = () => ($$unsubscribe_widthW(), $$unsubscribe_widthW = subscribe(widthW, $$value => $$invalidate(8, $widthW = $$value)), widthW);

	$$self.$$.on_destroy.push(() => $$unsubscribe_heightW());
	$$self.$$.on_destroy.push(() => $$unsubscribe_widthW());
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Card", slots, ['default']);
	let { depth = 3 } = $$props;
	let { backgroundColour = "--colour-background-secondary" } = $$props;
	let { hoverColour = "--colour-accent-primary" } = $$props;
	let { roundness = "--roundness" } = $$props;
	let { isFloatingInverted = false } = $$props;
	let { height = "auto" } = $$props;
	let { width = "auto" } = $$props;
	let { heightW = writable(height) } = $$props;
	validate_store(heightW, "heightW");
	$$subscribe_heightW();
	let { widthW = writable(width) } = $$props;
	validate_store(widthW, "widthW");
	$$subscribe_widthW();
	let componentDomContent;

	onMount(() => {
		Shadow.apply(depth, componentDomContent);
	});

	function component_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			componentDomContent = $$value;
			$$invalidate(6, componentDomContent);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("depth" in $$new_props) $$invalidate(10, depth = $$new_props.depth);
		if ("backgroundColour" in $$new_props) $$invalidate(0, backgroundColour = $$new_props.backgroundColour);
		if ("hoverColour" in $$new_props) $$invalidate(1, hoverColour = $$new_props.hoverColour);
		if ("roundness" in $$new_props) $$invalidate(2, roundness = $$new_props.roundness);
		if ("isFloatingInverted" in $$new_props) $$invalidate(3, isFloatingInverted = $$new_props.isFloatingInverted);
		if ("height" in $$new_props) $$invalidate(11, height = $$new_props.height);
		if ("width" in $$new_props) $$invalidate(12, width = $$new_props.width);
		if ("heightW" in $$new_props) $$subscribe_heightW($$invalidate(4, heightW = $$new_props.heightW));
		if ("widthW" in $$new_props) $$subscribe_widthW($$invalidate(5, widthW = $$new_props.widthW));
		if ("$$scope" in $$new_props) $$invalidate(15, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		onMount,
		writable,
		Shadow,
		CSSUtility,
		Scene: Fragment,
		depth,
		backgroundColour,
		hoverColour,
		roundness,
		isFloatingInverted,
		height,
		width,
		heightW,
		widthW,
		componentDomContent,
		$heightW,
		$widthW
	});

	$$self.$inject_state = $$new_props => {
		if ("depth" in $$props) $$invalidate(10, depth = $$new_props.depth);
		if ("backgroundColour" in $$props) $$invalidate(0, backgroundColour = $$new_props.backgroundColour);
		if ("hoverColour" in $$props) $$invalidate(1, hoverColour = $$new_props.hoverColour);
		if ("roundness" in $$props) $$invalidate(2, roundness = $$new_props.roundness);
		if ("isFloatingInverted" in $$props) $$invalidate(3, isFloatingInverted = $$new_props.isFloatingInverted);
		if ("height" in $$props) $$invalidate(11, height = $$new_props.height);
		if ("width" in $$props) $$invalidate(12, width = $$new_props.width);
		if ("heightW" in $$props) $$subscribe_heightW($$invalidate(4, heightW = $$new_props.heightW));
		if ("widthW" in $$props) $$subscribe_widthW($$invalidate(5, widthW = $$new_props.widthW));
		if ("componentDomContent" in $$props) $$invalidate(6, componentDomContent = $$new_props.componentDomContent);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		backgroundColour,
		hoverColour,
		roundness,
		isFloatingInverted,
		heightW,
		widthW,
		componentDomContent,
		$heightW,
		$widthW,
		$$restProps,
		depth,
		height,
		width,
		slots,
		component_binding,
		$$scope
	];
}

class Card extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			depth: 10,
			backgroundColour: 0,
			hoverColour: 1,
			roundness: 2,
			isFloatingInverted: 3,
			height: 11,
			width: 12,
			heightW: 4,
			widthW: 5
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Card",
			options,
			id: create_fragment.name
		});
	}

	get depth() {
		return this.$$.ctx[10];
	}

	set depth(depth) {
		this.$set({ depth });
		flush();
	}

	get backgroundColour() {
		return this.$$.ctx[0];
	}

	set backgroundColour(backgroundColour) {
		this.$set({ backgroundColour });
		flush();
	}

	get hoverColour() {
		return this.$$.ctx[1];
	}

	set hoverColour(hoverColour) {
		this.$set({ hoverColour });
		flush();
	}

	get roundness() {
		return this.$$.ctx[2];
	}

	set roundness(roundness) {
		this.$set({ roundness });
		flush();
	}

	get isFloatingInverted() {
		return this.$$.ctx[3];
	}

	set isFloatingInverted(isFloatingInverted) {
		this.$set({ isFloatingInverted });
		flush();
	}

	get height() {
		return this.$$.ctx[11];
	}

	set height(height) {
		this.$set({ height });
		flush();
	}

	get width() {
		return this.$$.ctx[12];
	}

	set width(width) {
		this.$set({ width });
		flush();
	}

	get heightW() {
		return this.$$.ctx[4];
	}

	set heightW(heightW) {
		this.$set({ heightW });
		flush();
	}

	get widthW() {
		return this.$$.ctx[5];
	}

	set widthW(widthW) {
		this.$set({ widthW });
		flush();
	}
}

export { Card as C };
//# sourceMappingURL=Card-0482a22e.js.map
