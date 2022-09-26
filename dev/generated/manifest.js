const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\100\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\100\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\101\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\101\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\102\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\102\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\103\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\103\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\200\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\200\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\202\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\202\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\202\\employee-browser\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\202\\user-dashboard\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\206\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\206\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\206\\financial-report\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\206\\transitions\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\207\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\207\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\300\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\300\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\301\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\301\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\302\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\302\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\303\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\303\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\500\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\500\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/100/index.svelte
	[/^\/100\/?$/, [c[0], c[3], c[4]], [c[1]]],

	// src/routes/101/index.svelte
	[/^\/101\/?$/, [c[0], c[5], c[6]], [c[1]]],

	// src/routes/102/index.svelte
	[/^\/102\/?$/, [c[0], c[7], c[8]], [c[1]]],

	// src/routes/103/index.svelte
	[/^\/103\/?$/, [c[0], c[9], c[10]], [c[1]]],

	// src/routes/200/index.svelte
	[/^\/200\/?$/, [c[0], c[11], c[12]], [c[1]]],

	// src/routes/202/index.svelte
	[/^\/202\/?$/, [c[0], c[13], c[14]], [c[1]]],

	// src/routes/202/employee-browser/index.svelte
	[/^\/202\/employee-browser\/?$/, [c[0], c[13], c[15]], [c[1]]],

	// src/routes/202/user-dashboard/index.svelte
	[/^\/202\/user-dashboard\/?$/, [c[0], c[13], c[16]], [c[1]]],

	// src/routes/206/index.svelte
	[/^\/206\/?$/, [c[0], c[17], c[18]], [c[1]]],

	// src/routes/206/financial-report/index.svelte
	[/^\/206\/financial-report\/?$/, [c[0], c[17], c[19]], [c[1]]],

	// src/routes/206/transitions/index.svelte
	[/^\/206\/transitions\/?$/, [c[0], c[17], c[20]], [c[1]]],

	// src/routes/207/index.svelte
	[/^\/207\/?$/, [c[0], c[21], c[22]], [c[1]]],

	// src/routes/300/index.svelte
	[/^\/300\/?$/, [c[0], c[23], c[24]], [c[1]]],

	// src/routes/301/index.svelte
	[/^\/301\/?$/, [c[0], c[25], c[26]], [c[1]]],

	// src/routes/302/index.svelte
	[/^\/302\/?$/, [c[0], c[27], c[28]], [c[1]]],

	// src/routes/303/index.svelte
	[/^\/303\/?$/, [c[0], c[29], c[30]], [c[1]]],

	// src/routes/500/index.svelte
	[/^\/500\/?$/, [c[0], c[31], c[32]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];