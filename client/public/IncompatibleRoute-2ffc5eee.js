
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
import { S as Spacer, e as element, s as space, c as create_component, t as text, a as attr_dev, b as add_location, i as insert_dev, d as append_dev, m as mount_component, n as noop, f as transition_in, g as transition_out, h as detach_dev, j as destroy_component, k as dispatch_dev, F as Fragment, v as validate_slots, C as Ctx, r as replace, l as SvelteComponentDev, o as init, p as safe_not_equal } from './index-7e45ffaa.js';

var undefined$1 = undefined;

/* src\ui\routes\errors\IncompatibleRoute.svelte generated by Svelte v3.38.2 */
const file = "src\\ui\\routes\\errors\\IncompatibleRoute.svelte";

// (11:0) <Scene   isInAnimated={true}   isOutAnimated={true}   height='100%'   align='flex-end'  >
function create_default_slot(ctx) {
	let container;
	let heading;
	let t1;
	let spacer0;
	let t2;
	let string0;
	let t3;
	let a;
	let t5;
	let spacer1;
	let t6;
	let string1;
	let current;
	spacer0 = new Spacer({ props: { height: 24 }, $$inline: true });
	spacer1 = new Spacer({ props: { height: 24 }, $$inline: true });

	const block = {
		c: function create() {
			container = element("container");
			heading = element("heading");
			heading.textContent = "your browser f*cking stinks.";
			t1 = space();
			create_component(spacer0.$$.fragment);
			t2 = space();
			string0 = element("string");
			t3 = text("get a life at ");
			a = element("a");
			a.textContent = "chrome.google.com";
			t5 = space();
			create_component(spacer1.$$.fragment);
			t6 = space();
			string1 = element("string");
			string1.textContent = `${/*context*/ ctx[0]}`;
			attr_dev(heading, "class", "svelte-vbl456");
			add_location(heading, file, 19, 2, 429);
			attr_dev(a, "href", "https://chrome.google.com");
			add_location(a, file, 24, 17, 543);
			attr_dev(string0, "class", "svelte-vbl456");
			add_location(string0, file, 23, 2, 516);
			attr_dev(string1, "class", "svelte-vbl456");
			add_location(string1, file, 27, 2, 643);
			attr_dev(container, "class", "content");
			add_location(container, file, 16, 1, 392);
		},
		m: function mount(target, anchor) {
			insert_dev(target, container, anchor);
			append_dev(container, heading);
			append_dev(container, t1);
			mount_component(spacer0, container, null);
			append_dev(container, t2);
			append_dev(container, string0);
			append_dev(string0, t3);
			append_dev(string0, a);
			append_dev(container, t5);
			mount_component(spacer1, container, null);
			append_dev(container, t6);
			append_dev(container, string1);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(spacer0.$$.fragment, local);
			transition_in(spacer1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(spacer0.$$.fragment, local);
			transition_out(spacer1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(container);
			destroy_component(spacer0);
			destroy_component(spacer1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(11:0) <Scene   isInAnimated={true}   isOutAnimated={true}   height='100%'   align='flex-end'  >",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let scene;
	let current;

	scene = new Fragment({
			props: {
				isInAnimated: true,
				isOutAnimated: true,
				height: "100%",
				align: "flex-end",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(scene.$$.fragment);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			mount_component(scene, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const scene_changes = {};

			if (dirty & /*$$scope*/ 2) {
				scene_changes.$$scope = { dirty, ctx };
			}

			scene.$set(scene_changes);
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
			destroy_component(scene, detaching);
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
	validate_slots("IncompatibleRoute", slots, []);
	const context = Ctx.incompatibleReason;

	if (!context) {
		replace("/");
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<IncompatibleRoute> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ replace, Ctx, Scene: Fragment, Spacer, context });
	return [context];
}

class IncompatibleRoute extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "IncompatibleRoute",
			options,
			id: create_fragment.name
		});
	}
}

export default IncompatibleRoute;
//# sourceMappingURL=IncompatibleRoute-2ffc5eee.js.map
