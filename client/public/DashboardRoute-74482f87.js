
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { e as element, t as text, G as set_style, H as CSSUtility, a as attr_dev, b as add_location, i as insert_dev, d as append_dev, a6 as set_data_dev, h as detach_dev, k as dispatch_dev, A as create_slot, s as space, B as update_slot, f as transition_in, g as transition_out, q as assign, Q as Button, c as create_component, m as mount_component, w as get_spread_update, x as get_spread_object, j as destroy_component, J as compute_rest_props, n as noop, K as subscribe, v as validate_slots, M as writable, N as validate_store, W as createEventDispatcher, O as exclude_internal_props, l as SvelteComponentDev, o as init, p as safe_not_equal, P as flush, $ as globals, u as empty, ad as Logo, ae as validate_each_argument, y as group_outros, z as check_outros, af as destroy_each, F as Fragment, D as binding_callbacks } from './index-aad41af4.js';

var undefined$3 = undefined;

/* src\ui\blocks\buttons\FillOrTwoToneButton.svelte generated by Svelte v3.38.2 */
const file$2 = "src\\ui\\blocks\\buttons\\FillOrTwoToneButton.svelte";

// (33:1) {:else}
function create_else_block(ctx) {
	let iconf;
	let t;

	const block = {
		c: function create() {
			iconf = element("iconf");
			t = text(/*$iconW*/ ctx[6]);
			set_style(iconf, "--colour-fill", CSSUtility.parse(/*$fillColourW*/ ctx[7]));
			attr_dev(iconf, "class", "svelte-1xznarj");
			add_location(iconf, file$2, 33, 2, 977);
		},
		m: function mount(target, anchor) {
			insert_dev(target, iconf, anchor);
			append_dev(iconf, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$iconW*/ 64) set_data_dev(t, /*$iconW*/ ctx[6]);

			if (dirty & /*$fillColourW*/ 128) {
				set_style(iconf, "--colour-fill", CSSUtility.parse(/*$fillColourW*/ ctx[7]));
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
		source: "(33:1) {:else}",
		ctx
	});

	return block;
}

// (25:1) {#if $isStrokeW}
function create_if_block$1(ctx) {
	let icon_1;
	let t;

	const block = {
		c: function create() {
			icon_1 = element("icon");
			t = text(/*$iconW*/ ctx[6]);
			set_style(icon_1, "--filter-twotone", CSSUtility.parse(/*$twoToneFilterW*/ ctx[5]));
			attr_dev(icon_1, "class", "svelte-1xznarj");
			add_location(icon_1, file$2, 25, 2, 851);
		},
		m: function mount(target, anchor) {
			insert_dev(target, icon_1, anchor);
			append_dev(icon_1, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$iconW*/ 64) set_data_dev(t, /*$iconW*/ ctx[6]);

			if (dirty & /*$twoToneFilterW*/ 32) {
				set_style(icon_1, "--filter-twotone", CSSUtility.parse(/*$twoToneFilterW*/ ctx[5]));
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
		source: "(25:1) {#if $isStrokeW}",
		ctx
	});

	return block;
}

// (17:0) <Button   on:click={() => dispatch('click')}   on:mouseover={() => dispatch('mouseover')}   on:mousein={() => dispatch('mousein')}   on:mouseout={() => dispatch('mouseout')}   {...$$restProps}   isText={false}  >
function create_default_slot$2(ctx) {
	let t;
	let current;

	function select_block_type(ctx, dirty) {
		if (/*$isStrokeW*/ ctx[4]) return create_if_block$1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);
	const default_slot_template = /*#slots*/ ctx[14].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[19], null);

	const block = {
		c: function create() {
			if_block.c();
			t = space();
			if (default_slot) default_slot.c();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, t, anchor);

			if (default_slot) {
				default_slot.m(target, anchor);
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
					if_block.m(t.parentNode, t);
				}
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 524288)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[19], dirty, null, null);
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
			if_block.d(detaching);
			if (detaching) detach_dev(t);
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$2.name,
		type: "slot",
		source: "(17:0) <Button   on:click={() => dispatch('click')}   on:mouseover={() => dispatch('mouseover')}   on:mousein={() => dispatch('mousein')}   on:mouseout={() => dispatch('mouseout')}   {...$$restProps}   isText={false}  >",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let button;
	let current;
	const button_spread_levels = [/*$$restProps*/ ctx[9], { isText: false }];

	let button_props = {
		$$slots: { default: [create_default_slot$2] },
		$$scope: { ctx }
	};

	for (let i = 0; i < button_spread_levels.length; i += 1) {
		button_props = assign(button_props, button_spread_levels[i]);
	}

	button = new Button({ props: button_props, $$inline: true });
	button.$on("click", /*click_handler*/ ctx[15]);
	button.$on("mouseover", /*mouseover_handler*/ ctx[16]);
	button.$on("mousein", /*mousein_handler*/ ctx[17]);
	button.$on("mouseout", /*mouseout_handler*/ ctx[18]);

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
			const button_changes = (dirty & /*$$restProps*/ 512)
			? get_spread_update(button_spread_levels, [get_spread_object(/*$$restProps*/ ctx[9]), button_spread_levels[1]])
			: {};

			if (dirty & /*$$scope, $twoToneFilterW, $iconW, $isStrokeW, $fillColourW*/ 524528) {
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
		"isStroke","isStrokeW","icon","iconW","twoToneFilter","twoToneFilterW","fillColour","fillColourW"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);

	let $isStrokeW,
		$$unsubscribe_isStrokeW = noop,
		$$subscribe_isStrokeW = () => ($$unsubscribe_isStrokeW(), $$unsubscribe_isStrokeW = subscribe(isStrokeW, $$value => $$invalidate(4, $isStrokeW = $$value)), isStrokeW);

	let $twoToneFilterW,
		$$unsubscribe_twoToneFilterW = noop,
		$$subscribe_twoToneFilterW = () => ($$unsubscribe_twoToneFilterW(), $$unsubscribe_twoToneFilterW = subscribe(twoToneFilterW, $$value => $$invalidate(5, $twoToneFilterW = $$value)), twoToneFilterW);

	let $iconW,
		$$unsubscribe_iconW = noop,
		$$subscribe_iconW = () => ($$unsubscribe_iconW(), $$unsubscribe_iconW = subscribe(iconW, $$value => $$invalidate(6, $iconW = $$value)), iconW);

	let $fillColourW,
		$$unsubscribe_fillColourW = noop,
		$$subscribe_fillColourW = () => ($$unsubscribe_fillColourW(), $$unsubscribe_fillColourW = subscribe(fillColourW, $$value => $$invalidate(7, $fillColourW = $$value)), fillColourW);

	$$self.$$.on_destroy.push(() => $$unsubscribe_isStrokeW());
	$$self.$$.on_destroy.push(() => $$unsubscribe_twoToneFilterW());
	$$self.$$.on_destroy.push(() => $$unsubscribe_iconW());
	$$self.$$.on_destroy.push(() => $$unsubscribe_fillColourW());
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("FillOrTwoToneButton", slots, ['default']);
	
	let { isStroke = false } = $$props;
	let { isStrokeW = writable(isStroke) } = $$props;
	validate_store(isStrokeW, "isStrokeW");
	$$subscribe_isStrokeW();
	let { icon = "done" } = $$props;
	let { iconW = writable(icon) } = $$props;
	validate_store(iconW, "iconW");
	$$subscribe_iconW();
	let { twoToneFilter = "--filter-text-secondary" } = $$props;
	let { twoToneFilterW = writable(twoToneFilter) } = $$props;
	validate_store(twoToneFilterW, "twoToneFilterW");
	$$subscribe_twoToneFilterW();
	let { fillColour = "--colour-text-secondary" } = $$props;
	let { fillColourW = writable(fillColour) } = $$props;
	validate_store(fillColourW, "fillColourW");
	$$subscribe_fillColourW();
	const dispatch = createEventDispatcher();
	const click_handler = () => dispatch("click");
	const mouseover_handler = () => dispatch("mouseover");
	const mousein_handler = () => dispatch("mousein");
	const mouseout_handler = () => dispatch("mouseout");

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("isStroke" in $$new_props) $$invalidate(10, isStroke = $$new_props.isStroke);
		if ("isStrokeW" in $$new_props) $$subscribe_isStrokeW($$invalidate(0, isStrokeW = $$new_props.isStrokeW));
		if ("icon" in $$new_props) $$invalidate(11, icon = $$new_props.icon);
		if ("iconW" in $$new_props) $$subscribe_iconW($$invalidate(1, iconW = $$new_props.iconW));
		if ("twoToneFilter" in $$new_props) $$invalidate(12, twoToneFilter = $$new_props.twoToneFilter);
		if ("twoToneFilterW" in $$new_props) $$subscribe_twoToneFilterW($$invalidate(2, twoToneFilterW = $$new_props.twoToneFilterW));
		if ("fillColour" in $$new_props) $$invalidate(13, fillColour = $$new_props.fillColour);
		if ("fillColourW" in $$new_props) $$subscribe_fillColourW($$invalidate(3, fillColourW = $$new_props.fillColourW));
		if ("$$scope" in $$new_props) $$invalidate(19, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		writable,
		CSSUtility,
		Button,
		isStroke,
		isStrokeW,
		icon,
		iconW,
		twoToneFilter,
		twoToneFilterW,
		fillColour,
		fillColourW,
		dispatch,
		$isStrokeW,
		$twoToneFilterW,
		$iconW,
		$fillColourW
	});

	$$self.$inject_state = $$new_props => {
		if ("isStroke" in $$props) $$invalidate(10, isStroke = $$new_props.isStroke);
		if ("isStrokeW" in $$props) $$subscribe_isStrokeW($$invalidate(0, isStrokeW = $$new_props.isStrokeW));
		if ("icon" in $$props) $$invalidate(11, icon = $$new_props.icon);
		if ("iconW" in $$props) $$subscribe_iconW($$invalidate(1, iconW = $$new_props.iconW));
		if ("twoToneFilter" in $$props) $$invalidate(12, twoToneFilter = $$new_props.twoToneFilter);
		if ("twoToneFilterW" in $$props) $$subscribe_twoToneFilterW($$invalidate(2, twoToneFilterW = $$new_props.twoToneFilterW));
		if ("fillColour" in $$props) $$invalidate(13, fillColour = $$new_props.fillColour);
		if ("fillColourW" in $$props) $$subscribe_fillColourW($$invalidate(3, fillColourW = $$new_props.fillColourW));
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		isStrokeW,
		iconW,
		twoToneFilterW,
		fillColourW,
		$isStrokeW,
		$twoToneFilterW,
		$iconW,
		$fillColourW,
		dispatch,
		$$restProps,
		isStroke,
		icon,
		twoToneFilter,
		fillColour,
		slots,
		click_handler,
		mouseover_handler,
		mousein_handler,
		mouseout_handler,
		$$scope
	];
}

class FillOrTwoToneButton extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
			isStroke: 10,
			isStrokeW: 0,
			icon: 11,
			iconW: 1,
			twoToneFilter: 12,
			twoToneFilterW: 2,
			fillColour: 13,
			fillColourW: 3
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FillOrTwoToneButton",
			options,
			id: create_fragment$2.name
		});
	}

	get isStroke() {
		return this.$$.ctx[10];
	}

	set isStroke(isStroke) {
		this.$set({ isStroke });
		flush();
	}

	get isStrokeW() {
		return this.$$.ctx[0];
	}

	set isStrokeW(isStrokeW) {
		this.$set({ isStrokeW });
		flush();
	}

	get icon() {
		return this.$$.ctx[11];
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

	get twoToneFilter() {
		return this.$$.ctx[12];
	}

	set twoToneFilter(twoToneFilter) {
		this.$set({ twoToneFilter });
		flush();
	}

	get twoToneFilterW() {
		return this.$$.ctx[2];
	}

	set twoToneFilterW(twoToneFilterW) {
		this.$set({ twoToneFilterW });
		flush();
	}

	get fillColour() {
		return this.$$.ctx[13];
	}

	set fillColour(fillColour) {
		this.$set({ fillColour });
		flush();
	}

	get fillColourW() {
		return this.$$.ctx[3];
	}

	set fillColourW(fillColourW) {
		this.$set({ fillColourW });
		flush();
	}
}

var undefined$2 = undefined;

/* src\ui\components\Sidebar.svelte generated by Svelte v3.38.2 */

const { Object: Object_1 } = globals;
const file$1 = "src\\ui\\components\\Sidebar.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i][0];
	child_ctx[9] = list[i][1];
	child_ctx[10] = list;
	child_ctx[11] = i;
	return child_ctx;
}

// (54:4) {#if $isTitlesEnabledW}
function create_if_block(ctx) {
	let heading;
	let t_value = /*title*/ ctx[9] + "";
	let t;

	const block = {
		c: function create() {
			heading = element("heading");
			t = text(t_value);
			attr_dev(heading, "class", "svelte-ly6r7v");
			add_location(heading, file$1, 54, 5, 1395);
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
		source: "(54:4) {#if $isTitlesEnabledW}",
		ctx
	});

	return block;
}

// (46:3) <FillOrTwoToneButton      backgroundColour='transparent'      hoverColour='--colour-accent-secondary'      {icon}      on:mousein={() => {       buttonContainers[i]      }}     >
function create_default_slot_1(ctx) {
	let if_block_anchor;
	let if_block = /*$isTitlesEnabledW*/ ctx[2] && create_if_block(ctx);

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
			if (/*$isTitlesEnabledW*/ ctx[2]) {
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
		source: "(46:3) <FillOrTwoToneButton      backgroundColour='transparent'      hoverColour='--colour-accent-secondary'      {icon}      on:mousein={() => {       buttonContainers[i]      }}     >",
		ctx
	});

	return block;
}

// (41:1) {#each IconAndTitleEntries as [icon, title], i}
function create_each_block(ctx) {
	let container;
	let fillortwotonebutton;
	let t;
	let i = /*i*/ ctx[11];
	let current;

	function mousein_handler() {
		return /*mousein_handler*/ ctx[5](/*i*/ ctx[11]);
	}

	fillortwotonebutton = new FillOrTwoToneButton({
			props: {
				backgroundColour: "transparent",
				hoverColour: "--colour-accent-secondary",
				icon: /*icon*/ ctx[8],
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	fillortwotonebutton.$on("mousein", mousein_handler);
	const assign_container = () => /*container_binding*/ ctx[6](container, i);
	const unassign_container = () => /*container_binding*/ ctx[6](null, i);

	const block = {
		c: function create() {
			container = element("container");
			create_component(fillortwotonebutton.$$.fragment);
			t = space();
			attr_dev(container, "class", "button svelte-ly6r7v");
			add_location(container, file$1, 41, 2, 1106);
		},
		m: function mount(target, anchor) {
			insert_dev(target, container, anchor);
			mount_component(fillortwotonebutton, container, null);
			append_dev(container, t);
			assign_container();
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const fillortwotonebutton_changes = {};

			if (dirty & /*$$scope, $isTitlesEnabledW*/ 4100) {
				fillortwotonebutton_changes.$$scope = { dirty, ctx };
			}

			fillortwotonebutton.$set(fillortwotonebutton_changes);

			if (i !== /*i*/ ctx[11]) {
				unassign_container();
				i = /*i*/ ctx[11];
				assign_container();
			}
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
			unassign_container();
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

	let each_value = /*IconAndTitleEntries*/ ctx[3];
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
			if (dirty & /*buttonContainers, IconAndTitleEntries, $isTitlesEnabledW*/ 14) {
				each_value = /*IconAndTitleEntries*/ ctx[3];
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
				/*IconAndTitleEntries*/ ctx[3].length + 1}, 56px)`,
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

			if (dirty & /*$$scope, buttonContainers, $isTitlesEnabledW*/ 4102) {
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
		$$subscribe_isTitlesEnabledW = () => ($$unsubscribe_isTitlesEnabledW(), $$unsubscribe_isTitlesEnabledW = subscribe(isTitlesEnabledW, $$value => $$invalidate(2, $isTitlesEnabledW = $$value)), isTitlesEnabledW);

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
	const buttonContainers = [];
	const writable_props = ["isTitlesEnabled", "isTitlesEnabledW"];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Sidebar> was created with unknown prop '${key}'`);
	});

	const mousein_handler = i => {
		buttonContainers[i];
	};

	function container_binding($$value, i) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			buttonContainers[i] = $$value;
			$$invalidate(1, buttonContainers);
		});
	}

	$$self.$$set = $$props => {
		if ("isTitlesEnabled" in $$props) $$invalidate(4, isTitlesEnabled = $$props.isTitlesEnabled);
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
		buttonContainers,
		textColour,
		$isTitlesEnabledW
	});

	$$self.$inject_state = $$props => {
		if ("isTitlesEnabled" in $$props) $$invalidate(4, isTitlesEnabled = $$props.isTitlesEnabled);
		if ("isTitlesEnabledW" in $$props) $$subscribe_isTitlesEnabledW($$invalidate(0, isTitlesEnabledW = $$props.isTitlesEnabledW));
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		isTitlesEnabledW,
		buttonContainers,
		$isTitlesEnabledW,
		IconAndTitleEntries,
		isTitlesEnabled,
		mousein_handler,
		container_binding
	];
}

class Sidebar extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { isTitlesEnabled: 4, isTitlesEnabledW: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Sidebar",
			options,
			id: create_fragment$1.name
		});
	}

	get isTitlesEnabled() {
		return this.$$.ctx[4];
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
//# sourceMappingURL=DashboardRoute-74482f87.js.map
