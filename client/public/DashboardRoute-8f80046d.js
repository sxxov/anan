
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { e as element, t as text, G as set_style, H as CSSUtility, a as attr_dev, b as add_location, i as insert_dev, d as append_dev, a6 as set_data_dev, h as detach_dev, k as dispatch_dev, A as create_slot, s as space, B as update_slot, f as transition_in, g as transition_out, q as assign, Q as Button, c as create_component, m as mount_component, w as get_spread_update, x as get_spread_object, j as destroy_component, J as compute_rest_props, n as noop, K as subscribe, v as validate_slots, M as writable, N as validate_store, W as createEventDispatcher, _ as set_store_value, O as exclude_internal_props, l as SvelteComponentDev, o as init, p as safe_not_equal, P as flush, $ as globals, u as empty, ad as Logo, ae as validate_each_argument, y as group_outros, z as check_outros, af as destroy_each, F as Fragment } from './index-c25afb85.js';

var undefined$3 = undefined;

/* src\ui\blocks\buttons\FillOrTwoToneButton.svelte generated by Svelte v3.38.2 */
const file$2 = "src\\ui\\blocks\\buttons\\FillOrTwoToneButton.svelte";

// (49:2) {:else}
function create_else_block(ctx) {
	let iconf;
	let t;

	const block = {
		c: function create() {
			iconf = element("iconf");
			t = text(/*$iconW*/ ctx[9]);
			set_style(iconf, "--colour-fill", CSSUtility.parse(/*currentFillColour*/ ctx[6]));
			set_style(iconf, "--icon-size", CSSUtility.parse(/*iconSize*/ ctx[2]));
			attr_dev(iconf, "class", "svelte-32dey3");
			add_location(iconf, file$2, 49, 3, 1562);
		},
		m: function mount(target, anchor) {
			insert_dev(target, iconf, anchor);
			append_dev(iconf, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$iconW*/ 512) set_data_dev(t, /*$iconW*/ ctx[9]);

			if (dirty & /*currentFillColour*/ 64) {
				set_style(iconf, "--colour-fill", CSSUtility.parse(/*currentFillColour*/ ctx[6]));
			}

			if (dirty & /*iconSize*/ 4) {
				set_style(iconf, "--icon-size", CSSUtility.parse(/*iconSize*/ ctx[2]));
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(iconf);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(49:2) {:else}",
		ctx
	});

	return block;
}

// (40:2) {#if $isTwoToneW}
function create_if_block$1(ctx) {
	let icon_1;
	let t;

	const block = {
		c: function create() {
			icon_1 = element("icon");
			t = text(/*$iconW*/ ctx[9]);
			set_style(icon_1, "--filter-twotone", CSSUtility.parse(/*currentTwoToneFilter*/ ctx[7]));
			set_style(icon_1, "--icon-size", CSSUtility.parse(/*iconSize*/ ctx[2]));
			attr_dev(icon_1, "class", "svelte-32dey3");
			add_location(icon_1, file$2, 40, 3, 1374);
		},
		m: function mount(target, anchor) {
			insert_dev(target, icon_1, anchor);
			append_dev(icon_1, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$iconW*/ 512) set_data_dev(t, /*$iconW*/ ctx[9]);

			if (dirty & /*currentTwoToneFilter*/ 128) {
				set_style(icon_1, "--filter-twotone", CSSUtility.parse(/*currentTwoToneFilter*/ ctx[7]));
			}

			if (dirty & /*iconSize*/ 4) {
				set_style(icon_1, "--icon-size", CSSUtility.parse(/*iconSize*/ ctx[2]));
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(icon_1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(40:2) {#if $isTwoToneW}",
		ctx
	});

	return block;
}

// (31:0) <Button   on:click={() => dispatch('click')}   on:mouseover={() => (($isHoveredW = true), dispatch('mouseover'))}   on:mouseout={() => (($isHoveredW = false),  dispatch('mouseout'))}   hoverColour={backgroundHoverColour}   {...$$restProps}   isText={false}  >
function create_default_slot$2(ctx) {
	let container;
	let t;
	let current;

	function select_block_type(ctx, dirty) {
		if (/*$isTwoToneW*/ ctx[8]) return create_if_block$1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);
	const default_slot_template = /*#slots*/ ctx[18].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[22], null);

	const block = {
		c: function create() {
			container = element("container");
			if_block.c();
			t = space();
			if (default_slot) default_slot.c();
			attr_dev(container, "class", "svelte-32dey3");
			add_location(container, file$2, 38, 1, 1336);
		},
		m: function mount(target, anchor) {
			insert_dev(target, container, anchor);
			if_block.m(container, null);
			append_dev(container, t);

			if (default_slot) {
				default_slot.m(container, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(container, t);
				}
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4194304)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[22], dirty, null, null);
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
			if (detaching) detach_dev(container);
			if_block.d();
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$2.name,
		type: "slot",
		source: "(31:0) <Button   on:click={() => dispatch('click')}   on:mouseover={() => (($isHoveredW = true), dispatch('mouseover'))}   on:mouseout={() => (($isHoveredW = false),  dispatch('mouseout'))}   hoverColour={backgroundHoverColour}   {...$$restProps}   isText={false}  >",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let button;
	let current;

	const button_spread_levels = [
		{
			hoverColour: /*backgroundHoverColour*/ ctx[3]
		},
		/*$$restProps*/ ctx[11],
		{ isText: false }
	];

	let button_props = {
		$$slots: { default: [create_default_slot$2] },
		$$scope: { ctx }
	};

	for (let i = 0; i < button_spread_levels.length; i += 1) {
		button_props = assign(button_props, button_spread_levels[i]);
	}

	button = new Button({ props: button_props, $$inline: true });
	button.$on("click", /*click_handler*/ ctx[19]);
	button.$on("mouseover", /*mouseover_handler*/ ctx[20]);
	button.$on("mouseout", /*mouseout_handler*/ ctx[21]);

	const block = {
		c: function create() {
			create_component(button.$$.fragment);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(button, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const button_changes = (dirty & /*backgroundHoverColour, $$restProps*/ 2056)
			? get_spread_update(button_spread_levels, [
					dirty & /*backgroundHoverColour*/ 8 && {
						hoverColour: /*backgroundHoverColour*/ ctx[3]
					},
					dirty & /*$$restProps*/ 2048 && get_spread_object(/*$$restProps*/ ctx[11]),
					button_spread_levels[2]
				])
			: {};

			if (dirty & /*$$scope, currentTwoToneFilter, iconSize, $iconW, $isTwoToneW, currentFillColour*/ 4195268) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"isTwoTone","isTwoToneW","icon","iconW","iconSize","twoToneFilter","fillColour","hoverFillColour","hoverTwoToneFiler","backgroundHoverColour","isHoveredW"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);

	let $isHoveredW,
		$$unsubscribe_isHoveredW = noop,
		$$subscribe_isHoveredW = () => ($$unsubscribe_isHoveredW(), $$unsubscribe_isHoveredW = subscribe(isHoveredW, $$value => $$invalidate(5, $isHoveredW = $$value)), isHoveredW);

	let $isTwoToneW,
		$$unsubscribe_isTwoToneW = noop,
		$$subscribe_isTwoToneW = () => ($$unsubscribe_isTwoToneW(), $$unsubscribe_isTwoToneW = subscribe(isTwoToneW, $$value => $$invalidate(8, $isTwoToneW = $$value)), isTwoToneW);

	let $iconW,
		$$unsubscribe_iconW = noop,
		$$subscribe_iconW = () => ($$unsubscribe_iconW(), $$unsubscribe_iconW = subscribe(iconW, $$value => $$invalidate(9, $iconW = $$value)), iconW);

	$$self.$$.on_destroy.push(() => $$unsubscribe_isHoveredW());
	$$self.$$.on_destroy.push(() => $$unsubscribe_isTwoToneW());
	$$self.$$.on_destroy.push(() => $$unsubscribe_iconW());
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("FillOrTwoToneButton", slots, ['default']);
	
	let { isTwoTone = true } = $$props;
	let { isTwoToneW = writable(isTwoTone) } = $$props;
	validate_store(isTwoToneW, "isTwoToneW");
	$$subscribe_isTwoToneW();
	let { icon = "done" } = $$props;
	let { iconW = writable(icon) } = $$props;
	validate_store(iconW, "iconW");
	$$subscribe_iconW();
	let { iconSize = "1rem" } = $$props;
	let { twoToneFilter = "--filter-text-secondary" } = $$props;
	let { fillColour = "--colour-text-secondary" } = $$props;
	let { hoverFillColour = "--colour-accent-primary" } = $$props;
	let { hoverTwoToneFiler = "--filter-accent-primary" } = $$props;
	let { backgroundHoverColour = "--colour-accent-secondary" } = $$props;
	let { isHoveredW = writable(false) } = $$props;
	validate_store(isHoveredW, "isHoveredW");
	$$subscribe_isHoveredW();
	const dispatch = createEventDispatcher();
	let currentFillColour;
	let currentTwoToneFilter;
	const click_handler = () => dispatch("click");
	const mouseover_handler = () => (set_store_value(isHoveredW, $isHoveredW = true, $isHoveredW), dispatch("mouseover"));
	const mouseout_handler = () => (set_store_value(isHoveredW, $isHoveredW = false, $isHoveredW), dispatch("mouseout"));

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(11, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("isTwoTone" in $$new_props) $$invalidate(12, isTwoTone = $$new_props.isTwoTone);
		if ("isTwoToneW" in $$new_props) $$subscribe_isTwoToneW($$invalidate(0, isTwoToneW = $$new_props.isTwoToneW));
		if ("icon" in $$new_props) $$invalidate(13, icon = $$new_props.icon);
		if ("iconW" in $$new_props) $$subscribe_iconW($$invalidate(1, iconW = $$new_props.iconW));
		if ("iconSize" in $$new_props) $$invalidate(2, iconSize = $$new_props.iconSize);
		if ("twoToneFilter" in $$new_props) $$invalidate(14, twoToneFilter = $$new_props.twoToneFilter);
		if ("fillColour" in $$new_props) $$invalidate(15, fillColour = $$new_props.fillColour);
		if ("hoverFillColour" in $$new_props) $$invalidate(16, hoverFillColour = $$new_props.hoverFillColour);
		if ("hoverTwoToneFiler" in $$new_props) $$invalidate(17, hoverTwoToneFiler = $$new_props.hoverTwoToneFiler);
		if ("backgroundHoverColour" in $$new_props) $$invalidate(3, backgroundHoverColour = $$new_props.backgroundHoverColour);
		if ("isHoveredW" in $$new_props) $$subscribe_isHoveredW($$invalidate(4, isHoveredW = $$new_props.isHoveredW));
		if ("$$scope" in $$new_props) $$invalidate(22, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		writable,
		CSSUtility,
		Button,
		isTwoTone,
		isTwoToneW,
		icon,
		iconW,
		iconSize,
		twoToneFilter,
		fillColour,
		hoverFillColour,
		hoverTwoToneFiler,
		backgroundHoverColour,
		isHoveredW,
		dispatch,
		currentFillColour,
		currentTwoToneFilter,
		$isHoveredW,
		$isTwoToneW,
		$iconW
	});

	$$self.$inject_state = $$new_props => {
		if ("isTwoTone" in $$props) $$invalidate(12, isTwoTone = $$new_props.isTwoTone);
		if ("isTwoToneW" in $$props) $$subscribe_isTwoToneW($$invalidate(0, isTwoToneW = $$new_props.isTwoToneW));
		if ("icon" in $$props) $$invalidate(13, icon = $$new_props.icon);
		if ("iconW" in $$props) $$subscribe_iconW($$invalidate(1, iconW = $$new_props.iconW));
		if ("iconSize" in $$props) $$invalidate(2, iconSize = $$new_props.iconSize);
		if ("twoToneFilter" in $$props) $$invalidate(14, twoToneFilter = $$new_props.twoToneFilter);
		if ("fillColour" in $$props) $$invalidate(15, fillColour = $$new_props.fillColour);
		if ("hoverFillColour" in $$props) $$invalidate(16, hoverFillColour = $$new_props.hoverFillColour);
		if ("hoverTwoToneFiler" in $$props) $$invalidate(17, hoverTwoToneFiler = $$new_props.hoverTwoToneFiler);
		if ("backgroundHoverColour" in $$props) $$invalidate(3, backgroundHoverColour = $$new_props.backgroundHoverColour);
		if ("isHoveredW" in $$props) $$subscribe_isHoveredW($$invalidate(4, isHoveredW = $$new_props.isHoveredW));
		if ("currentFillColour" in $$props) $$invalidate(6, currentFillColour = $$new_props.currentFillColour);
		if ("currentTwoToneFilter" in $$props) $$invalidate(7, currentTwoToneFilter = $$new_props.currentTwoToneFilter);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$isHoveredW, hoverFillColour, hoverTwoToneFiler, fillColour, twoToneFilter*/ 245792) {
			$: $isHoveredW
			? (() => {
					$$invalidate(6, currentFillColour = hoverFillColour);
					$$invalidate(7, currentTwoToneFilter = hoverTwoToneFiler);
				})()
			: (() => {
					$$invalidate(6, currentFillColour = fillColour);
					$$invalidate(7, currentTwoToneFilter = twoToneFilter);
				})();
		}
	};

	return [
		isTwoToneW,
		iconW,
		iconSize,
		backgroundHoverColour,
		isHoveredW,
		$isHoveredW,
		currentFillColour,
		currentTwoToneFilter,
		$isTwoToneW,
		$iconW,
		dispatch,
		$$restProps,
		isTwoTone,
		icon,
		twoToneFilter,
		fillColour,
		hoverFillColour,
		hoverTwoToneFiler,
		slots,
		click_handler,
		mouseover_handler,
		mouseout_handler,
		$$scope
	];
}

class FillOrTwoToneButton extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
			isTwoTone: 12,
			isTwoToneW: 0,
			icon: 13,
			iconW: 1,
			iconSize: 2,
			twoToneFilter: 14,
			fillColour: 15,
			hoverFillColour: 16,
			hoverTwoToneFiler: 17,
			backgroundHoverColour: 3,
			isHoveredW: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FillOrTwoToneButton",
			options,
			id: create_fragment$2.name
		});
	}

	get isTwoTone() {
		return this.$$.ctx[12];
	}

	set isTwoTone(isTwoTone) {
		this.$set({ isTwoTone });
		flush();
	}

	get isTwoToneW() {
		return this.$$.ctx[0];
	}

	set isTwoToneW(isTwoToneW) {
		this.$set({ isTwoToneW });
		flush();
	}

	get icon() {
		return this.$$.ctx[13];
	}

	set icon(icon) {
		this.$set({ icon });
		flush();
	}

	get iconW() {
		return this.$$.ctx[1];
	}

	set iconW(iconW) {
		this.$set({ iconW });
		flush();
	}

	get iconSize() {
		return this.$$.ctx[2];
	}

	set iconSize(iconSize) {
		this.$set({ iconSize });
		flush();
	}

	get twoToneFilter() {
		return this.$$.ctx[14];
	}

	set twoToneFilter(twoToneFilter) {
		this.$set({ twoToneFilter });
		flush();
	}

	get fillColour() {
		return this.$$.ctx[15];
	}

	set fillColour(fillColour) {
		this.$set({ fillColour });
		flush();
	}

	get hoverFillColour() {
		return this.$$.ctx[16];
	}

	set hoverFillColour(hoverFillColour) {
		this.$set({ hoverFillColour });
		flush();
	}

	get hoverTwoToneFiler() {
		return this.$$.ctx[17];
	}

	set hoverTwoToneFiler(hoverTwoToneFiler) {
		this.$set({ hoverTwoToneFiler });
		flush();
	}

	get backgroundHoverColour() {
		return this.$$.ctx[3];
	}

	set backgroundHoverColour(backgroundHoverColour) {
		this.$set({ backgroundHoverColour });
		flush();
	}

	get isHoveredW() {
		return this.$$.ctx[4];
	}

	set isHoveredW(isHoveredW) {
		this.$set({ isHoveredW });
		flush();
	}
}

var undefined$2 = undefined;

/* src\ui\components\Sidebar.svelte generated by Svelte v3.38.2 */

const { Object: Object_1 } = globals;
const file$1 = "src\\ui\\components\\Sidebar.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i][0];
	child_ctx[7] = list[i][1];
	child_ctx[9] = i;
	return child_ctx;
}

// (51:4) {#if $isTitlesEnabledW}
function create_if_block(ctx) {
	let heading;
	let t_value = /*title*/ ctx[7] + "";
	let t;

	const block = {
		c: function create() {
			heading = element("heading");
			t = text(t_value);
			attr_dev(heading, "class", "svelte-10wjxq7");
			add_location(heading, file$1, 51, 5, 1314);
		},
		m: function mount(target, anchor) {
			insert_dev(target, heading, anchor);
			append_dev(heading, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(heading);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(51:4) {#if $isTitlesEnabledW}",
		ctx
	});

	return block;
}

// (45:3) <FillOrTwoToneButton      backgroundColour='transparent'      hoverColour='--colour-accent-secondary'      {icon}      iconSize='1.4rem'     >
function create_default_slot_1(ctx) {
	let if_block_anchor;
	let if_block = /*$isTitlesEnabledW*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*$isTitlesEnabledW*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(45:3) <FillOrTwoToneButton      backgroundColour='transparent'      hoverColour='--colour-accent-secondary'      {icon}      iconSize='1.4rem'     >",
		ctx
	});

	return block;
}

// (41:1) {#each IconAndTitleEntries as [icon, title], i}
function create_each_block(ctx) {
	let container;
	let fillortwotonebutton;
	let t;
	let current;

	fillortwotonebutton = new FillOrTwoToneButton({
			props: {
				backgroundColour: "transparent",
				hoverColour: "--colour-accent-secondary",
				icon: /*icon*/ ctx[6],
				iconSize: "1.4rem",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			container = element("container");
			create_component(fillortwotonebutton.$$.fragment);
			t = space();
			attr_dev(container, "class", "button svelte-10wjxq7");
			add_location(container, file$1, 41, 2, 1097);
		},
		m: function mount(target, anchor) {
			insert_dev(target, container, anchor);
			mount_component(fillortwotonebutton, container, null);
			append_dev(container, t);
			current = true;
		},
		p: function update(ctx, dirty) {
			const fillortwotonebutton_changes = {};

			if (dirty & /*$$scope, $isTitlesEnabledW*/ 1026) {
				fillortwotonebutton_changes.$$scope = { dirty, ctx };
			}

			fillortwotonebutton.$set(fillortwotonebutton_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(fillortwotonebutton.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(fillortwotonebutton.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(container);
			destroy_component(fillortwotonebutton);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(41:1) {#each IconAndTitleEntries as [icon, title], i}",
		ctx
	});

	return block;
}

// (23:0) <Fragment   isPadded={true}   isInAnimated={true}   isOutAnimated={true}   padding='calc(var(--padding) / 2)'   height='100vh'   width='100%'   justify='flex-start'   rows={`repeat(${    // + logo    IconAndTitleEntries.length + 1   }, 56px)`}  >
function create_default_slot$1(ctx) {
	let logo;
	let t;
	let each_1_anchor;
	let current;

	logo = new Logo({
			props: {
				colour: "--colour-text-primary",
				height: "auto",
				width: "auto"
			},
			$$inline: true
		});

	let each_value = /*IconAndTitleEntries*/ ctx[2];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(logo.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(logo, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*IconAndTitleEntries, $isTitlesEnabledW*/ 6) {
				each_value = /*IconAndTitleEntries*/ ctx[2];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(logo.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(logo.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(logo, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$1.name,
		type: "slot",
		source: "(23:0) <Fragment   isPadded={true}   isInAnimated={true}   isOutAnimated={true}   padding='calc(var(--padding) / 2)'   height='100vh'   width='100%'   justify='flex-start'   rows={`repeat(${    // + logo    IconAndTitleEntries.length + 1   }, 56px)`}  >",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let fragment;
	let current;

	fragment = new Fragment({
			props: {
				isPadded: true,
				isInAnimated: true,
				isOutAnimated: true,
				padding: "calc(var(--padding) / 2)",
				height: "100vh",
				width: "100%",
				justify: "flex-start",
				rows: `repeat(${// + logo
				/*IconAndTitleEntries*/ ctx[2].length + 1}, 56px)`,
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(fragment.$$.fragment);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(fragment, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const fragment_changes = {};

			if (dirty & /*$$scope, $isTitlesEnabledW*/ 1026) {
				fragment_changes.$$scope = { dirty, ctx };
			}

			fragment.$set(fragment_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(fragment.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(fragment.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(fragment, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const textColour = "--colour-text-primary";

function instance$1($$self, $$props, $$invalidate) {
	let $isTitlesEnabledW,
		$$unsubscribe_isTitlesEnabledW = noop,
		$$subscribe_isTitlesEnabledW = () => ($$unsubscribe_isTitlesEnabledW(), $$unsubscribe_isTitlesEnabledW = subscribe(isTitlesEnabledW, $$value => $$invalidate(1, $isTitlesEnabledW = $$value)), isTitlesEnabledW);

	$$self.$$.on_destroy.push(() => $$unsubscribe_isTitlesEnabledW());
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Sidebar", slots, []);
	
	let { isTitlesEnabled = true } = $$props;
	let { isTitlesEnabledW = writable(isTitlesEnabled) } = $$props;
	validate_store(isTitlesEnabledW, "isTitlesEnabledW");
	$$subscribe_isTitlesEnabledW();

	const IconAndTitleMap = {
		cottage: "Home",
		tag: "These",
		notifications: "Aren't",
		mail: "Actually",
		bookmark: "Functional",
		subject: "They're",
		account_circle: "Purely",
		more_vert: "Distractions"
	};

	const IconAndTitleEntries = Object.entries(IconAndTitleMap);
	const buttons = [];
	const writable_props = ["isTitlesEnabled", "isTitlesEnabledW"];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Sidebar> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("isTitlesEnabled" in $$props) $$invalidate(3, isTitlesEnabled = $$props.isTitlesEnabled);
		if ("isTitlesEnabledW" in $$props) $$subscribe_isTitlesEnabledW($$invalidate(0, isTitlesEnabledW = $$props.isTitlesEnabledW));
	};

	$$self.$capture_state = () => ({
		writable,
		FillOrTwoToneButton,
		Fragment,
		Logo,
		isTitlesEnabled,
		isTitlesEnabledW,
		IconAndTitleMap,
		IconAndTitleEntries,
		buttons,
		textColour,
		$isTitlesEnabledW
	});

	$$self.$inject_state = $$props => {
		if ("isTitlesEnabled" in $$props) $$invalidate(3, isTitlesEnabled = $$props.isTitlesEnabled);
		if ("isTitlesEnabledW" in $$props) $$subscribe_isTitlesEnabledW($$invalidate(0, isTitlesEnabledW = $$props.isTitlesEnabledW));
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [isTitlesEnabledW, $isTitlesEnabledW, IconAndTitleEntries, isTitlesEnabled];
}

class Sidebar extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { isTitlesEnabled: 3, isTitlesEnabledW: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Sidebar",
			options,
			id: create_fragment$1.name
		});
	}

	get isTitlesEnabled() {
		return this.$$.ctx[3];
	}

	set isTitlesEnabled(isTitlesEnabled) {
		this.$set({ isTitlesEnabled });
		flush();
	}

	get isTitlesEnabledW() {
		return this.$$.ctx[0];
	}

	set isTitlesEnabledW(isTitlesEnabledW) {
		this.$set({ isTitlesEnabledW });
		flush();
	}
}

var undefined$1 = undefined;

/* src\ui\routes\DashboardRoute.svelte generated by Svelte v3.38.2 */
const file = "src\\ui\\routes\\DashboardRoute.svelte";

// (5:0) <Fragment   isPadded={false}   isInAnimated={true}   isOutAnimated={true}   height='100vh'   width='100%'   justify='center'  >
function create_default_slot(ctx) {
	let component;
	let container;
	let sidebar;
	let current;
	sidebar = new Sidebar({ $$inline: true });

	const block = {
		c: function create() {
			component = element("component");
			container = element("container");
			create_component(sidebar.$$.fragment);
			attr_dev(container, "class", "sidebar svelte-14bkwas");
			add_location(container, file, 13, 2, 280);
			attr_dev(component, "class", "svelte-14bkwas");
			add_location(component, file, 12, 1, 265);
		},
		m: function mount(target, anchor) {
			insert_dev(target, component, anchor);
			append_dev(component, container);
			mount_component(sidebar, container, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(sidebar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(sidebar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(component);
			destroy_component(sidebar);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(5:0) <Fragment   isPadded={false}   isInAnimated={true}   isOutAnimated={true}   height='100vh'   width='100%'   justify='center'  >",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let fragment;
	let current;

	fragment = new Fragment({
			props: {
				isPadded: false,
				isInAnimated: true,
				isOutAnimated: true,
				height: "100vh",
				width: "100%",
				justify: "center",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(fragment.$$.fragment);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(fragment, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const fragment_changes = {};

			if (dirty & /*$$scope*/ 1) {
				fragment_changes.$$scope = { dirty, ctx };
			}

			fragment.$set(fragment_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(fragment.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(fragment.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(fragment, detaching);
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
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("DashboardRoute", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<DashboardRoute> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Fragment, Sidebar });
	return [];
}

class DashboardRoute extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "DashboardRoute",
			options,
			id: create_fragment.name
		});
	}
}

export default DashboardRoute;
//# sourceMappingURL=DashboardRoute-8f80046d.js.map
