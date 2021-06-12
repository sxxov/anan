
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { t as text, i as insert_dev, h as detach_dev, k as dispatch_dev, G as Gradient2, B as Button, e as element, c as create_component, s as space, a as attr_dev, b as add_location, m as mount_component, d as append_dev, f as transition_in, g as transition_out, j as destroy_component, F as Fragment, v as validate_slots, q as onMount, w as writable, u as push, C as Ctx, I as Input, D as Dialog, T as ToastItem, L as Levels, l as SvelteComponentDev, o as init, p as safe_not_equal } from './index-374073be.js';

/* src\ui\routes\CallRoute.svelte generated by Svelte v3.38.2 */
const file = "src\\ui\\routes\\CallRoute.svelte";

// (35:4) <Button       backgroundColour='--colour-text-primary'       hoverColour='--colour-text-secondary'       textColour='--colour-background-primary'       icon='settings'      >
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("customize");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(35:4) <Button       backgroundColour='--colour-text-primary'       hoverColour='--colour-text-secondary'       textColour='--colour-background-primary'       icon='settings'      >",
		ctx
	});

	return block;
}

// (47:4) <Button       icon='nat'      >
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("render it");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(47:4) <Button       icon='nat'      >",
		ctx
	});

	return block;
}

// (13:0) <Fragment   isPadded={true}   isInAnimated={true}   isOutAnimated={true}   height='100vh'   width='100%'   align='flex-end'   justify='center'  >
function create_default_slot(ctx) {
	let container0;
	let gradient2;
	let t0;
	let container4;
	let container3;
	let container1;
	let button0;
	let t1;
	let container2;
	let button1;
	let current;
	gradient2 = new Gradient2({ $$inline: true });

	button0 = new Button({
			props: {
				backgroundColour: "--colour-text-primary",
				hoverColour: "--colour-text-secondary",
				textColour: "--colour-background-primary",
				icon: "settings",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1 = new Button({
			props: {
				icon: "nat",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			container0 = element("container");
			create_component(gradient2.$$.fragment);
			t0 = space();
			container4 = element("container");
			container3 = element("container");
			container1 = element("container");
			create_component(button0.$$.fragment);
			t1 = space();
			container2 = element("container");
			create_component(button1.$$.fragment);
			attr_dev(container0, "class", "gradient");
			add_location(container0, file, 21, 1, 647);
			attr_dev(container1, "class", "customize");
			add_location(container1, file, 31, 3, 789);
			attr_dev(container2, "class", "submit");
			add_location(container2, file, 43, 3, 1061);
			attr_dev(container3, "class", "buttons");
			add_location(container3, file, 28, 2, 749);
			attr_dev(container4, "class", "content");
			add_location(container4, file, 25, 1, 712);
		},
		m: function mount(target, anchor) {
			insert_dev(target, container0, anchor);
			mount_component(gradient2, container0, null);
			insert_dev(target, t0, anchor);
			insert_dev(target, container4, anchor);
			append_dev(container4, container3);
			append_dev(container3, container1);
			mount_component(button0, container1, null);
			append_dev(container3, t1);
			append_dev(container3, container2);
			mount_component(button1, container2, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty & /*$$scope*/ 1) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 1) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(gradient2.$$.fragment, local);
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(gradient2.$$.fragment, local);
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(container0);
			destroy_component(gradient2);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(container4);
			destroy_component(button0);
			destroy_component(button1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(13:0) <Fragment   isPadded={true}   isInAnimated={true}   isOutAnimated={true}   height='100vh'   width='100%'   align='flex-end'   justify='center'  >",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let fragment;
	let current;

	fragment = new Fragment({
			props: {
				isPadded: true,
				isInAnimated: true,
				isOutAnimated: true,
				height: "100vh",
				width: "100%",
				align: "flex-end",
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
	validate_slots("CallRoute", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<CallRoute> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		onMount,
		writable,
		push,
		Ctx,
		Button,
		Input,
		Fragment,
		Dialog,
		Gradient2,
		ToastItem,
		Levels
	});

	return [];
}

class CallRoute extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CallRoute",
			options,
			id: create_fragment.name
		});
	}
}

export default CallRoute;
//# sourceMappingURL=CallRoute-6f73936e.js.map
