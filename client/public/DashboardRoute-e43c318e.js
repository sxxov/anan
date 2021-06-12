
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { A as create_slot, B as update_slot, f as transition_in, g as transition_out, k as dispatch_dev, e as element, t as text, a as attr_dev, b as add_location, i as insert_dev, d as append_dev, a6 as set_data_dev, h as detach_dev, q as assign, Q as Button, c as create_component, m as mount_component, w as get_spread_update, x as get_spread_object, j as destroy_component, J as compute_rest_props, n as noop, K as subscribe, v as validate_slots, M as writable, N as validate_store, W as createEventDispatcher, D as binding_callbacks, O as exclude_internal_props, l as SvelteComponentDev, o as init, p as safe_not_equal, P as flush, $ as globals, u as empty, s as space, ad as Logo, ae as validate_each_argument, y as group_outros, z as check_outros, af as destroy_each, F as Fragment } from './index-1469207d.js';

/* src\ui\blocks\buttons\FillOrStrokeButton.svelte generated by Svelte v3.38.2 */
const file$2 = "src\\ui\\blocks\\buttons\\FillOrStrokeButton.svelte";

// (24:0) <Button   on:click={() => dispatch('click')}   on:mouseover={() => dispatch('mouseover')}   on:mousein={() => dispatch('mousein')}   on:mouseout={() => dispatch('mousein')}   {...$$restProps}  >
function create_default_slot$2(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[9].default;
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
		id: create_default_slot$2.name,
		type: "slot",
		source: "(24:0) <Button   on:click={() => dispatch('click')}   on:mouseover={() => dispatch('mouseover')}   on:mousein={() => dispatch('mousein')}   on:mouseout={() => dispatch('mousein')}   {...$$restProps}  >",
		ctx
	});

	return block;
}

// (31:1) 
function create_icon_slot(ctx) {
	let placeholder_1;
	let t;

	const block = {
		c: function create() {
			placeholder_1 = element("placeholder");
			t = text(/*$iconW*/ ctx[3]);
			attr_dev(placeholder_1, "slot", "icon");
			add_location(placeholder_1, file$2, 30, 1, 1043);
		},
		m: function mount(target, anchor) {
			insert_dev(target, placeholder_1, anchor);
			append_dev(placeholder_1, t);
			/*placeholder_1_binding*/ ctx[10](placeholder_1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$iconW*/ 8) set_data_dev(t, /*$iconW*/ ctx[3]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(placeholder_1);
			/*placeholder_1_binding*/ ctx[10](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_icon_slot.name,
		type: "slot",
		source: "(31:1) ",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let button;
	let current;
	const button_spread_levels = [/*$$restProps*/ ctx[5]];

	let button_props = {
		$$slots: {
			icon: [create_icon_slot],
			default: [create_default_slot$2]
		},
		$$scope: { ctx }
	};

	for (let i = 0; i < button_spread_levels.length; i += 1) {
		button_props = assign(button_props, button_spread_levels[i]);
	}

	button = new Button({ props: button_props, $$inline: true });
	button.$on("click", /*click_handler*/ ctx[11]);
	button.$on("mouseover", /*mouseover_handler*/ ctx[12]);
	button.$on("mousein", /*mousein_handler*/ ctx[13]);
	button.$on("mouseout", /*mouseout_handler*/ ctx[14]);

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
			const button_changes = (dirty & /*$$restProps*/ 32)
			? get_spread_update(button_spread_levels, [get_spread_object(/*$$restProps*/ ctx[5])])
			: {};

			if (dirty & /*$$scope, placeholder, $iconW*/ 32780) {
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

function naivelyRecreateAsNewTag(elem, tag) {
	var _a;

	if (elem.tagName.toLowerCase() === tag.toLowerCase()) {
		return;
	}

	const newElement = document.createElement(tag);
	newElement.innerHTML = elem.innerHTML;

	(_a = elem.parentElement) === null || _a === void 0
	? void 0
	: _a.replaceChild(newElement, elem);
}

function instance$2($$self, $$props, $$invalidate) {
	const omit_props_names = ["isStroke","isStrokeW","icon","iconW"];
	let $$restProps = compute_rest_props($$props, omit_props_names);

	let $isStrokeW,
		$$unsubscribe_isStrokeW = noop,
		$$subscribe_isStrokeW = () => ($$unsubscribe_isStrokeW(), $$unsubscribe_isStrokeW = subscribe(isStrokeW, $$value => $$invalidate(8, $isStrokeW = $$value)), isStrokeW);

	let $iconW,
		$$unsubscribe_iconW = noop,
		$$subscribe_iconW = () => ($$unsubscribe_iconW(), $$unsubscribe_iconW = subscribe(iconW, $$value => $$invalidate(3, $iconW = $$value)), iconW);

	$$self.$$.on_destroy.push(() => $$unsubscribe_isStrokeW());
	$$self.$$.on_destroy.push(() => $$unsubscribe_iconW());
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("FillOrStrokeButton", slots, ['default']);
	let { isStroke = false } = $$props;
	let { isStrokeW = writable(isStroke) } = $$props;
	validate_store(isStrokeW, "isStrokeW");
	$$subscribe_isStrokeW();
	let { icon = "done" } = $$props;
	let { iconW = writable(icon) } = $$props;
	validate_store(iconW, "iconW");
	$$subscribe_iconW();
	const dispatch = createEventDispatcher();
	let placeholder;

	function placeholder_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			placeholder = $$value;
			$$invalidate(2, placeholder);
		});
	}

	const click_handler = () => dispatch("click");
	const mouseover_handler = () => dispatch("mouseover");
	const mousein_handler = () => dispatch("mousein");
	const mouseout_handler = () => dispatch("mousein");

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("isStroke" in $$new_props) $$invalidate(6, isStroke = $$new_props.isStroke);
		if ("isStrokeW" in $$new_props) $$subscribe_isStrokeW($$invalidate(0, isStrokeW = $$new_props.isStrokeW));
		if ("icon" in $$new_props) $$invalidate(7, icon = $$new_props.icon);
		if ("iconW" in $$new_props) $$subscribe_iconW($$invalidate(1, iconW = $$new_props.iconW));
		if ("$$scope" in $$new_props) $$invalidate(15, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		writable,
		Button,
		isStroke,
		isStrokeW,
		icon,
		iconW,
		dispatch,
		placeholder,
		naivelyRecreateAsNewTag,
		$isStrokeW,
		$iconW
	});

	$$self.$inject_state = $$new_props => {
		if ("isStroke" in $$props) $$invalidate(6, isStroke = $$new_props.isStroke);
		if ("isStrokeW" in $$props) $$subscribe_isStrokeW($$invalidate(0, isStrokeW = $$new_props.isStrokeW));
		if ("icon" in $$props) $$invalidate(7, icon = $$new_props.icon);
		if ("iconW" in $$props) $$subscribe_iconW($$invalidate(1, iconW = $$new_props.iconW));
		if ("placeholder" in $$props) $$invalidate(2, placeholder = $$new_props.placeholder);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*placeholder, $isStrokeW*/ 260) {
			$: placeholder && ($isStrokeW
			? naivelyRecreateAsNewTag(placeholder, "icono")
			: naivelyRecreateAsNewTag(placeholder, "icon"));
		}
	};

	return [
		isStrokeW,
		iconW,
		placeholder,
		$iconW,
		dispatch,
		$$restProps,
		isStroke,
		icon,
		$isStrokeW,
		slots,
		placeholder_1_binding,
		click_handler,
		mouseover_handler,
		mousein_handler,
		mouseout_handler,
		$$scope
	];
}

class FillOrStrokeButton extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
			isStroke: 6,
			isStrokeW: 0,
			icon: 7,
			iconW: 1
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FillOrStrokeButton",
			options,
			id: create_fragment$2.name
		});
	}

	get isStroke() {
		return this.$$.ctx[6];
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
		return this.$$.ctx[7];
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
}

var undefined$2 = undefined;

/* src\ui\components\Sidebar.svelte generated by Svelte v3.38.2 */

const { Object: Object_1 } = globals;
const file$1 = "src\\ui\\components\\Sidebar.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i][0];
	child_ctx[6] = list[i][1];
	return child_ctx;
}

// (49:4) {#if $isTitlesEnabledW}
function create_if_block(ctx) {
	let heading;
	let t_value = /*title*/ ctx[6] + "";
	let t;

	const block = {
		c: function create() {
			heading = element("heading");
			t = text(t_value);
			attr_dev(heading, "class", "svelte-t3kij8");
			add_location(heading, file$1, 49, 5, 1264);
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
		source: "(49:4) {#if $isTitlesEnabledW}",
		ctx
	});

	return block;
}

// (44:3) <FillOrStrokeButton      backgroundColour='transparent'      hoverColour='--colour-accent-secondary'      {icon}     >
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
		source: "(44:3) <FillOrStrokeButton      backgroundColour='transparent'      hoverColour='--colour-accent-secondary'      {icon}     >",
		ctx
	});

	return block;
}

// (40:1) {#each IconAndTitleEntries as [icon, title]}
function create_each_block(ctx) {
	let container;
	let fillorstrokebutton;
	let t;
	let current;

	fillorstrokebutton = new FillOrStrokeButton({
			props: {
				backgroundColour: "transparent",
				hoverColour: "--colour-accent-secondary",
				icon: /*icon*/ ctx[5],
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			container = element("container");
			create_component(fillorstrokebutton.$$.fragment);
			t = space();
			attr_dev(container, "class", "button svelte-t3kij8");
			add_location(container, file$1, 40, 2, 1071);
		},
		m: function mount(target, anchor) {
			insert_dev(target, container, anchor);
			mount_component(fillorstrokebutton, container, null);
			append_dev(container, t);
			current = true;
		},
		p: function update(ctx, dirty) {
			const fillorstrokebutton_changes = {};

			if (dirty & /*$$scope, $isTitlesEnabledW*/ 514) {
				fillorstrokebutton_changes.$$scope = { dirty, ctx };
			}

			fillorstrokebutton.$set(fillorstrokebutton_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(fillorstrokebutton.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(fillorstrokebutton.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(container);
			destroy_component(fillorstrokebutton);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(40:1) {#each IconAndTitleEntries as [icon, title]}",
		ctx
	});

	return block;
}

// (22:0) <Fragment   isPadded={true}   isInAnimated={true}   isOutAnimated={true}   padding='calc(var(--padding) / 2)'   height='100vh'   width='100%'   justify='flex-start'   rows={`repeat(${    // + logo    IconAndTitleEntries.length + 1   }, 56px)`}  >
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
		source: "(22:0) <Fragment   isPadded={true}   isInAnimated={true}   isOutAnimated={true}   padding='calc(var(--padding) / 2)'   height='100vh'   width='100%'   justify='flex-start'   rows={`repeat(${    // + logo    IconAndTitleEntries.length + 1   }, 56px)`}  >",
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

			if (dirty & /*$$scope, $isTitlesEnabledW*/ 514) {
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
		FillOrStrokeButton,
		Fragment,
		Logo,
		isTitlesEnabled,
		isTitlesEnabledW,
		IconAndTitleMap,
		IconAndTitleEntries,
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
//# sourceMappingURL=DashboardRoute-e43c318e.js.map
