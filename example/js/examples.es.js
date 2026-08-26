//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, c = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, l = (n, r, o) => (o = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n));
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function u(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var d = process.env.NODE_ENV === "production" ? {} : Object.freeze({}), f = process.env.NODE_ENV === "production" ? [] : Object.freeze([]), p = () => {}, m = () => !1, h = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), g = (e) => e.startsWith("onUpdate:"), _ = Object.assign, v = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, y = Object.prototype.hasOwnProperty, b = (e, t) => y.call(e, t), x = Array.isArray, S = (e) => j(e) === "[object Map]", C = (e) => j(e) === "[object Set]", w = (e) => j(e) === "[object Date]", T = (e) => typeof e == "function", E = (e) => typeof e == "string", D = (e) => typeof e == "symbol", O = (e) => typeof e == "object" && !!e, k = (e) => (O(e) || T(e)) && T(e.then) && T(e.catch), A = Object.prototype.toString, j = (e) => A.call(e), M = (e) => j(e).slice(8, -1), ee = (e) => j(e) === "[object Object]", N = (e) => E(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, te = /* @__PURE__ */ u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ne = /* @__PURE__ */ u("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), re = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ie = /-\w/g, ae = re((e) => e.replace(ie, (e) => e.slice(1).toUpperCase())), oe = /\B([A-Z])/g, P = re((e) => e.replace(oe, "-$1").toLowerCase()), se = re((e) => e.charAt(0).toUpperCase() + e.slice(1)), ce = re((e) => e ? `on${se(e)}` : ""), le = (e, t) => !Object.is(e, t), ue = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, de = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, fe = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, pe = (e) => {
	let t = E(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, me, he = () => me ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function ge(e) {
	if (x(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = E(r) ? be(r) : ge(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (E(e) || O(e)) return e;
}
var _e = /;(?![^(]*\))/g, ve = /:([^]+)/, ye = /\/\*[^]*?\*\//g;
function be(e) {
	let t = {};
	return e.replace(ye, "").split(_e).forEach((e) => {
		if (e) {
			let n = e.split(ve);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function F(e) {
	let t = "";
	if (E(e)) t = e;
	else if (x(e)) for (let n = 0; n < e.length; n++) {
		let r = F(e[n]);
		r && (t += r + " ");
	}
	else if (O(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var xe = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Se = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Ce = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", we = /* @__PURE__ */ u(xe), Te = /* @__PURE__ */ u(Se), Ee = /* @__PURE__ */ u(Ce), De = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Oe = /* @__PURE__ */ u(De);
De + "";
function ke(e) {
	return !!e || e === "";
}
function Ae(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = je(e[r], t[r]);
	return n;
}
function je(e, t) {
	if (e === t) return !0;
	let n = w(e), r = w(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = D(e), r = D(t), n || r) return e === t;
	if (n = x(e), r = x(t), n || r) return n && r ? Ae(e, t) : !1;
	if (n = O(e), r = O(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !je(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function Me(e, t) {
	return e.findIndex((e) => je(e, t));
}
var Ne = (e) => !!(e && e.__v_isRef === !0), I = (e) => E(e) ? e : e == null ? "" : x(e) || O(e) && (e.toString === A || !T(e.toString)) ? Ne(e) ? I(e.value) : JSON.stringify(e, Pe, 2) : String(e), Pe = (e, t) => Ne(t) ? Pe(e, t.value) : S(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Fe(t, r) + " =>"] = n, e), {}) } : C(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Fe(e)) } : D(t) ? Fe(t) : O(t) && !x(t) && !ee(t) ? String(t) : t, Fe = (e, t = "") => D(e) ? `Symbol(${e.description ?? t})` : e;
function Ie(e) {
	return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : ((typeof e != "number" || !Number.isFinite(e)) && process.env.NODE_ENV !== "production" && console.warn("[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:", e), String(e));
}
//#endregion
//#region node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
function Le(e, ...t) {
	console.warn(`[Vue warn] ${e}`, ...t);
}
var Re, ze = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Re && (Re.active ? (this.parent = Re, this.index = (Re.scopes || (Re.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = Re;
			try {
				return Re = this, e();
			} finally {
				Re = t;
			}
		} else process.env.NODE_ENV !== "production" && this._warnOnRun && Le("cannot run an inactive effect scope.");
	}
	on() {
		++this._on === 1 && (this.prevScope = Re, Re = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (Re === this) Re = this.prevScope;
			else {
				let e = Re;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Be() {
	return Re;
}
var Ve, He = /* @__PURE__ */ new WeakSet(), Ue = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Re && (Re.active ? Re.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, He.has(this) && (He.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qe(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, ot(this), Xe(this);
		let e = Ve, t = nt;
		Ve = this, nt = !0;
		try {
			return this.fn();
		} finally {
			process.env.NODE_ENV !== "production" && Ve !== this && Le("Active effect was not restored correctly - this is likely a Vue internal bug."), Ze(this), Ve = e, nt = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) et(e);
			this.deps = this.depsTail = void 0, ot(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? He.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Qe(this) && this.run();
	}
	get dirty() {
		return Qe(this);
	}
}, We = 0, Ge, Ke;
function qe(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ke, Ke = e;
		return;
	}
	e.next = Ge, Ge = e;
}
function Je() {
	We++;
}
function Ye() {
	if (--We > 0) return;
	if (Ke) {
		let e = Ke;
		for (Ke = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ge;) {
		let t = Ge;
		for (Ge = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Xe(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ze(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), et(r), tt(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Qe(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && ($e(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function $e(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === st) || (e.globalVersion = st, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Qe(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = Ve, r = nt;
	Ve = e, nt = !0;
	try {
		Xe(e);
		let n = e.fn(e._value);
		(t.version === 0 || le(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		Ve = n, nt = r, Ze(e), e.flags &= -3;
	}
}
function et(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) et(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function tt(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var nt = !0, rt = [];
function it() {
	rt.push(nt), nt = !1;
}
function at() {
	let e = rt.pop();
	nt = e === void 0 || e;
}
function ot(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = Ve;
		Ve = void 0;
		try {
			t();
		} finally {
			Ve = e;
		}
	}
}
var st = 0, ct = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, lt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
	}
	track(e) {
		if (!Ve || !nt || Ve === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== Ve) t = this.activeLink = new ct(Ve, this), Ve.deps ? (t.prevDep = Ve.depsTail, Ve.depsTail.nextDep = t, Ve.depsTail = t) : Ve.deps = Ve.depsTail = t, ut(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = Ve.depsTail, t.nextDep = void 0, Ve.depsTail.nextDep = t, Ve.depsTail = t, Ve.deps === t && (Ve.deps = e);
		}
		return process.env.NODE_ENV !== "production" && Ve.onTrack && Ve.onTrack(_({ effect: Ve }, e)), t;
	}
	trigger(e) {
		this.version++, st++, this.notify(e);
	}
	notify(e) {
		Je();
		try {
			if (process.env.NODE_ENV !== "production") for (let t = this.subsHead; t; t = t.nextSub) t.sub.onTrigger && !(t.sub.flags & 8) && t.sub.onTrigger(_({ effect: t.sub }, e));
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ye();
		}
	}
};
function ut(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) ut(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
	}
}
var dt = /* @__PURE__ */ new WeakMap(), ft = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Object iterate"), pt = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Map keys iterate"), mt = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Array iterate");
function ht(e, t, n) {
	if (nt && Ve) {
		let r = dt.get(e);
		r || dt.set(e, r = /* @__PURE__ */ new Map());
		let i = r.get(n);
		i || (r.set(n, i = new lt()), i.map = r, i.key = n), process.env.NODE_ENV === "production" ? i.track() : i.track({
			target: e,
			type: t,
			key: n
		});
	}
}
function gt(e, t, n, r, i, a) {
	let o = dt.get(e);
	if (!o) {
		st++;
		return;
	}
	let s = (o) => {
		o && (process.env.NODE_ENV === "production" ? o.trigger() : o.trigger({
			target: e,
			type: t,
			key: n,
			newValue: r,
			oldValue: i,
			oldTarget: a
		}));
	};
	if (Je(), t === "clear") o.forEach(s);
	else {
		let i = x(e), a = i && N(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === mt || !D(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(mt)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(ft)), S(e) && s(o.get(pt)));
				break;
			case "delete":
				i || (s(o.get(ft)), S(e) && s(o.get(pt)));
				break;
			case "set": S(e) && s(o.get(ft));
		}
	}
	Ye();
}
function _t(e) {
	let t = /* @__PURE__ */ L(e);
	return t === e ? t : (ht(t, "iterate", mt), /* @__PURE__ */ sn(e) ? t : t.map(un));
}
function vt(e) {
	return ht(e = /* @__PURE__ */ L(e), "iterate", mt), e;
}
function yt(e, t) {
	return /* @__PURE__ */ on(e) ? dn(/* @__PURE__ */ an(e) ? un(t) : t) : un(t);
}
var bt = {
	__proto__: null,
	[Symbol.iterator]() {
		return xt(this, Symbol.iterator, (e) => yt(this, e));
	},
	concat(...e) {
		return _t(this).concat(...e.map((e) => x(e) ? _t(e) : e));
	},
	entries() {
		return xt(this, "entries", (e) => (e[1] = yt(this, e[1]), e));
	},
	every(e, t) {
		return Ct(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return Ct(this, "filter", e, t, (e) => e.map((e) => yt(this, e)), arguments);
	},
	find(e, t) {
		return Ct(this, "find", e, t, (e) => yt(this, e), arguments);
	},
	findIndex(e, t) {
		return Ct(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return Ct(this, "findLast", e, t, (e) => yt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return Ct(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return Ct(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return Tt(this, "includes", e);
	},
	indexOf(...e) {
		return Tt(this, "indexOf", e);
	},
	join(e) {
		return _t(this).join(e);
	},
	lastIndexOf(...e) {
		return Tt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return Ct(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return Et(this, "pop");
	},
	push(...e) {
		return Et(this, "push", e);
	},
	reduce(e, ...t) {
		return wt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return wt(this, "reduceRight", e, t);
	},
	shift() {
		return Et(this, "shift");
	},
	some(e, t) {
		return Ct(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return Et(this, "splice", e);
	},
	toReversed() {
		return _t(this).toReversed();
	},
	toSorted(e) {
		return _t(this).toSorted(e);
	},
	toSpliced(...e) {
		return _t(this).toSpliced(...e);
	},
	unshift(...e) {
		return Et(this, "unshift", e);
	},
	values() {
		return xt(this, "values", (e) => yt(this, e));
	}
};
function xt(e, t, n) {
	let r = vt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ sn(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var St = Array.prototype;
function Ct(e, t, n, r, i, a) {
	let o = vt(e), s = o !== e && !/* @__PURE__ */ sn(e), c = o[t];
	if (c !== St[t]) {
		let t = c.apply(e, a);
		return s ? un(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, yt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function wt(e, t, n, r) {
	let i = vt(e), a = i !== e && !/* @__PURE__ */ sn(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = yt(e, t)), n.call(this, t, yt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? yt(e, c) : c;
}
function Tt(e, t, n) {
	let r = /* @__PURE__ */ L(e);
	ht(r, "iterate", mt);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ cn(n[0]) ? (n[0] = /* @__PURE__ */ L(n[0]), r[t](...n)) : i;
}
function Et(e, t, n = []) {
	it(), Je();
	let r = (/* @__PURE__ */ L(e))[t].apply(e, n);
	return Ye(), at(), r;
}
var Dt = /* @__PURE__ */ u("__proto__,__v_isRef,__isVue"), Ot = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(D));
function kt(e) {
	D(e) || (e = String(e));
	let t = /* @__PURE__ */ L(this);
	return ht(t, "has", e), t.hasOwnProperty(e);
}
var At = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Zt : Xt : i ? Yt : Jt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = x(e);
		if (!r) {
			let e;
			if (a && (e = bt[t])) return e;
			if (t === "hasOwnProperty") return kt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ fn(e) ? e : n);
		if ((D(t) ? Ot.has(t) : Dt(t)) || (r || ht(e, "get", t), i)) return o;
		if (/* @__PURE__ */ fn(o)) {
			let e = a && N(t) ? o : o.value;
			return r && O(e) ? /* @__PURE__ */ tn(e) : e;
		}
		return O(o) ? r ? /* @__PURE__ */ tn(o) : /* @__PURE__ */ $t(o) : o;
	}
}, jt = class extends At {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = x(e) && N(t);
		if (!this._isShallow) {
			let r = /* @__PURE__ */ on(i);
			if (!/* @__PURE__ */ sn(n) && !/* @__PURE__ */ on(n) && (i = /* @__PURE__ */ L(i), n = /* @__PURE__ */ L(n)), !a && /* @__PURE__ */ fn(i) && !/* @__PURE__ */ fn(n)) return r ? (process.env.NODE_ENV !== "production" && Le(`Set operation on key "${String(t)}" failed: target is readonly.`, e[t]), !0) : (i.value = n, !0);
		}
		let o = a ? Number(t) < e.length : b(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ fn(e) ? e : r);
		return e === /* @__PURE__ */ L(r) && s && (o ? le(n, i) && gt(e, "set", t, n, i) : gt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = b(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && gt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!D(t) || !Ot.has(t)) && ht(e, "has", t), n;
	}
	ownKeys(e) {
		return ht(e, "iterate", x(e) ? "length" : ft), Reflect.ownKeys(e);
	}
}, Mt = class extends At {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return process.env.NODE_ENV !== "production" && Le(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
	}
	deleteProperty(e, t) {
		return process.env.NODE_ENV !== "production" && Le(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
	}
}, Nt = /* @__PURE__ */ new jt(), Pt = /* @__PURE__ */ new Mt(), Ft = /* @__PURE__ */ new jt(!0), It = /* @__PURE__ */ new Mt(!0), Lt = (e) => e, Rt = (e) => Reflect.getPrototypeOf(e);
function zt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ L(i), o = S(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? Lt : t ? dn : un;
		return !t && ht(a, "iterate", c ? pt : ft), _(Object.create(l), { next() {
			let { value: e, done: t } = l.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [u(e[0]), u(e[1])] : u(e),
				done: t
			};
		} });
	};
}
function Bt(e) {
	return function(...t) {
		if (process.env.NODE_ENV !== "production") {
			let n = t[0] ? `on key "${t[0]}" ` : "";
			Le(`${se(e)} operation ${n}failed: target is readonly.`, /* @__PURE__ */ L(this));
		}
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Vt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ L(r), a = /* @__PURE__ */ L(n);
			e || (le(n, a) && ht(i, "get", n), ht(i, "get", a));
			let { has: o } = Rt(i), s = t ? Lt : e ? dn : un;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && ht(/* @__PURE__ */ L(t), "iterate", ft), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ L(n), i = /* @__PURE__ */ L(t);
			return e || (le(t, i) && ht(r, "has", t), ht(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ L(a), s = t ? Lt : e ? dn : un;
			return !e && ht(o, "iterate", ft), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return _(n, e ? {
		add: Bt("add"),
		set: Bt("set"),
		delete: Bt("delete"),
		clear: Bt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ L(this), r = Rt(n), i = /* @__PURE__ */ L(e), a = !t && !/* @__PURE__ */ sn(e) && !/* @__PURE__ */ on(e) ? i : e;
			return r.has.call(n, a) || le(e, a) && r.has.call(n, e) || le(i, a) && r.has.call(n, i) || (n.add(a), gt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ sn(n) && !/* @__PURE__ */ on(n) && (n = /* @__PURE__ */ L(n));
			let r = /* @__PURE__ */ L(this), { has: i, get: a } = Rt(r), o = i.call(r, e);
			o ? process.env.NODE_ENV !== "production" && qt(r, i, e) : (e = /* @__PURE__ */ L(e), o = i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? le(n, s) && gt(r, "set", e, n, s) : gt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ L(this), { has: n, get: r } = Rt(t), i = n.call(t, e);
			i ? process.env.NODE_ENV !== "production" && qt(t, n, e) : (e = /* @__PURE__ */ L(e), i = n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && gt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ L(this), t = e.size !== 0, n = process.env.NODE_ENV === "production" ? void 0 : S(e) ? new Map(e) : new Set(e), r = e.clear();
			return t && gt(e, "clear", void 0, void 0, n), r;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = zt(r, e, t);
	}), n;
}
function Ht(e, t) {
	let n = Vt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(b(n, r) && r in t ? n : t, r, i);
}
var Ut = { get: /* @__PURE__ */ Ht(!1, !1) }, Wt = { get: /* @__PURE__ */ Ht(!1, !0) }, Gt = { get: /* @__PURE__ */ Ht(!0, !1) }, Kt = { get: /* @__PURE__ */ Ht(!0, !0) };
function qt(e, t, n) {
	let r = /* @__PURE__ */ L(n);
	if (r !== n && t.call(e, r)) {
		let t = M(e);
		Le(`Reactive ${t} contains both the raw and reactive versions of the same object${t === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
	}
}
var Jt = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap();
function Qt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return /* @__PURE__ */ on(e) ? e : rn(e, !1, Nt, Ut, Jt);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
	return rn(e, !1, Ft, Wt, Yt);
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
	return rn(e, !0, Pt, Gt, Xt);
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
	return rn(e, !0, It, Kt, Zt);
}
function rn(e, t, n, r, i) {
	if (!O(e)) return process.env.NODE_ENV !== "production" && Le(`value cannot be made ${t ? "readonly" : "reactive"}: ${String(e)}`), e;
	if (e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Qt(M(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	return /* @__PURE__ */ on(e) ? /* @__PURE__ */ an(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function on(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function sn(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function cn(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function L(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ L(t) : e;
}
function ln(e) {
	return !b(e, "__v_skip") && Object.isExtensible(e) && de(e, "__v_skip", !0), e;
}
var un = (e) => O(e) ? /* @__PURE__ */ $t(e) : e, dn = (e) => O(e) ? /* @__PURE__ */ tn(e) : e;
// @__NO_SIDE_EFFECTS__
function fn(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
	return hn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function mn(e) {
	return hn(e, !0);
}
function hn(e, t) {
	return /* @__PURE__ */ fn(e) ? e : new gn(e, t);
}
var gn = class {
	constructor(e, t) {
		this.dep = new lt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ L(e), this._value = t ? e : un(e), this.__v_isShallow = t;
	}
	get value() {
		return process.env.NODE_ENV === "production" ? this.dep.track() : this.dep.track({
			target: this,
			type: "get",
			key: "value"
		}), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ sn(e) || /* @__PURE__ */ on(e);
		e = n ? e : /* @__PURE__ */ L(e), le(e, t) && (this._rawValue = e, this._value = n ? e : un(e), process.env.NODE_ENV === "production" ? this.dep.trigger() : this.dep.trigger({
			target: this,
			type: "set",
			key: "value",
			newValue: e,
			oldValue: t
		}));
	}
};
function _n(e) {
	return /* @__PURE__ */ fn(e) ? e.value : e;
}
var vn = {
	get: (e, t, n) => t === "__v_raw" ? e : _n(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ fn(i) && !/* @__PURE__ */ fn(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function yn(e) {
	return /* @__PURE__ */ an(e) ? e : new Proxy(e, vn);
}
var bn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new lt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = st - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && Ve !== this) return qe(this, !0), !0;
		process.env.NODE_ENV;
	}
	get value() {
		let e = process.env.NODE_ENV === "production" ? this.dep.track() : this.dep.track({
			target: this,
			type: "get",
			key: "value"
		});
		return $e(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && Le("Write operation failed: computed value is readonly");
	}
};
// @__NO_SIDE_EFFECTS__
function xn(e, t, n = !1) {
	let r, i;
	T(e) ? r = e : (r = e.get, i = e.set);
	let a = new bn(r, i, n);
	return process.env.NODE_ENV !== "production" && t && !n && (a.onTrack = t.onTrack, a.onTrigger = t.onTrigger), a;
}
var Sn = {}, Cn = /* @__PURE__ */ new WeakMap(), wn = void 0;
function Tn(e, t = !1, n = wn) {
	if (n) {
		let t = Cn.get(n);
		t || Cn.set(n, t = []), t.push(e);
	} else process.env.NODE_ENV !== "production" && !t && Le("onWatcherCleanup() was called when there was no active watcher to associate with.");
}
function En(e, t, n = d) {
	let { immediate: r, deep: i, once: a, scheduler: o, augmentJob: s, call: c } = n, l = (e) => {
		(n.onWarn || Le)("Invalid watch source: ", e, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
	}, u = (e) => i ? e : /* @__PURE__ */ sn(e) || i === !1 || i === 0 ? Dn(e, 1) : Dn(e), f, m, h, g, _ = !1, y = !1;
	if (/* @__PURE__ */ fn(e) ? (m = () => e.value, _ = /* @__PURE__ */ sn(e)) : /* @__PURE__ */ an(e) ? (m = () => u(e), _ = !0) : x(e) ? (y = !0, _ = e.some((e) => /* @__PURE__ */ an(e) || /* @__PURE__ */ sn(e)), m = () => e.map((e) => {
		if (/* @__PURE__ */ fn(e)) return e.value;
		if (/* @__PURE__ */ an(e)) return u(e);
		if (T(e)) return c ? c(e, 2) : e();
		process.env.NODE_ENV !== "production" && l(e);
	})) : T(e) ? m = t ? c ? () => c(e, 2) : e : () => {
		if (h) {
			it();
			try {
				h();
			} finally {
				at();
			}
		}
		let t = wn;
		wn = f;
		try {
			return c ? c(e, 3, [g]) : e(g);
		} finally {
			wn = t;
		}
	} : (m = p, process.env.NODE_ENV !== "production" && l(e)), t && i) {
		let e = m, t = i === !0 ? Infinity : i;
		m = () => Dn(e(), t);
	}
	let b = Be(), S = () => {
		f.stop(), b && b.active && v(b.effects, f);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = y ? Array(e.length).fill(Sn) : Sn, w = (e) => {
		if (!(!(f.flags & 1) || !f.dirty && !e)) {
			if (t) {
				let n = f.run();
				if (e || i || _ || (y ? n.some((e, t) => le(e, C[t])) : le(n, C))) {
					h && h();
					let e = wn;
					wn = f;
					try {
						let e = [
							n,
							C === Sn ? void 0 : y && C[0] === Sn ? [] : C,
							g
						];
						C = n, c ? c(t, 3, e) : t(...e);
					} finally {
						wn = e;
					}
				}
			} else f.run();
		}
	};
	return s && s(w), f = new Ue(m), f.scheduler = o ? () => o(w, !1) : w, g = (e) => Tn(e, !1, f), h = f.onStop = () => {
		let e = Cn.get(f);
		if (e) {
			if (c) c(e, 4);
			else for (let t of e) t();
			Cn.delete(f);
		}
	}, process.env.NODE_ENV !== "production" && (f.onTrack = n.onTrack, f.onTrigger = n.onTrigger), t ? r ? w(!0) : C = f.run() : o ? o(w.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function Dn(e, t = Infinity, n) {
	if (t <= 0 || !O(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ fn(e)) Dn(e.value, t, n);
	else if (x(e)) for (let r = 0; r < e.length; r++) Dn(e[r], t, n);
	else if (C(e) || S(e)) e.forEach((e) => {
		Dn(e, t, n);
	});
	else if (ee(e)) {
		for (let r in e) Dn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Dn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var On = [];
function kn(e) {
	On.push(e);
}
function An() {
	On.pop();
}
var jn = !1;
function R(e, ...t) {
	if (jn) return;
	jn = !0, it();
	let n = On.length ? On[On.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Mn();
	if (r) zn(r, n, 11, [
		e + t.map((e) => e.toString?.call(e) ?? JSON.stringify(e)).join(""),
		n && n.proxy,
		i.map(({ vnode: e }) => `at <${As(n, e.type)}>`).join("\n"),
		i
	]);
	else {
		let n = [`[Vue warn]: ${e}`, ...t];
		i.length && n.push("\n", ...Nn(i)), console.warn(...n);
	}
	at(), jn = !1;
}
function Mn() {
	let e = On[On.length - 1];
	if (!e) return [];
	let t = [];
	for (; e;) {
		let n = t[0];
		n && n.vnode === e ? n.recurseCount++ : t.push({
			vnode: e,
			recurseCount: 0
		});
		let r = e.component && e.component.parent;
		e = r && r.vnode;
	}
	return t;
}
function Nn(e) {
	let t = [];
	return e.forEach((e, n) => {
		t.push(...n === 0 ? [] : ["\n"], ...Pn(e));
	}), t;
}
function Pn({ vnode: e, recurseCount: t }) {
	let n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${As(e.component, e.type, r)}`, a = ">" + n;
	return e.props ? [
		i,
		...Fn(e.props),
		a
	] : [i + a];
}
function Fn(e) {
	let t = [], n = Object.keys(e);
	return n.slice(0, 3).forEach((n) => {
		t.push(...In(n, e[n]));
	}), n.length > 3 && t.push(" ..."), t;
}
function In(e, t, n) {
	return E(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ fn(t) ? (t = In(e, /* @__PURE__ */ L(t.value), !0), n ? t : [
		`${e}=Ref<`,
		t,
		">"
	]) : T(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ L(t), n ? t : [`${e}=`, t]);
}
function Ln(e, t) {
	process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e == "number" ? isNaN(e) && R(`${t} is NaN - the duration expression might be incorrect.`) : R(`${t} is not a valid number - got ${JSON.stringify(e)}.`));
}
var Rn = {
	sp: "serverPrefetch hook",
	bc: "beforeCreate hook",
	c: "created hook",
	bm: "beforeMount hook",
	m: "mounted hook",
	bu: "beforeUpdate hook",
	u: "updated",
	bum: "beforeUnmount hook",
	um: "unmounted hook",
	a: "activated hook",
	da: "deactivated hook",
	ec: "errorCaptured hook",
	rtc: "renderTracked hook",
	rtg: "renderTriggered hook",
	0: "setup function",
	1: "render function",
	2: "watcher getter",
	3: "watcher callback",
	4: "watcher cleanup function",
	5: "native event handler",
	6: "component event handler",
	7: "vnode hook",
	8: "directive hook",
	9: "transition hook",
	10: "app errorHandler",
	11: "app warnHandler",
	12: "ref function",
	13: "async component loader",
	14: "scheduler flush",
	15: "component update",
	16: "app unmount cleanup function"
};
function zn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Vn(e, t, n);
	}
}
function Bn(e, t, n, r) {
	if (T(e)) {
		let i = zn(e, t, n, r);
		return i && k(i) && i.catch((e) => {
			Vn(e, t, n);
		}), i;
	}
	if (x(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Bn(e[a], t, n, r));
		return i;
	}
	process.env.NODE_ENV !== "production" && R(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`);
}
function Vn(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || d;
	if (t) {
		let r = t.parent, i = t.proxy, o = process.env.NODE_ENV === "production" ? `https://vuejs.org/error-reference/#runtime-${n}` : Rn[n];
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, o) === !1) return;
			}
			r = r.parent;
		}
		if (a) {
			it(), zn(a, null, 10, [
				e,
				i,
				o
			]), at();
			return;
		}
	}
	Hn(e, n, i, r, o);
}
function Hn(e, t, n, r = !0, i = !1) {
	if (process.env.NODE_ENV !== "production") {
		let i = Rn[t];
		if (n && kn(n), R(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && An(), r) throw e;
		console.error(e);
	} else if (i) throw e;
	else console.error(e);
}
var Un = [], Wn = -1, Gn = [], Kn = null, qn = 0, Jn = /* @__PURE__ */ Promise.resolve(), Yn = null, Xn = 100;
function Zn(e) {
	let t = Yn || Jn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qn(e) {
	let t = Wn + 1, n = Un.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = Un[r], a = ir(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function $n(e) {
	if (!(e.flags & 1)) {
		let t = ir(e), n = Un[Un.length - 1];
		!n || !(e.flags & 2) && t >= ir(n) ? Un.push(e) : Un.splice(Qn(t), 0, e), e.flags |= 1, er();
	}
}
function er() {
	Yn ||= Jn.then(ar);
}
function tr(e) {
	if (!x(e)) Kn && e.id === -1 ? Kn.splice(qn + 1, 0, e) : e.flags & 1 || (Gn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Gn.push(e[t]);
	er();
}
function nr(e, t, n = Wn + 1) {
	for (process.env.NODE_ENV !== "production" && (t ||= /* @__PURE__ */ new Map()); n < Un.length; n++) {
		let r = Un[n];
		if (r && r.flags & 2) {
			if (e && r.id !== e.uid || process.env.NODE_ENV !== "production" && or(t, r)) continue;
			Un.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
		}
	}
}
function rr(e) {
	if (Gn.length) {
		let t = [...new Set(Gn)].sort((e, t) => ir(e) - ir(t));
		if (Gn.length = 0, Kn) {
			for (let e = 0; e < t.length; e++) Kn.push(t[e]);
			return;
		}
		for (Kn = t, process.env.NODE_ENV !== "production" && (e ||= /* @__PURE__ */ new Map()), qn = 0; qn < Kn.length; qn++) {
			let t = Kn[qn];
			process.env.NODE_ENV !== "production" && or(e, t) || (t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2);
		}
		Kn = null, qn = 0;
	}
}
var ir = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function ar(e) {
	process.env.NODE_ENV !== "production" && (e ||= /* @__PURE__ */ new Map());
	let t = process.env.NODE_ENV === "production" ? p : (t) => or(e, t);
	try {
		for (Wn = 0; Wn < Un.length; Wn++) {
			let e = Un[Wn];
			if (e && !(e.flags & 8)) {
				if (process.env.NODE_ENV !== "production" && t(e)) continue;
				e.flags & 4 && (e.flags &= -2), zn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2);
			}
		}
	} finally {
		for (; Wn < Un.length; Wn++) {
			let e = Un[Wn];
			e && (e.flags &= -2);
		}
		Wn = -1, Un.length = 0, rr(e), Yn = null, (Un.length || Gn.length) && ar(e);
	}
}
function or(e, t) {
	let n = e.get(t) || 0;
	if (n > Xn) {
		let e = t.i, n = e && ks(e.type);
		return Vn(`Maximum recursive updates exceeded${n ? ` in component <${n}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10), !0;
	}
	return e.set(t, n + 1), !1;
}
var sr = !1, cr = (e) => {
	try {
		return sr;
	} finally {
		sr = e;
	}
}, lr = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (he().__VUE_HMR_RUNTIME__ = {
	createRecord: vr(pr),
	rerender: vr(hr),
	reload: vr(gr)
});
var ur = /* @__PURE__ */ new Map();
function dr(e) {
	let t = e.type.__hmrId, n = ur.get(t);
	n ||= (pr(t, e.type), ur.get(t)), n.instances.add(e);
}
function fr(e) {
	ur.get(e.type.__hmrId).instances.delete(e);
}
function pr(e, t) {
	return !ur.has(e) && (ur.set(e, {
		initialDef: mr(t),
		instances: /* @__PURE__ */ new Set()
	}), !0);
}
function mr(e) {
	return js(e) ? e.__vccOpts : e;
}
function hr(e, t) {
	let n = ur.get(e);
	n && (n.initialDef.render = t, [...n.instances].forEach((e) => {
		t && (e.render = t, mr(e.type).render = t), e.renderCache = [], sr = !0, e.job.flags & 8 || e.update(), sr = !1;
	}));
}
function gr(e, t) {
	let n = ur.get(e);
	if (!n) return;
	t = mr(t), _r(n.initialDef, t);
	let r = [...n.instances];
	for (let e = 0; e < r.length; e++) {
		let i = r[e], a = mr(i.type), o = lr.get(a);
		o || (a !== n.initialDef && _r(a, t), lr.set(a, o = /* @__PURE__ */ new Set())), o.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (o.add(i), i.ceReload(t.styles), o.delete(i)) : i.parent ? $n(() => {
			i.job.flags & 8 || (sr = !0, i.parent.update(), sr = !1, o.delete(i));
		}) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required."), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(a);
	}
	tr(() => {
		lr.clear();
	});
}
function _r(e, t) {
	_(e, t);
	for (let n in e) n !== "__file" && !(n in t) && delete e[n];
}
function vr(e) {
	return (t, n) => {
		try {
			return e(t, n);
		} catch (e) {
			console.error(e), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
		}
	};
}
var yr, br = [], xr = !1;
function Sr(e, ...t) {
	yr ? yr.emit(e, ...t) : xr || br.push({
		event: e,
		args: t
	});
}
function Cr(e, t) {
	yr = e, yr ? (yr.enabled = !0, br.forEach(({ event: e, args: t }) => yr.emit(e, ...t)), br = []) : typeof window < "u" && window.HTMLElement && !(window.navigator?.userAgent)?.includes("jsdom") ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
		Cr(e, t);
	}), setTimeout(() => {
		yr || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, xr = !0, br = []);
	}, 3e3)) : (xr = !0, br = []);
}
function wr(e, t) {
	Sr("app:init", e, t, {
		Fragment: Mo,
		Text: No,
		Comment: Po,
		Static: Fo
	});
}
function Tr(e) {
	Sr("app:unmount", e);
}
var Er = /* @__PURE__ */ Ar("component:added"), Dr = /* @__PURE__ */ Ar("component:updated"), Or = /* @__PURE__ */ Ar("component:removed"), kr = (e) => {
	yr && typeof yr.cleanupBuffer == "function" && !yr.cleanupBuffer(e) && Or(e);
};
// @__NO_SIDE_EFFECTS__
function Ar(e) {
	return (t) => {
		Sr(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
	};
}
var jr = /* @__PURE__ */ Nr("perf:start"), Mr = /* @__PURE__ */ Nr("perf:end");
function Nr(e) {
	return (t, n, r) => {
		Sr(e, t.appContext.app, t.uid, t, n, r);
	};
}
function Pr(e, t, n) {
	Sr("component:emit", e.appContext.app, e, t, n);
}
var Fr = null, Ir = null;
function Lr(e) {
	let t = Fr;
	return Fr = e, Ir = e && e.type.__scopeId || null, t;
}
function z(e, t = Fr, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Bo(-1);
		let i = Lr(t), a = Io.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Io.length; e > a; e--) Ro();
			Lr(i), r._d && Bo(1);
		}
		return process.env.NODE_ENV !== "production" && Dr(t), o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Rr(e) {
	ne(e) && R("Do not use built-in directive ids as custom directive id: " + e);
}
function zr(e, t) {
	if (Fr === null) return process.env.NODE_ENV !== "production" && R("withDirectives can only be used inside render functions."), e;
	let n = Es(Fr), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, o, s = d] = t[e];
		i && (T(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && Dn(a), r.push({
			dir: i,
			instance: n,
			value: a,
			oldValue: void 0,
			arg: o,
			modifiers: s
		}));
	}
	return e;
}
function Br(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (it(), Bn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), at());
	}
}
function Vr(e, t) {
	if (process.env.NODE_ENV !== "production" && (!cs || cs.isMounted) && R("provide() can only be used inside setup()."), cs) {
		let n = cs.provides, r = cs.parent && cs.parent.provides;
		r === n && (n = cs.provides = Object.create(r)), n[e] = t;
	}
}
function Hr(e, t, n = !1) {
	let r = ls();
	if (r || ba) {
		let i = ba ? ba._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && T(t) ? t.call(r && r.proxy) : t;
		process.env.NODE_ENV !== "production" && R(`injection "${String(e)}" not found.`);
	} else process.env.NODE_ENV !== "production" && R("inject() can only be used inside setup() or functional components.");
}
var Ur = /* @__PURE__ */ Symbol.for("v-scx"), Wr = () => {
	{
		let e = Hr(Ur);
		return e || process.env.NODE_ENV !== "production" && R("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
	}
};
function Gr(e, t) {
	return qr(e, null, t);
}
function Kr(e, t, n) {
	return process.env.NODE_ENV !== "production" && !T(t) && R("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), qr(e, t, n);
}
function qr(e, t, n = d) {
	let { immediate: r, deep: i, flush: a, once: o } = n;
	process.env.NODE_ENV !== "production" && !t && (r !== void 0 && R("watch() \"immediate\" option is only respected when using the watch(source, callback, options?) signature."), i !== void 0 && R("watch() \"deep\" option is only respected when using the watch(source, callback, options?) signature."), o !== void 0 && R("watch() \"once\" option is only respected when using the watch(source, callback, options?) signature."));
	let s = _({}, n);
	process.env.NODE_ENV !== "production" && (s.onWarn = R);
	let c = t && r || !t && a !== "post", l;
	if (_s) {
		if (a === "sync") {
			let e = Wr();
			l = e.__watcherHandles ||= [];
		} else if (!c) {
			let e = () => {};
			return e.stop = p, e.resume = p, e.pause = p, e;
		}
	}
	let u = cs;
	s.call = (e, t, n) => Bn(e, u, t, n);
	let f = !1;
	a === "post" ? s.scheduler = (e) => {
		yo(e, u && u.suspense);
	} : a !== "sync" && (f = !0, s.scheduler = (e, t) => {
		t ? e() : $n(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), f && (e.flags |= 2, u && (e.id = u.uid, e.i = u));
	};
	let m = En(e, t, s);
	return _s && (l ? l.push(m) : c && m()), m;
}
function Jr(e, t, n) {
	let r = this.proxy, i = E(e) ? e.includes(".") ? Yr(r, e) : () => r[e] : e.bind(r, r), a;
	T(t) ? a = t : (a = t.handler, n = t);
	let o = fs(this), s = qr(i, a.bind(r), n);
	return o(), s;
}
function Yr(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Xr = /* @__PURE__ */ Symbol("_vte"), Zr = (e) => e.__isTeleport, Qr = /* @__PURE__ */ Symbol("_leaveCb"), $r = /* @__PURE__ */ Symbol("_enterCb");
function ei() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return ki(() => {
		e.isMounted = !0;
	}), Mi(() => {
		e.isUnmounting = !0;
	}), e;
}
var ti = [Function, Array], ni = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: ti,
	onEnter: ti,
	onAfterEnter: ti,
	onEnterCancelled: ti,
	onBeforeLeave: ti,
	onLeave: ti,
	onAfterLeave: ti,
	onLeaveCancelled: ti,
	onBeforeAppear: ti,
	onAppear: ti,
	onAfterAppear: ti,
	onAppearCancelled: ti
}, ri = (e) => {
	let t = e.subTree;
	return t.component ? ri(t.component) : t;
}, ii = {
	name: "BaseTransition",
	props: ni,
	setup(e, { slots: t }) {
		let n = ls(), r = ei();
		return () => {
			let i = t.default && fi(t.default(), !0), a = i && i.length ? ai(i) : n.subTree ? q() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ L(e), { mode: s } = o;
			if (process.env.NODE_ENV !== "production" && s && s !== "in-out" && s !== "out-in" && s !== "default" && R(`invalid <transition> mode: ${s}`), r.isLeaving) return li(a);
			let c = ui(a);
			if (!c) return li(a);
			let l = ci(c, o, r, n, (e) => l = e);
			c.type !== Po && di(c, l);
			let u = n.subTree && ui(n.subTree);
			if (u && u.type !== Po && !Wo(u, c) && ri(n).type !== Po) {
				let e = ci(u, o, r, n);
				if (di(u, e), s === "out-in" && c.type !== Po) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, li(a);
				s === "in-out" && c.type !== Po ? e.delayLeave = (e, t, n) => {
					let i = si(r, u);
					i[String(u.key)] = u, e[Qr] = () => {
						t(), e[Qr] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function ai(e) {
	let t = e[0];
	if (e.length > 1) {
		let n = !1;
		for (let r of e) if (r.type !== Po) {
			if (process.env.NODE_ENV !== "production" && n) {
				R("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
				break;
			}
			if (t = r, n = !0, process.env.NODE_ENV === "production") break;
		}
	}
	return t;
}
var oi = ii;
function si(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function ci(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: p, onAfterLeave: m, onLeaveCancelled: h, onBeforeAppear: g, onAppear: _, onAfterAppear: v, onAppearCancelled: y } = t, b = String(e.key), S = si(n, e), C = (e, t) => {
		e && Bn(e, r, 9, t);
	}, w = (e, t) => {
		let n = t[1];
		C(e, t), x(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, T = {
		mode: o,
		persisted: s,
		beforeEnter(t) {
			let r = c;
			if (!n.isMounted) {
				if (a) r = g || c;
				else return;
			}
			t[Qr] && t[Qr](!0);
			let i = S[b];
			i && Wo(e, i) && i.el[Qr] && i.el[Qr](), C(r, [t]);
		},
		enter(t) {
			if (!sr && S[b] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) {
				if (a) r = _ || l, i = v || u, o = y || d;
				else return;
			}
			let s = !1;
			t[$r] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), T.delayedLeave && T.delayedLeave(), t[$r] = void 0);
			};
			let c = t[$r].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[$r] && t[$r](!0), n.isUnmounting) return r();
			C(f, [t]);
			let a = !1;
			t[Qr] = (n) => {
				a || (a = !0, r(), C(n ? h : m, [t]), t[Qr] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[Qr].bind(null, !1);
			S[i] = e, p ? w(p, [t, o]) : o();
		},
		clone(e) {
			let a = ci(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return T;
}
function li(e) {
	if (xi(e)) return e = Zo(e), e.children = null, e;
}
function ui(e) {
	if (!xi(e)) return Zr(e.type) && e.children ? ai(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && T(n.default)) return n.default();
	}
}
function di(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		di(Zr(n.type) && ui(n) || n, t);
	} else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function fi(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === Mo ? (o.patchFlag & 128 && i++, r = r.concat(fi(o.children, t, s))) : (t || o.type !== Po) && r.push(s == null ? o : Zo(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
// @__NO_SIDE_EFFECTS__
function pi(e, t) {
	return T(e) ? /* @__PURE__ */ _({ name: e.name }, t, { setup: e }) : e;
}
function mi(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var hi = /* @__PURE__ */ new WeakSet();
function gi(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var _i = /* @__PURE__ */ new WeakMap();
function vi(e, t, n, r, i = !1) {
	if (x(e)) {
		e.forEach((e, a) => vi(e, t && (x(t) ? t[a] : t), n, r, i));
		return;
	}
	if (bi(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && vi(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? Es(r.component) : r.el, o = i ? null : a, { i: s, r: c } = e;
	if (process.env.NODE_ENV !== "production" && !s) {
		R("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
		return;
	}
	let l = t && t.r, u = s.refs === d ? s.refs = {} : s.refs, f = s.setupState, p = /* @__PURE__ */ L(f), h = f === d ? m : (e) => process.env.NODE_ENV !== "production" && (b(p, e) && !/* @__PURE__ */ fn(p[e]) && R(`Template ref "${e}" used on a non-ref value. It will not work in the production build.`), hi.has(p[e])) || gi(u, e) ? !1 : b(p, e), g = (e, t) => !(process.env.NODE_ENV !== "production" && hi.has(e) || t && gi(u, t));
	if (l != null && l !== c) {
		if (yi(t), E(l)) u[l] = null, h(l) && (f[l] = null);
		else if (/* @__PURE__ */ fn(l)) {
			let e = t;
			g(l, e.k) && (l.value = null), e.k && (u[e.k] = null);
		}
	}
	if (T(c)) zn(c, s, 12, [o, u]);
	else {
		let t = E(c), r = /* @__PURE__ */ fn(c);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? h(c) ? f[c] : u[c] : g(c) || !e.k ? c.value : u[e.k];
					if (i) x(n) && v(n, a);
					else if (x(n)) n.includes(a) || n.push(a);
					else if (t) u[c] = [a], h(c) && (f[c] = u[c]);
					else {
						let t = [a];
						g(c, e.k) && (c.value = t), e.k && (u[e.k] = t);
					}
				} else t ? (u[c] = o, h(c) && (f[c] = o)) : r ? (g(c, e.k) && (c.value = o), e.k && (u[e.k] = o)) : process.env.NODE_ENV !== "production" && R("Invalid template ref type:", c, `(${typeof c})`);
			};
			if (o) {
				let t = () => {
					s(), _i.delete(e);
				};
				t.id = -1, _i.set(e, t), yo(t, n);
			} else yi(e), s();
		} else process.env.NODE_ENV !== "production" && R("Invalid template ref type:", c, `(${typeof c})`);
	}
}
function yi(e) {
	let t = _i.get(e);
	t && (t.flags |= 8, _i.delete(e));
}
he().requestIdleCallback, he().cancelIdleCallback;
var bi = (e) => !!e.type.__asyncLoader, xi = (e) => e.type.__isKeepAlive;
function Si(e, t) {
	wi(e, "a", t);
}
function Ci(e, t) {
	wi(e, "da", t);
}
function wi(e, t, n = cs) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Ei(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) xi(e.parent.vnode) && Ti(r, t, n, e), e = e.parent;
	}
}
function Ti(e, t, n, r) {
	let i = Ei(t, e, r, !0);
	Ni(() => {
		v(r[t], i);
	}, n);
}
function Ei(e, t, n = cs, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			it();
			let i = fs(n), a = Bn(t, n, e, r);
			return i(), at(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
	process.env.NODE_ENV !== "production" && R(`${ce(Rn[e].replace(/ hook$/, ""))} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
}
var Di = (e) => (t, n = cs) => {
	(!_s || e === "sp") && Ei(e, (...e) => t(...e), n);
}, Oi = Di("bm"), ki = Di("m"), Ai = Di("bu"), ji = Di("u"), Mi = Di("bum"), Ni = Di("um"), Pi = Di("sp"), Fi = Di("rtg"), Ii = Di("rtc");
function Li(e, t = cs) {
	Ei("ec", e, t);
}
var Ri = "components", zi = "directives";
function B(e, t) {
	return Hi(Ri, e, !0, t) || e;
}
var Bi = /* @__PURE__ */ Symbol.for("v-ndc");
function Vi(e) {
	return Hi(zi, e);
}
function Hi(e, t, n = !0, r = !1) {
	let i = Fr || cs;
	if (i) {
		let a = i.type;
		if (e === Ri) {
			let e = ks(a, !1);
			if (e && (e === t || e === ae(t) || e === se(ae(t)))) return a;
		}
		let o = Ui(i[e] || a[e], t) || Ui(i.appContext[e], t);
		if (!o && r) return a;
		if (process.env.NODE_ENV !== "production" && n && !o) {
			let n = e === Ri ? "\nIf this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement." : "";
			R(`Failed to resolve ${e.slice(0, -1)}: ${t}${n}`);
		}
		return o;
	}
	process.env.NODE_ENV !== "production" && R(`resolve${se(e.slice(0, -1))} can only be used in render() or setup().`);
}
function Ui(e, t) {
	return e && (e[t] || e[ae(t)] || e[se(ae(t))]);
}
function Wi(e, t, n, r) {
	let i, a = n && n[r], o = x(e);
	if (o || E(e)) {
		let n = o && /* @__PURE__ */ an(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ sn(e), s = /* @__PURE__ */ on(e), e = vt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? dn(un(e[n])) : un(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		if (process.env.NODE_ENV !== "production" && (!Number.isInteger(e) || e < 0)) R(`The v-for range expects a positive integer value but got ${e}.`), i = [];
		else {
			i = Array(e);
			for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
		}
	} else if (O(e)) {
		if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
		else {
			let n = Object.keys(e);
			i = Array(n.length);
			for (let r = 0, o = n.length; r < o; r++) {
				let o = n[r];
				i[r] = t(e[o], o, r, a && a[r]);
			}
		}
	} else i = [];
	return n && (n[r] = i), i;
}
function V(e, t, n, r, i, a) {
	if (n ??= {}, Fr.ce || Fr.parent && bi(Fr.parent) && Fr.parent.ce) {
		let e = a != null && n.key == null ? _({}, n, { key: a }) : n, i = Object.keys(e).length > 0;
		return t !== "default" && (e.name = t), H(), Ho(Mo, null, [G("slot", e, r && r())], i ? -2 : 64);
	}
	let o = e[t];
	process.env.NODE_ENV !== "production" && o && o.length > 1 && (R("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), o = () => []), o && o._c && (o._d = !1);
	let s = Io.length;
	H();
	let c;
	try {
		let i = o && Gi(o(n)), s = n.key || a || i && i.key;
		c = Ho(Mo, { key: (s && !D(s) ? s : `_${t}`) + (!i && r ? "_fb" : "") }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
	} catch (e) {
		for (let e = Io.length; e > s; e--) Ro();
		throw e;
	} finally {
		o && o._c && (o._d = !0);
	}
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), c;
}
function Gi(e) {
	return e.some((e) => !Uo(e) || !(e.type === Po || e.type === Mo && !Gi(e.children))) ? e : null;
}
var Ki = (e) => e ? gs(e) ? Es(e) : Ki(e.parent) : null, qi = /* @__PURE__ */ _(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => process.env.NODE_ENV === "production" ? e.props : /* @__PURE__ */ nn(e.props),
	$attrs: (e) => process.env.NODE_ENV === "production" ? e.attrs : /* @__PURE__ */ nn(e.attrs),
	$slots: (e) => process.env.NODE_ENV === "production" ? e.slots : /* @__PURE__ */ nn(e.slots),
	$refs: (e) => process.env.NODE_ENV === "production" ? e.refs : /* @__PURE__ */ nn(e.refs),
	$parent: (e) => Ki(e.parent),
	$root: (e) => Ki(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => sa(e),
	$forceUpdate: (e) => e.f ||= () => {
		$n(e.update);
	},
	$nextTick: (e) => e.n ||= Zn.bind(e.proxy),
	$watch: (e) => Jr.bind(e)
}), Ji = (e) => e === "_" || e === "$", Yi = (e, t) => e !== d && !e.__isScriptSetup && b(e, t), Xi = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: i, props: a, accessCache: o, type: s, appContext: c } = e;
		if (process.env.NODE_ENV !== "production" && t === "__isVue") return !0;
		if (t[0] !== "$") {
			let e = o[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return i[t];
				case 4: return n[t];
				case 3: return a[t];
			}
			else if (Yi(r, t)) return o[t] = 1, r[t];
			else if (i !== d && b(i, t)) return o[t] = 2, i[t];
			else if (b(a, t)) return o[t] = 3, a[t];
			else if (n !== d && b(n, t)) return o[t] = 4, n[t];
			else na && (o[t] = 0);
		}
		let l = qi[t], u, f;
		if (l) return t === "$attrs" ? (ht(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Da()) : process.env.NODE_ENV !== "production" && t === "$slots" && ht(e, "get", t), l(e);
		if ((u = s.__cssModules) && (u = u[t])) return u;
		if (n !== d && b(n, t)) return o[t] = 4, n[t];
		if (f = c.config.globalProperties, b(f, t)) return f[t];
		process.env.NODE_ENV !== "production" && Fr && (!E(t) || t.indexOf("__v") !== 0) && (i !== d && Ji(t[0]) && b(i, t) ? R(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Fr && R(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return Yi(i, t) ? (i[t] = n, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && b(i, t) ? (R(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== d && b(r, t) ? (r[t] = n, !0) : b(e.props, t) ? (process.env.NODE_ENV !== "production" && R(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && R(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(a, t, {
			enumerable: !0,
			configurable: !0,
			value: n
		}) : a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || e !== d && s[0] !== "$" && b(e, s) || Yi(t, s) || b(a, s) || b(r, s) || b(qi, s) || b(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? b(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
process.env.NODE_ENV !== "production" && (Xi.ownKeys = (e) => (R("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Zi(e) {
	let t = {};
	return Object.defineProperty(t, "_", {
		configurable: !0,
		enumerable: !1,
		get: () => e
	}), Object.keys(qi).forEach((n) => {
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !1,
			get: () => qi[n](e),
			set: p
		});
	}), t;
}
function Qi(e) {
	let { ctx: t, propsOptions: [n] } = e;
	n && Object.keys(n).forEach((n) => {
		Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => e.props[n],
			set: p
		});
	});
}
function $i(e) {
	let { ctx: t, setupState: n } = e;
	Object.keys(/* @__PURE__ */ L(n)).forEach((e) => {
		if (!n.__isScriptSetup) {
			if (Ji(e[0])) {
				R(`setup() return property ${JSON.stringify(e)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
				return;
			}
			Object.defineProperty(t, e, {
				enumerable: !0,
				configurable: !0,
				get: () => n[e],
				set: p
			});
		}
	});
}
function ea(e) {
	return x(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function ta() {
	let e = /* @__PURE__ */ Object.create(null);
	return (t, n) => {
		e[n] ? R(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
	};
}
var na = !0;
function ra(e) {
	let t = sa(e), n = e.proxy, r = e.ctx;
	na = !1, t.beforeCreate && aa(t.beforeCreate, e, "bc");
	let { data: i, computed: a, methods: o, watch: s, provide: c, inject: l, created: u, beforeMount: d, mounted: f, beforeUpdate: m, updated: h, activated: g, deactivated: _, beforeDestroy: v, beforeUnmount: y, destroyed: b, unmounted: S, render: C, renderTracked: w, renderTriggered: E, errorCaptured: D, serverPrefetch: A, expose: j, inheritAttrs: M, components: ee, directives: N, filters: te } = t, ne = process.env.NODE_ENV === "production" ? null : ta();
	if (process.env.NODE_ENV !== "production") {
		let [t] = e.propsOptions;
		if (t) for (let e in t) ne("Props", e);
	}
	if (l && ia(l, r, ne), o) for (let e in o) {
		let t = o[e];
		T(t) ? (process.env.NODE_ENV === "production" ? r[e] = t.bind(n) : Object.defineProperty(r, e, {
			value: t.bind(n),
			configurable: !0,
			enumerable: !0,
			writable: !0
		}), process.env.NODE_ENV !== "production" && ne("Methods", e)) : process.env.NODE_ENV !== "production" && R(`Method "${e}" has type "${typeof t}" in the component definition. Did you reference the function correctly?`);
	}
	if (i) {
		process.env.NODE_ENV !== "production" && !T(i) && R("The data option must be a function. Plain object usage is no longer supported.");
		let t = i.call(n, n);
		if (process.env.NODE_ENV !== "production" && k(t) && R("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !O(t)) process.env.NODE_ENV !== "production" && R("data() should return an object.");
		else if (e.data = /* @__PURE__ */ $t(t), process.env.NODE_ENV !== "production") for (let e in t) ne("Data", e), Ji(e[0]) || Object.defineProperty(r, e, {
			configurable: !0,
			enumerable: !0,
			get: () => t[e],
			set: p
		});
	}
	if (na = !0, a) for (let e in a) {
		let t = a[e], i = T(t) ? t.bind(n, n) : T(t.get) ? t.get.bind(n, n) : p;
		process.env.NODE_ENV !== "production" && i === p && R(`Computed property "${e}" has no getter.`);
		let o = Ms({
			get: i,
			set: !T(t) && T(t.set) ? t.set.bind(n) : process.env.NODE_ENV === "production" ? p : () => {
				R(`Write operation failed: computed property "${e}" is readonly.`);
			}
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => o.value,
			set: (e) => o.value = e
		}), process.env.NODE_ENV !== "production" && ne("Computed", e);
	}
	if (s) for (let e in s) oa(s[e], r, n, e);
	if (c) {
		let e = T(c) ? c.call(n) : c;
		Reflect.ownKeys(e).forEach((t) => {
			Vr(t, e[t]);
		});
	}
	u && aa(u, e, "c");
	function re(e, t) {
		x(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (re(Oi, d), re(ki, f), re(Ai, m), re(ji, h), re(Si, g), re(Ci, _), re(Li, D), re(Ii, w), re(Fi, E), re(Mi, y), re(Ni, S), re(Pi, A), x(j)) {
		if (j.length) {
			let t = e.exposed ||= {};
			j.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	C && e.render === p && (e.render = C), M != null && (e.inheritAttrs = M), ee && (e.components = ee), N && (e.directives = N), A && mi(e);
}
function ia(e, t, n = p) {
	x(e) && (e = fa(e));
	for (let r in e) {
		let i = e[r], a;
		a = O(i) ? "default" in i ? Hr(i.from || r, i.default, !0) : Hr(i.from || r) : Hr(i), /* @__PURE__ */ fn(a) ? Object.defineProperty(t, r, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		}) : t[r] = a, process.env.NODE_ENV !== "production" && n("Inject", r);
	}
}
function aa(e, t, n) {
	Bn(x(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function oa(e, t, n, r) {
	let i = r.includes(".") ? Yr(n, r) : () => n[r];
	if (E(e)) {
		let n = t[e];
		T(n) ? Kr(i, n) : process.env.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e}"`, n);
	} else if (T(e)) Kr(i, e.bind(n));
	else if (O(e)) {
		if (x(e)) e.forEach((e) => oa(e, t, n, r));
		else {
			let r = T(e.handler) ? e.handler.bind(n) : t[e.handler];
			T(r) ? Kr(i, r, e) : process.env.NODE_ENV !== "production" && R(`Invalid watch handler specified by key "${e.handler}"`, r);
		}
	} else process.env.NODE_ENV !== "production" && R(`Invalid watch option: "${r}"`, e);
}
function sa(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => ca(c, e, o, !0)), ca(c, t, o)), O(t) && a.set(t, c), c;
}
function ca(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && ca(e, a, n, !0), i && i.forEach((t) => ca(e, t, n, !0));
	for (let i in t) if (r && i === "expose") process.env.NODE_ENV !== "production" && R("\"expose\" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.");
	else {
		let r = la[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var la = {
	data: ua,
	props: ha,
	emits: ha,
	methods: ma,
	computed: ma,
	beforeCreate: pa,
	created: pa,
	beforeMount: pa,
	mounted: pa,
	beforeUpdate: pa,
	updated: pa,
	beforeDestroy: pa,
	beforeUnmount: pa,
	destroyed: pa,
	unmounted: pa,
	activated: pa,
	deactivated: pa,
	errorCaptured: pa,
	serverPrefetch: pa,
	components: ma,
	directives: ma,
	watch: ga,
	provide: ua,
	inject: da
};
function ua(e, t) {
	return t ? e ? function() {
		return _(T(e) ? e.call(this, this) : e, T(t) ? t.call(this, this) : t);
	} : t : e;
}
function da(e, t) {
	return ma(fa(e), fa(t));
}
function fa(e) {
	if (x(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function pa(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function ma(e, t) {
	return e ? _(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ha(e, t) {
	return e ? x(e) && x(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : _(/* @__PURE__ */ Object.create(null), ea(e), ea(t ?? {})) : t;
}
function ga(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = _(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = pa(e[r], t[r]);
	return n;
}
function _a() {
	return {
		app: null,
		config: {
			isNativeTag: m,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var va = 0;
function ya(e, t) {
	return function(n, r = null) {
		T(n) || (n = _({}, n)), r != null && !O(r) && (process.env.NODE_ENV !== "production" && R("root props passed to app.mount() must be an object."), r = null);
		let i = _a(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: va++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Fs,
			get config() {
				return i.config;
			},
			set config(e) {
				process.env.NODE_ENV !== "production" && R("app.config cannot be replaced. Modify individual options instead.");
			},
			use(e, ...t) {
				return a.has(e) ? process.env.NODE_ENV !== "production" && R("Plugin has already been applied to target app.") : e && T(e.install) ? (a.add(e), e.install(c, ...t)) : T(e) ? (a.add(e), e(c, ...t)) : process.env.NODE_ENV !== "production" && R("A plugin must either be a function or an object with an \"install\" function."), c;
			},
			mixin(e) {
				return i.mixins.includes(e) ? process.env.NODE_ENV !== "production" && R("Mixin has already been applied to target app" + (e.name ? `: ${e.name}` : "")) : i.mixins.push(e), c;
			},
			component(e, t) {
				return process.env.NODE_ENV !== "production" && hs(e, i.config), t ? (process.env.NODE_ENV !== "production" && i.components[e] && R(`Component "${e}" has already been registered in target app.`), i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return process.env.NODE_ENV !== "production" && Rr(e), t ? (process.env.NODE_ENV !== "production" && i.directives[e] && R(`Directive "${e}" has already been registered in target app.`), i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (s) process.env.NODE_ENV !== "production" && R("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
				else {
					process.env.NODE_ENV !== "production" && a.__vue_app__ && R("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
					let u = c._ceVNode || G(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), process.env.NODE_ENV !== "production" && (i.reload = () => {
						let t = Zo(u);
						t.el = null, e(t, a, l);
					}), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, process.env.NODE_ENV !== "production" && (c._instance = u.component, wr(c, Fs)), Es(u.component);
				}
			},
			onUnmount(e) {
				process.env.NODE_ENV !== "production" && typeof e != "function" && R(`Expected function as first argument to app.onUnmount(), but got ${typeof e}`), o.push(e);
			},
			unmount() {
				s ? (Bn(o, c._instance, 16), e(null, c._container), process.env.NODE_ENV !== "production" && (c._instance = null, Tr(c)), delete c._container.__vue_app__) : process.env.NODE_ENV !== "production" && R("Cannot unmount an app that is not mounted.");
			},
			provide(e, t) {
				return process.env.NODE_ENV !== "production" && e in i.provides && (b(i.provides, e) ? R(`App already provides property with key "${String(e)}". It will be overwritten with the new value.`) : R(`App already provides property with key "${String(e)}" inherited from its parent element. It will be overwritten with the new value.`)), i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = ba;
				ba = c;
				try {
					return e();
				} finally {
					ba = t;
				}
			}
		};
		return c;
	};
}
var ba = null, xa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ae(t)}Modifiers`] || e[`${P(t)}Modifiers`];
function Sa(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || d;
	if (process.env.NODE_ENV !== "production") {
		let { emitsOptions: r, propsOptions: [i] } = e;
		if (r) {
			if (!(t in r)) (!i || !(ce(ae(t)) in i)) && R(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ce(ae(t))}" prop.`);
			else {
				let e = r[t];
				T(e) && (e(...n) || R(`Invalid event arguments: event validation failed for event "${t}".`));
			}
		}
	}
	let i = n, a = t.startsWith("update:"), o = a && xa(r, t.slice(7));
	if (o && (o.trim && (i = n.map((e) => E(e) ? e.trim() : e)), o.number && (i = n.map(fe))), process.env.NODE_ENV !== "production" && Pr(e, t, i), process.env.NODE_ENV !== "production") {
		let n = t.toLowerCase();
		n !== t && r[ce(n)] && R(`Event "${n}" is emitted in component ${As(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${P(t)}" instead of "${t}".`);
	}
	let s, c = r[s = ce(t)] || r[s = ce(ae(t))];
	!c && a && (c = r[s = ce(P(t))]), c && Bn(c, e, 6, i);
	let l = r[s + "Once"];
	if (l) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, Bn(l, e, 6, i);
	}
}
var Ca = /* @__PURE__ */ new WeakMap();
function wa(e, t, n = !1) {
	let r = n ? Ca : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!T(e)) {
		let r = (e) => {
			let n = wa(e, t, !0);
			n && (s = !0, _(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (O(e) && r.set(e, null), null) : (x(a) ? a.forEach((e) => o[e] = null) : _(o, a), O(e) && r.set(e, o), o);
}
function Ta(e, t) {
	return !e || !h(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), b(e, t[0].toLowerCase() + t.slice(1)) || b(e, P(t)) || b(e, t));
}
var Ea = !1;
function Da() {
	Ea = !0;
}
function Oa(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: m, inheritAttrs: _ } = e, v = Lr(e), y, b;
	process.env.NODE_ENV !== "production" && (Ea = !1);
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = process.env.NODE_ENV !== "production" && p.__isScriptSetup ? new Proxy(e, { get(e, t, n) {
				return R(`Property '${String(t)}' was accessed via 'this'. Avoid using 'this' in templates.`), Reflect.get(e, t, n);
			} }) : e;
			y = es(l.call(t, e, u, process.env.NODE_ENV === "production" ? d : /* @__PURE__ */ nn(d), p, f, m)), b = s;
		} else {
			let e = t;
			process.env.NODE_ENV !== "production" && s === d && Da(), y = es(e.length > 1 ? e(process.env.NODE_ENV === "production" ? d : /* @__PURE__ */ nn(d), process.env.NODE_ENV === "production" ? {
				attrs: s,
				slots: o,
				emit: c
			} : {
				get attrs() {
					return Da(), /* @__PURE__ */ nn(s);
				},
				slots: o,
				emit: c
			}) : e(process.env.NODE_ENV === "production" ? d : /* @__PURE__ */ nn(d), null)), b = t.props ? s : ja(s);
		}
	} catch (t) {
		Io.length = 0, Vn(t, e, 1), y = G(Po);
	}
	let x = y, S;
	if (process.env.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([x, S] = ka(y)), b && _ !== !1) {
		let e = Object.keys(b), { shapeFlag: t } = x;
		if (e.length) {
			if (t & 7) a && e.some(g) && (b = Ma(b, a)), x = Zo(x, b, !1, !0);
			else if (process.env.NODE_ENV !== "production" && !Ea && x.type !== Po) {
				let e = Object.keys(s), t = [], n = [];
				for (let r = 0, i = e.length; r < i; r++) {
					let i = e[r];
					h(i) ? g(i) || t.push(i[2].toLowerCase() + i.slice(3)) : n.push(i);
				}
				n.length && R(`Extraneous non-props attributes (${n.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`), t.length && R(`Extraneous non-emits event listeners (${t.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
			}
		}
	}
	if (n.dirs && (process.env.NODE_ENV !== "production" && !Na(x) && R("Runtime directive used on component with non-element root node. The directives will not function as intended."), x = Zo(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition) {
		let e = Zr(x.type) && ui(x) || x;
		process.env.NODE_ENV !== "production" && !Na(e) && R("Component inside <Transition> renders non-element root node that cannot be animated."), di(e, n.transition);
	}
	return process.env.NODE_ENV !== "production" && S ? S(x) : y = x, Lr(v), y;
}
var ka = (e) => {
	let t = e.children, n = e.dynamicChildren, r = Aa(t, !1);
	if (!r) return [e, void 0];
	if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048) return ka(r);
	let i = t.indexOf(r), a = n ? n.indexOf(r) : -1;
	return [es(r), (r) => {
		t[i] = r, n && (a > -1 ? n[a] = r : r.patchFlag > 0 && (e.dynamicChildren = [...n, r]));
	}];
};
function Aa(e, t = !0) {
	let n;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (Uo(i)) {
			if (i.type !== Po || i.children === "v-if") {
				if (n) return;
				if (n = i, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048) return Aa(n.children);
			}
		} else return;
	}
	return n;
}
var ja = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || h(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Ma = (e, t) => {
	let n = {};
	for (let r in e) (!g(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
}, Na = (e) => e.shapeFlag & 7 || e.type === Po;
function Pa(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (process.env.NODE_ENV !== "production" && (i || s) && sr || t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Fa(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Ia(o, r, n) && !Ta(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Fa(r, o, l) : !!o;
	return !1;
}
function Fa(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Ia(t, e, a) && !Ta(n, a)) return !0;
	}
	return !1;
}
function Ia(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && O(r) && O(i) ? !je(r, i) : r !== i;
}
function La({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Ra = {}, za = () => Object.create(Ra), Ba = (e) => Object.getPrototypeOf(e) === Ra;
function Va(e, t, n, r = !1) {
	let i = {}, a = za();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Wa(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	process.env.NODE_ENV !== "production" && Xa(t || {}, i, e), e.props = n ? r ? i : /* @__PURE__ */ en(i) : e.type.props ? i : a, e.attrs = a;
}
function Ha(e) {
	for (; e;) {
		if (e.type.__hmrId) return !0;
		e = e.parent;
	}
}
function Ua(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ L(i), [c] = e.propsOptions, l = !1;
	if (!(process.env.NODE_ENV !== "production" && Ha(e)) && (r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Ta(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (b(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = ae(o);
						i[t] = Ga(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Wa(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !b(t, a) && ((r = P(a)) === a || !b(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ga(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !b(t, e)) && (delete a[e], l = !0);
	}
	l && gt(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Xa(t || {}, i, e);
}
function Wa(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, s;
	if (t) for (let c in t) {
		if (te(c)) continue;
		let l = t[c], u;
		i && b(i, u = ae(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : Ta(e.emitsOptions, c) || (!(c in r) || l !== r[c]) && (r[c] = l, o = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ L(n), r = s || d;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = Ga(i, t, s, r[s], e, !b(r, s));
		}
	}
	return o;
}
function Ga(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = b(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && T(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = fs(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === P(n)) && (r = !0));
	}
	return r;
}
var Ka = /* @__PURE__ */ new WeakMap();
function qa(e, t, n = !1) {
	let r = n ? Ka : t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, s = [], c = !1;
	if (!T(e)) {
		let r = (e) => {
			c = !0;
			let [n, r] = qa(e, t, !0);
			_(o, n), r && s.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!a && !c) return O(e) && r.set(e, f), f;
	if (x(a)) for (let e = 0; e < a.length; e++) {
		process.env.NODE_ENV !== "production" && !E(a[e]) && R("props must be strings when using array syntax.", a[e]);
		let t = ae(a[e]);
		Ja(t) && (o[t] = d);
	}
	else if (a) {
		process.env.NODE_ENV !== "production" && !O(a) && R("invalid props options", a);
		for (let e in a) {
			let t = ae(e);
			if (Ja(t)) {
				let n = a[e], r = o[t] = x(n) || T(n) ? { type: n } : _({}, n), i = r.type, c = !1, l = !0;
				if (x(i)) for (let e = 0; e < i.length; ++e) {
					let t = i[e], n = T(t) && t.name;
					if (n === "Boolean") {
						c = !0;
						break;
					}
					n === "String" && (l = !1);
				}
				else c = T(i) && i.name === "Boolean";
				r[0] = c, r[1] = l, (c || b(r, "default")) && s.push(t);
			}
		}
	}
	let l = [o, s];
	return O(e) && r.set(e, l), l;
}
function Ja(e) {
	return e[0] !== "$" && !te(e) || (process.env.NODE_ENV !== "production" && R(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ya(e) {
	return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Xa(e, t, n) {
	let r = /* @__PURE__ */ L(t), i = n.propsOptions[0], a = Object.keys(e).map((e) => ae(e));
	for (let e in i) {
		let t = i[e];
		t != null && Za(e, r[e], t, process.env.NODE_ENV === "production" ? r : /* @__PURE__ */ nn(r), !a.includes(e));
	}
}
function Za(e, t, n, r, i) {
	let { type: a, required: o, validator: s, skipCheck: c } = n;
	if (o && i) {
		R("Missing required prop: \"" + e + "\"");
		return;
	}
	if (!(t == null && !o)) {
		if (a != null && a !== !0 && !c) {
			let n = !1, r = x(a) ? a : [a], i = [];
			for (let e = 0; e < r.length && !n; e++) {
				let { valid: a, expectedType: o } = $a(t, r[e]);
				i.push(o || ""), n = a;
			}
			if (!n) {
				R(eo(e, t, i));
				return;
			}
		}
		s && !s(t, r) && R("Invalid prop: custom validator check failed for prop \"" + e + "\".");
	}
}
var Qa = /* @__PURE__ */ u("String,Number,Boolean,Function,Symbol,BigInt");
function $a(e, t) {
	let n, r = Ya(t);
	if (r === "null") n = e === null;
	else if (Qa(r)) {
		let i = typeof e;
		n = i === r.toLowerCase(), !n && i === "object" && (n = e instanceof t);
	} else n = r === "Object" ? O(e) : r === "Array" ? x(e) : e instanceof t;
	return {
		valid: n,
		expectedType: r
	};
}
function eo(e, t, n) {
	if (n.length === 0) return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
	let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(se).join(" | ")}`, i = n[0], a = M(t), o = to(t, i), s = to(t, a);
	return n.length === 1 && no(i) && ro(i, a) && (r += ` with value ${o}`), r += `, got ${a} `, no(a) && (r += `with value ${s}.`), r;
}
function to(e, t) {
	return D(e) ? e.toString() : t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function no(e) {
	return [
		"string",
		"number",
		"boolean"
	].some((t) => e.toLowerCase() === t);
}
function ro(...e) {
	return e.every((e) => {
		let t = e.toLowerCase();
		return t !== "boolean" && t !== "symbol";
	});
}
var io = (e) => e === "_" || e === "_ctx" || e === "$stable", ao = (e) => x(e) ? e.map(es) : [es(e)], oo = (e, t, n) => {
	if (t._n) return t;
	let r = z((...r) => (process.env.NODE_ENV !== "production" && cs && !(n === null && Fr) && !(n && n.root !== cs.root) && R(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), ao(t(...r))), n);
	return r._c = !1, r;
}, so = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (io(n)) continue;
		let i = e[n];
		if (T(i)) t[n] = oo(n, i, r);
		else if (i != null) {
			process.env.NODE_ENV !== "production" && R(`Non-function value encountered for slot "${n}". Prefer function slots for better performance.`);
			let e = ao(i);
			t[n] = () => e;
		}
	}
}, co = (e, t) => {
	process.env.NODE_ENV !== "production" && !xi(e.vnode) && R("Non-function value encountered for default slot. Prefer function slots for better performance.");
	let n = ao(t);
	e.slots.default = () => n;
}, lo = (e, t, n) => {
	for (let r in t) (n || !io(r)) && (e[r] = t[r]);
}, uo = (e, t, n) => {
	let r = e.slots = za();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (lo(r, t, n), n && de(r, "_", e, !0)) : so(t, r);
	} else t && co(e, t);
}, fo = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, o = d;
	if (r.shapeFlag & 32) {
		let r = t._;
		r ? process.env.NODE_ENV !== "production" && sr ? (lo(i, t, n), gt(e, "set", "$slots")) : n && r === 1 ? a = !1 : lo(i, t, n) : (a = !t.$stable, so(t, i)), o = t;
	} else t && (co(e, t), o = { default: 1 });
	if (a) for (let e in i) !io(e) && o[e] == null && delete i[e];
}, po, mo;
function ho(e, t) {
	e.appContext.config.performance && _o() && mo.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && jr(e, t, _o() ? mo.now() : Date.now());
}
function go(e, t) {
	if (e.appContext.config.performance && _o()) {
		let n = `vue-${t}-${e.uid}`, r = n + ":end", i = `<${As(e, e.type)}> ${t}`;
		mo.mark(r), mo.measure(i, n, r), mo.clearMeasures(i), mo.clearMarks(n), mo.clearMarks(r);
	}
	process.env.NODE_ENV !== "production" && Mr(e, t, _o() ? mo.now() : Date.now());
}
function _o() {
	return po === void 0 && (typeof window < "u" && window.performance ? (po = !0, mo = window.performance) : po = !1), po;
}
function vo() {
	let e = [];
	if (process.env.NODE_ENV !== "production" && e.length) {
		let t = e.length > 1;
		console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
	}
}
var yo = jo;
function bo(e) {
	return xo(e);
}
function xo(e, t) {
	vo();
	let n = he();
	n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Cr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: l, setElementText: u, parentNode: m, nextSibling: h, setScopeId: g = p, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = process.env.NODE_ENV !== "production" && sr ? !1 : !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Wo(e, t) && (r = ge(e), ce(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case No:
				y(e, t, n, r);
				break;
			case Po:
				b(e, t, n, r);
				break;
			case Fo:
				e == null ? x(t, n, r, o) : process.env.NODE_ENV !== "production" && S(e, t, n, o);
				break;
			case Mo:
				M(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? T(e, t, n, r, i, a, o, s, c) : d & 6 ? ee(e, t, n, r, i, a, o, s, c) : d & 64 || d & 128 ? l.process(e, t, n, r, i, a, o, s, c, ye) : process.env.NODE_ENV !== "production" && R("Invalid VNode type:", l, `(${typeof l})`);
		}
		u != null && i ? vi(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && vi(e.ref, null, a, e, !0);
	}, y = (e, t, n, i) => {
		if (e == null) r(t.el = s(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && l(n, t.children);
		}
	}, b = (e, t, n, i) => {
		e == null ? r(t.el = c(t.children || ""), n, i) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = (e, t, n, r) => {
		if (t.children !== e.children) {
			let i = h(e.anchor);
			w(e), [t.el, t.anchor] = _(t.children, n, i, r);
		} else t.el = e.el, t.anchor = e.anchor;
	}, C = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = h(e), r(e, n, i), e = a;
		r(t, n, i);
	}, w = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, T = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) E(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), k(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, E = (e, t, n, i, s, c, l, d) => {
		let f, p, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (f = e.el = o(e.type, c, m && m.is, m), h & 8 ? u(f, e.children) : h & 16 && O(e.children, f, null, i, s, So(e, c), l, d), _ && Br(e, null, i, "created"), D(f, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !te(e) && a(f, e, null, m[e], c, i);
			"value" in m && a(f, "value", null, m.value, c), (p = m.onVnodeBeforeMount) && is(p, i, e);
		}
		process.env.NODE_ENV !== "production" && (de(f, "__vnode", e, !0), de(f, "__vueParentComponent", i, !0)), _ && Br(e, null, i, "beforeMount");
		let v = wo(s, g);
		if (v && g.beforeEnter(f), r(f, t, n), (p = m && m.onVnodeMounted) || v || _) {
			let t = process.env.NODE_ENV !== "production" && sr;
			yo(() => {
				let n;
				process.env.NODE_ENV !== "production" && (n = cr(t));
				try {
					p && is(p, i, e), v && g.enter(f), _ && Br(e, null, i, "mounted");
				} finally {
					process.env.NODE_ENV !== "production" && cr(n);
				}
			}, s);
		}
	}, D = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (process.env.NODE_ENV !== "production" && n.patchFlag > 0 && n.patchFlag & 2048 && (n = Aa(n.children) || n), t === n || Ao(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				D(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, O = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? ts(e[l]) : es(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, k = (e, t, n, r, i, o, s) => {
		let c = t.el = e.el;
		process.env.NODE_ENV !== "production" && (c.__vnode = t);
		let { patchFlag: l, dynamicChildren: f, dirs: p } = t;
		l |= e.patchFlag & 16;
		let m = e.props || d, h = t.props || d, g;
		if (n && Co(n, !1), (g = h.onVnodeBeforeUpdate) && is(g, n, t, e), p && Br(t, e, n, "beforeUpdate"), n && Co(n, !0), (process.env.NODE_ENV !== "production" && sr || f && (!e.dynamicChildren || e.dynamicChildren.length !== f.length)) && (l = 0, s = !1, f = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && u(c, ""), f ? (A(e.dynamicChildren, f, c, n, r, So(t, i), o), process.env.NODE_ENV !== "production" && To(e, t)) : s || ae(e, t, c, null, n, r, So(t, i), o, !1), l > 0) {
			if (l & 16) j(c, m, h, n, i);
			else if (l & 2 && m.class !== h.class && a(c, "class", null, h.class, i), l & 4 && a(c, "style", m.style, h.style, i), l & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = m[r], s = h[r];
					(s !== o || r === "value") && a(c, r, o, s, i, n);
				}
			}
			l & 1 && e.children !== t.children && u(c, t.children);
		} else !s && f == null && j(c, m, h, n, i);
		((g = h.onVnodeUpdated) || p) && yo(() => {
			g && is(g, n, t, e), p && Br(t, e, n, "updated");
		}, r);
	}, A = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === Mo || !Wo(c, l) || c.shapeFlag & 198) ? m(c.el) : n;
			v(c, l, u, null, r, i, a, o, !0);
		}
	}, j = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== d) for (let o in t) !te(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (te(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, M = (e, t, n, i, a, o, c, l, u) => {
		let d = t.el = e ? e.el : s(""), f = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		process.env.NODE_ENV !== "production" && (sr || p & 2048) && (p = 0, u = !1, m = null), h && (l = l ? l.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), O(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (A(e.dynamicChildren, m, n, a, o, c, l), process.env.NODE_ENV === "production" ? (t.key != null || a && t === a.subTree) && To(e, t, !0) : To(e, t)) : ae(e, t, n, f, a, o, c, l, u);
	}, ee = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : N(t, n, r, i, a, o, c) : ne(e, t, c);
	}, N = (e, t, n, r, i, a, o) => {
		let s = e.component = ss(e, r, i);
		if (process.env.NODE_ENV !== "production" && s.type.__hmrId && dr(s), process.env.NODE_ENV !== "production" && (kn(e), ho(s, "mount")), xi(e) && (s.ctx.renderer = ye), process.env.NODE_ENV !== "production" && ho(s, "init"), vs(s, !1, o), process.env.NODE_ENV !== "production" && go(s, "init"), process.env.NODE_ENV !== "production" && sr && (e.el = null), s.asyncDep) {
			if (i && i.registerDep(s, re, o), !e.el) {
				let r = s.subTree = G(Po);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else re(s, e, t, n, i, a, o);
		process.env.NODE_ENV !== "production" && (An(), go(s, "mount"));
	}, ne = (e, t, n) => {
		let r = t.component = e.component;
		if (Pa(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				process.env.NODE_ENV !== "production" && kn(t), ie(r, t, n), process.env.NODE_ENV !== "production" && An();
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, r.vnode = t;
	}, re = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Do(e);
					if (n) {
						t && (t.el = c.el, ie(e, t, o)), n.asyncDep.then(() => {
							yo(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				process.env.NODE_ENV !== "production" && kn(t || e.vnode), Co(e, !1), t ? (t.el = c.el, ie(e, t, o)) : t = c, n && ue(n), (d = t.props && t.props.onVnodeBeforeUpdate) && is(d, s, t, c), Co(e, !0), process.env.NODE_ENV !== "production" && ho(e, "render");
				let f = Oa(e);
				process.env.NODE_ENV !== "production" && go(e, "render");
				let p = e.subTree;
				e.subTree = f, process.env.NODE_ENV !== "production" && ho(e, "patch"), v(p, f, m(p.el), ge(p), e, i, a), process.env.NODE_ENV !== "production" && go(e, "patch"), t.el = f.el, u === null && La(e, f.el), r && yo(r, i), (d = t.props && t.props.onVnodeUpdated) && yo(() => is(d, s, t, c), i), process.env.NODE_ENV !== "production" && Dr(e), process.env.NODE_ENV !== "production" && An();
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = bi(t);
				if (Co(e, !1), l && ue(l), !m && (o = c && c.onVnodeBeforeMount) && is(o, d, t), Co(e, !0), s && F) {
					let t = () => {
						process.env.NODE_ENV !== "production" && ho(e, "render"), e.subTree = Oa(e), process.env.NODE_ENV !== "production" && go(e, "render"), process.env.NODE_ENV !== "production" && ho(e, "hydrate"), F(s, e.subTree, e, i, null), process.env.NODE_ENV !== "production" && go(e, "hydrate");
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0), process.env.NODE_ENV !== "production" && ho(e, "render");
					let o = e.subTree = Oa(e);
					process.env.NODE_ENV !== "production" && go(e, "render"), process.env.NODE_ENV !== "production" && ho(e, "patch"), v(null, o, n, r, e, i, a), process.env.NODE_ENV !== "production" && go(e, "patch"), t.el = o.el;
				}
				if (u && yo(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					yo(() => is(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && bi(d.vnode) && d.vnode.shapeFlag & 256) && e.a && yo(e.a, i), e.isMounted = !0, process.env.NODE_ENV !== "production" && Er(e), t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ue(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => $n(u), Co(e, !0), process.env.NODE_ENV !== "production" && (c.onTrack = e.rtc ? (t) => ue(e.rtc, t) : void 0, c.onTrigger = e.rtg ? (t) => ue(e.rtg, t) : void 0), l();
	}, ie = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Ua(e, t.props, r, n), fo(e, t.children, n), it(), nr(e), at();
	}, ae = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, d = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: m } = t;
		if (p > 0) {
			if (p & 128) {
				P(l, f, n, r, i, a, o, s, c);
				return;
			}
			if (p & 256) {
				oe(l, f, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (d & 16 && me(l, i, a), f !== l && u(n, f)) : d & 16 ? m & 16 ? P(l, f, n, r, i, a, o, s, c) : me(l, i, a, !0) : (d & 8 && u(n, ""), m & 16 && O(f, n, r, i, a, o, s, c));
	}, oe = (e, t, n, r, i, a, o, s, c) => {
		e ||= f, t ||= f;
		let l = e.length, u = t.length, d = Math.min(l, u), p;
		for (p = 0; p < d; p++) {
			let r = t[p] = c ? ts(t[p]) : es(t[p]);
			v(e[p], r, n, null, i, a, o, s, c);
		}
		l > u ? me(e, i, a, !0, !1, d) : O(t, n, r, i, a, o, s, c, d);
	}, P = (e, t, n, r, i, a, o, s, c) => {
		let l = 0, u = t.length, d = e.length - 1, p = u - 1;
		for (; l <= d && l <= p;) {
			let r = e[l], u = t[l] = c ? ts(t[l]) : es(t[l]);
			if (Wo(r, u)) v(r, u, n, null, i, a, o, s, c);
			else break;
			l++;
		}
		for (; l <= d && l <= p;) {
			let r = e[d], l = t[p] = c ? ts(t[p]) : es(t[p]);
			if (Wo(r, l)) v(r, l, n, null, i, a, o, s, c);
			else break;
			d--, p--;
		}
		if (l > d) {
			if (l <= p) {
				let e = p + 1, d = e < u ? t[e].el : r;
				for (; l <= p;) v(null, t[l] = c ? ts(t[l]) : es(t[l]), n, d, i, a, o, s, c), l++;
			}
		} else if (l > p) for (; l <= d;) ce(e[l], i, a, !0), l++;
		else {
			let m = l, h = l, g = /* @__PURE__ */ new Map();
			for (l = h; l <= p; l++) {
				let e = t[l] = c ? ts(t[l]) : es(t[l]);
				e.key != null && (process.env.NODE_ENV !== "production" && g.has(e.key) && R("Duplicate keys found during update:", JSON.stringify(e.key), "Make sure keys are unique."), g.set(e.key, l));
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (l = 0; l < b; l++) C[l] = 0;
			for (l = m; l <= d; l++) {
				let r = e[l];
				if (y >= b) {
					ce(r, i, a, !0);
					continue;
				}
				let u;
				if (r.key != null) u = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Wo(r, t[_])) {
					u = _;
					break;
				}
				u === void 0 ? ce(r, i, a, !0) : (C[u - h] = l + 1, u >= S ? S = u : x = !0, v(r, t[u], n, null, i, a, o, s, c), y++);
			}
			let w = x ? Eo(C) : f;
			for (_ = w.length - 1, l = b - 1; l >= 0; l--) {
				let e = h + l, d = t[e], f = t[e + 1], p = e + 1 < u ? f.el || ko(f) : r;
				C[l] === 0 ? v(null, d, n, p, i, a, o, s, c) : x && (_ < 0 || l !== w[_] ? se(d, n, p, 2) : _--);
			}
		}
	}, se = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			se(e.component.subTree, t, n, a);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, a);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, ye);
			return;
		}
		if (c === Mo) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) se(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === Fo) {
			C(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) {
			if (a === 0) l.persisted && !s[Qr] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), yo(() => l.enter(s), o));
			else {
				let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? i(s) : r(s, t, n);
				}, d = () => {
					let e = s._isLeaving || !!s[Qr];
					s._isLeaving && s[Qr](!0), l.persisted && !e ? u() : a(s, () => {
						u(), c && c();
					});
				};
				o ? o(s, u, d) : d();
			}
		} else r(s, t, n);
	}, ce = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (it(), vi(s, null, n, e, !0), at()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !bi(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && is(_, t, e), u & 6) pe(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Br(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, ye, r) : l && !l.hasOnce && (a !== Mo || d > 0 && d & 64) ? me(l, t, n, !1, !0) : (a === Mo && d & 384 || !i && u & 16) && me(c, t, n), r && le(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && yo(() => {
			_ && is(_, t, e), h && Br(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, le = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === Mo) {
			process.env.NODE_ENV !== "production" && e.patchFlag > 0 && e.patchFlag & 2048 && a && !a.persisted ? e.children.forEach((e) => {
				e.type === Po ? i(e.el) : le(e);
			}) : fe(n, r);
			return;
		}
		if (t === Fo) {
			w(e);
			return;
		}
		let o = () => {
			i(n), a && !a.persisted && a.afterLeave && a.afterLeave();
		};
		if (e.shapeFlag & 1 && a && !a.persisted) {
			let { leave: t, delayLeave: r } = a, i = () => t(n, o);
			r ? r(e.el, o, i) : i();
		} else o();
	}, fe = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), i(e), e = n;
		i(t);
	}, pe = (e, t, n) => {
		process.env.NODE_ENV !== "production" && e.type.__hmrId && fr(e);
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Oo(c), Oo(l), r && ue(r), i.stop(), a && (a.flags |= 8, ce(o, e, t, n)), s && yo(s, t), yo(() => {
			e.isUnmounted = !0;
		}, t), process.env.NODE_ENV !== "production" && kr(e);
	}, me = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) ce(e[o], t, n, r, i);
	}, ge = (e) => {
		if (e.shapeFlag & 6) return ge(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Xr];
		return n ? h(n) : t;
	}, _e = !1, ve = (e, t, n) => {
		let r;
		e == null ? t._vnode && (ce(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, _e ||= (_e = !0, nr(r), rr(), !1);
	}, ye = {
		p: v,
		um: ce,
		m: se,
		r: le,
		mt: N,
		mc: O,
		pc: ae,
		pbc: A,
		n: ge,
		o: e
	}, be, F;
	return t && ([be, F] = t(ye)), {
		render: ve,
		hydrate: be,
		createApp: ya(ve, be)
	};
}
function So({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Co({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wo(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function To(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (x(r) && x(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ts(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && To(t, a)), a.type === No && (a.patchFlag === -1 && (a = i[e] = ts(a)), a.el = t.el), a.type === Po && !a.el && (a.el = t.el), process.env.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
	}
}
function Eo(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Do(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Do(t);
}
function Oo(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ko(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? ko(t.subTree) : null;
}
var Ao = (e) => e.__isSuspense;
function jo(e, t) {
	t && t.pendingBranch ? x(e) ? t.effects.push(...e) : t.effects.push(e) : tr(e);
}
var Mo = /* @__PURE__ */ Symbol.for("v-fgt"), No = /* @__PURE__ */ Symbol.for("v-txt"), Po = /* @__PURE__ */ Symbol.for("v-cmt"), Fo = /* @__PURE__ */ Symbol.for("v-stc"), Io = [], Lo = null;
function H(e = !1) {
	Io.push(Lo = e ? null : []);
}
function Ro() {
	Io.pop(), Lo = Io[Io.length - 1] || null;
}
var zo = 1;
function Bo(e, t = !1) {
	zo += e, e < 0 && Lo && t && (Lo.hasOnce = !0);
}
function Vo(e) {
	return e.dynamicChildren = zo > 0 ? Lo || f : null, Ro(), zo > 0 && Lo && Lo.push(e), e;
}
function U(e, t, n, r, i, a) {
	return Vo(W(e, t, n, r, i, a, !0));
}
function Ho(e, t, n, r, i) {
	return Vo(G(e, t, n, r, i, !0));
}
function Uo(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Wo(e, t) {
	if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
		let n = lr.get(t.type);
		if (n && n.has(e.component)) return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
	}
	return e.type === t.type && e.key === t.key;
}
var Go = (...e) => Yo(...e), Ko = ({ key: e }) => e ?? null, qo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : E(e) || /* @__PURE__ */ fn(e) || T(e) ? {
	i: Fr,
	r: e,
	k: t,
	f: !!n
} : e);
function W(e, t = null, n = null, r = 0, i = null, a = e === Mo ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Ko(t),
		ref: t && qo(t),
		scopeId: Ir,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: Fr
	};
	if (s ? (ns(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= E(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && R("VNode created with invalid key (NaN). VNode type:", c.type), process.env.NODE_ENV !== "production" && t && c.shapeFlag & 1) {
		let e = t.innerHTML == null ? t.textContent == null ? null : "textContent" : "innerHTML";
		e && Jo(c.children) && R(`The \`${e}\` prop on <${c.type}> will override its children. Remove either the \`${e}\` prop or the children.`);
	}
	return zo > 0 && !o && Lo && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Lo.push(c), c;
}
function Jo(e) {
	return E(e) ? e !== "" : x(e) ? e.length > 0 : !1;
}
var G = process.env.NODE_ENV === "production" ? Yo : Go;
function Yo(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === Bi) && (process.env.NODE_ENV !== "production" && !e && R(`Invalid vnode type when creating vnode: ${e}.`), e = Po), Uo(e)) {
		let r = Zo(e, t, !0);
		return n && ns(r, n), zo > 0 && !a && Lo && (r.shapeFlag & 6 ? Lo[Lo.indexOf(e)] = r : Lo.push(r)), r.patchFlag = -2, r;
	}
	if (js(e) && (e = e.__vccOpts), t) {
		t = Xo(t);
		let { class: e, style: n } = t;
		e && !E(e) && (t.class = F(e)), O(n) && (/* @__PURE__ */ cn(n) && !x(n) && (n = _({}, n)), t.style = ge(n));
	}
	let o = E(e) ? 1 : Ao(e) ? 128 : Zr(e) ? 64 : O(e) ? 4 : T(e) ? 2 : 0;
	return process.env.NODE_ENV !== "production" && o & 4 && /* @__PURE__ */ cn(e) && (e = /* @__PURE__ */ L(e), R("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", "\nComponent that was made reactive: ", e)), W(e, t, n, r, i, o, a, !0);
}
function Xo(e) {
	return e ? /* @__PURE__ */ cn(e) || Ba(e) ? _({}, e) : e : null;
}
function Zo(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? rs(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Ko(l),
		ref: t && t.ref ? n && a ? x(a) ? a.concat(qo(t)) : [a, qo(t)] : qo(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: process.env.NODE_ENV !== "production" && o === -1 && x(s) ? s.map(Qo) : s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== Mo ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Zo(e.ssContent),
		ssFallback: e.ssFallback && Zo(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && di(u, c.clone(u)), u;
}
function Qo(e) {
	let t = Zo(e);
	return x(e.children) && (t.children = e.children.map(Qo)), t;
}
function K(e = " ", t = 0) {
	return G(No, null, e, t);
}
function $o(e, t) {
	let n = G(Fo, null, e);
	return n.staticCount = t, n;
}
function q(e = "", t = !1) {
	return t ? (H(), Ho(Po, null, e)) : G(Po, null, e);
}
function es(e) {
	return e == null || typeof e == "boolean" ? G(Po) : x(e) ? G(Mo, null, e.slice()) : Uo(e) ? ts(e) : G(No, null, String(e));
}
function ts(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zo(e);
}
function ns(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (x(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), ns(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !Ba(t) ? t._ctx = Fr : r === 3 && Fr && (Fr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (T(t)) {
		if (r & 65) {
			ns(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Fr
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [K(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function rs(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = F([t.class, r.class]));
		else if (e === "style") t.style = ge([t.style, r.style]);
		else if (h(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(x(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !g(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function is(e, t, n, r = null) {
	Bn(e, t, 7, [n, r]);
}
var as = _a(), os = 0;
function ss(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || as, a = {
		uid: os++,
		vnode: e,
		type: r,
		parent: t,
		appContext: i,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new ze(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(i.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: qa(r, i),
		emitsOptions: wa(r, i),
		emit: null,
		emitted: null,
		propsDefaults: d,
		inheritAttrs: r.inheritAttrs,
		ctx: d,
		data: d,
		props: d,
		attrs: d,
		slots: d,
		refs: d,
		setupState: d,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return a.ctx = process.env.NODE_ENV === "production" ? { _: a } : Zi(a), a.root = t ? t.root : a, a.emit = Sa.bind(null, a), e.ce && e.ce(a), a;
}
var cs = null, ls = () => cs || Fr, us, ds;
{
	let e = he(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	us = t("__VUE_INSTANCE_SETTERS__", (e) => cs = e), ds = t("__VUE_SSR_SETTERS__", (e) => _s = e);
}
var fs = (e) => {
	let t = cs;
	return us(e), e.scope.on(), () => {
		e.scope.off(), us(t);
	};
}, ps = () => {
	cs && cs.scope.off(), us(null);
}, ms = /* @__PURE__ */ u("slot,component");
function hs(e, { isNativeTag: t }) {
	(ms(e) || t(e)) && R("Do not use built-in or reserved HTML elements as component id: " + e);
}
function gs(e) {
	return e.vnode.shapeFlag & 4;
}
var _s = !1;
function vs(e, t = !1, n = !1) {
	t && ds(t);
	let { props: r, children: i } = e.vnode, a = gs(e);
	Va(e, r, a, t), uo(e, i, n || t);
	let o = a ? ys(e, t) : void 0;
	return t && ds(!1), o;
}
function ys(e, t) {
	let n = e.type;
	if (process.env.NODE_ENV !== "production") {
		if (n.name && hs(n.name, e.appContext.config), n.components) {
			let t = Object.keys(n.components);
			for (let n = 0; n < t.length; n++) hs(t[n], e.appContext.config);
		}
		if (n.directives) {
			let e = Object.keys(n.directives);
			for (let t = 0; t < e.length; t++) Rr(e[t]);
		}
		n.compilerOptions && xs() && R("\"compilerOptions\" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.");
	}
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Xi), process.env.NODE_ENV !== "production" && Qi(e);
	let { setup: r } = n;
	if (r) {
		it();
		let i = e.setupContext = r.length > 1 ? Ts(e) : null, a = fs(e), o = zn(r, e, 0, [process.env.NODE_ENV === "production" ? e.props : /* @__PURE__ */ nn(e.props), i]), s = k(o);
		if (at(), a(), (s || e.sp) && !bi(e) && mi(e), s) {
			if (o.then(ps, ps), t) return o.then((n) => {
				ds(!0);
				try {
					bs(e, n, t);
				} finally {
					ds(!1);
				}
			}).catch((t) => {
				Vn(t, e, 0);
			});
			e.asyncDep = o, process.env.NODE_ENV !== "production" && !e.suspense && R(`Component <${As(e, n)}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
		} else bs(e, o, t);
	} else Ss(e, t);
}
function bs(e, t, n) {
	T(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : O(t) ? (process.env.NODE_ENV !== "production" && Uo(t) && R("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = yn(t), process.env.NODE_ENV !== "production" && $i(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && R(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Ss(e, n);
}
var xs = () => !0;
function Ss(e, t, n) {
	let r = e.type;
	e.render ||= r.render || p;
	{
		let t = fs(e);
		it();
		try {
			ra(e);
		} finally {
			at(), t();
		}
	}
	process.env.NODE_ENV !== "production" && !r.render && e.render === p && !t && (r.template ? R("Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\".") : R("Component is missing template or render function: ", r));
}
var Cs = process.env.NODE_ENV === "production" ? { get(e, t) {
	return ht(e, "get", ""), e[t];
} } : {
	get(e, t) {
		return Da(), ht(e, "get", ""), e[t];
	},
	set() {
		return R("setupContext.attrs is readonly."), !1;
	},
	deleteProperty() {
		return R("setupContext.attrs is readonly."), !1;
	}
};
function ws(e) {
	return new Proxy(e.slots, { get(t, n) {
		return ht(e, "get", "$slots"), t[n];
	} });
}
function Ts(e) {
	let t = (t) => {
		if (process.env.NODE_ENV !== "production" && (e.exposed && R("expose() should be called only once per setup()."), t != null)) {
			let e = typeof t;
			e === "object" && (x(t) ? e = "array" : /* @__PURE__ */ fn(t) && (e = "ref")), e !== "object" && R(`expose() should be passed a plain object, received ${e}.`);
		}
		e.exposed = t || {};
	};
	if (process.env.NODE_ENV !== "production") {
		let n, r;
		return Object.freeze({
			get attrs() {
				return n ||= new Proxy(e.attrs, Cs);
			},
			get slots() {
				return r ||= ws(e);
			},
			get emit() {
				return (t, ...n) => e.emit(t, ...n);
			},
			expose: t
		});
	}
	return {
		attrs: new Proxy(e.attrs, Cs),
		slots: e.slots,
		emit: e.emit,
		expose: t
	};
}
function Es(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(yn(ln(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in qi) return qi[n](e);
		},
		has(e, t) {
			return t in e || t in qi;
		}
	}) : e.proxy;
}
var Ds = /(?:^|[-_])\w/g, Os = (e) => e.replace(Ds, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function ks(e, t = !0) {
	return T(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function As(e, t, n = !1) {
	let r = ks(t);
	if (!r && t.__file) {
		let e = t.__file.match(/([^/\\]+)\.\w+$/);
		e && (r = e[1]);
	}
	if (!r && e) {
		let n = (e) => {
			for (let n in e) if (e[n] === t) return n;
		};
		r = n(e.components) || e.parent && n(e.parent.type.components) || n(e.appContext.components);
	}
	return r ? Os(r) : n ? "App" : "Anonymous";
}
function js(e) {
	return T(e) && "__vccOpts" in e;
}
var Ms = (e, t) => {
	let n = /* @__PURE__ */ xn(e, t, _s);
	if (process.env.NODE_ENV !== "production") {
		let e = ls();
		e && e.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
	}
	return n;
};
function Ns(e, t, n) {
	try {
		Bo(-1);
		let r = arguments.length;
		return r === 2 ? O(t) && !x(t) ? Uo(t) ? G(e, null, [t]) : G(e, t) : G(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Uo(n) && (n = [n]), G(e, t, n));
	} finally {
		Bo(1);
	}
}
function Ps() {
	if (process.env.NODE_ENV === "production" || typeof window > "u") return;
	let e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, i = {
		__vue_custom_formatter: !0,
		header(t) {
			if (!O(t)) return null;
			if (t.__isVue) return [
				"div",
				e,
				"VueInstance"
			];
			if (/* @__PURE__ */ fn(t)) {
				it();
				let n = t.value;
				return at(), [
					"div",
					{},
					[
						"span",
						e,
						u(t)
					],
					"<",
					s(n),
					">"
				];
			}
			return /* @__PURE__ */ an(t) ? [
				"div",
				{},
				[
					"span",
					e,
					/* @__PURE__ */ sn(t) ? "ShallowReactive" : "Reactive"
				],
				"<",
				s(t),
				`>${/* @__PURE__ */ on(t) ? " (readonly)" : ""}`
			] : /* @__PURE__ */ on(t) ? [
				"div",
				{},
				[
					"span",
					e,
					/* @__PURE__ */ sn(t) ? "ShallowReadonly" : "Readonly"
				],
				"<",
				s(t),
				">"
			] : null;
		},
		hasBody(e) {
			return e && e.__isVue;
		},
		body(e) {
			if (e && e.__isVue) return [
				"div",
				{},
				...a(e.$)
			];
		}
	};
	function a(e) {
		let t = [];
		e.type.props && e.props && t.push(o("props", /* @__PURE__ */ L(e.props))), e.setupState !== d && t.push(o("setup", e.setupState)), e.data !== d && t.push(o("data", /* @__PURE__ */ L(e.data)));
		let n = c(e, "computed");
		n && t.push(o("computed", n));
		let i = c(e, "inject");
		return i && t.push(o("injected", i)), t.push([
			"div",
			{},
			[
				"span",
				{ style: r.style + ";opacity:0.66" },
				"$ (internal): "
			],
			["object", { object: e }]
		]), t;
	}
	function o(e, t) {
		return t = _({}, t), Object.keys(t).length ? [
			"div",
			{ style: "line-height:1.25em;margin-bottom:0.6em" },
			[
				"div",
				{ style: "color:#476582" },
				e
			],
			[
				"div",
				{ style: "padding-left:1.25em" },
				...Object.keys(t).map((e) => [
					"div",
					{},
					[
						"span",
						r,
						e + ": "
					],
					s(t[e], !1)
				])
			]
		] : ["span", {}];
	}
	function s(e, i = !0) {
		return typeof e == "number" ? [
			"span",
			t,
			e
		] : typeof e == "string" ? [
			"span",
			n,
			JSON.stringify(e)
		] : typeof e == "boolean" ? [
			"span",
			r,
			e
		] : O(e) ? ["object", { object: i ? /* @__PURE__ */ L(e) : e }] : [
			"span",
			n,
			String(e)
		];
	}
	function c(e, t) {
		let n = e.type;
		if (T(n)) return;
		let r = {};
		for (let i in e.ctx) l(n, i, t) && (r[i] = e.ctx[i]);
		return r;
	}
	function l(e, t, n) {
		let r = e[n];
		if (x(r) && r.includes(t) || O(r) && t in r || e.extends && l(e.extends, t, n) || e.mixins && e.mixins.some((e) => l(e, t, n))) return !0;
	}
	function u(e) {
		return /* @__PURE__ */ sn(e) ? "ShallowRef" : e.effect ? "ComputedRef" : "Ref";
	}
	window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
var Fs = "3.5.41", Is = process.env.NODE_ENV === "production" ? p : R;
process.env.NODE_ENV, process.env.NODE_ENV;
//#endregion
//#region node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var Ls = void 0, Rs = typeof window < "u" && window.trustedTypes;
if (Rs) try {
	Ls = /* @__PURE__ */ Rs.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {
	process.env.NODE_ENV !== "production" && Is(`Error creating trusted types policy: ${e}`);
}
var zs = Ls ? (e) => Ls.createHTML(e) : (e) => e, Bs = "http://www.w3.org/2000/svg", Vs = "http://www.w3.org/1998/Math/MathML", Hs = typeof document < "u" ? document : null, Us = Hs && /* @__PURE__ */ Hs.createElement("template"), Ws = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Hs.createElementNS(Bs, e) : t === "mathml" ? Hs.createElementNS(Vs, e) : n ? Hs.createElement(e, { is: n }) : Hs.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Hs.createTextNode(e),
	createComment: (e) => Hs.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Hs.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Us.innerHTML = zs(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Us.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Gs = "transition", Ks = "animation", qs = /* @__PURE__ */ Symbol("_vtc"), Js = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, Ys = /* @__PURE__ */ _({}, ni, Js), Xs = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = Ys, e))((e, { slots: t }) => Ns(oi, $s(e), t)), Zs = (e, t = []) => {
	x(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, Qs = (e) => e ? x(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function $s(e) {
	let t = {};
	for (let n in e) n in Js || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: l = o, appearToClass: u = s, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: p = `${n}-leave-to` } = e, m = ec(i), h = m && m[0], g = m && m[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: T = b } = t, E = (e, t, n, r) => {
		e._enterCancelled = r, rc(e, t ? u : s), rc(e, t ? l : o), n && n();
	}, D = (e, t) => {
		e._isLeaving = !1, rc(e, d), rc(e, p), rc(e, f), t && t();
	}, O = (e) => (t, n) => {
		let i = e ? w : y, o = () => E(t, e, n);
		Zs(i, [t, o]), ic(() => {
			rc(t, e ? c : a), nc(t, e ? u : s), Qs(i) || oc(t, r, h, o);
		});
	};
	return _(t, {
		onBeforeEnter(e) {
			Zs(v, [e]), nc(e, a), nc(e, o);
		},
		onBeforeAppear(e) {
			Zs(C, [e]), nc(e, c), nc(e, l);
		},
		onEnter: O(!1),
		onAppear: O(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => D(e, t);
			nc(e, d), e._enterCancelled ? (nc(e, f), uc(e)) : (uc(e), nc(e, f)), ic(() => {
				e._isLeaving && (rc(e, d), nc(e, p), Qs(x) || oc(e, r, g, n));
			}), Zs(x, [e, n]);
		},
		onEnterCancelled(e) {
			E(e, !1, void 0, !0), Zs(b, [e]);
		},
		onAppearCancelled(e) {
			E(e, !0, void 0, !0), Zs(T, [e]);
		},
		onLeaveCancelled(e) {
			D(e), Zs(S, [e]);
		}
	});
}
function ec(e) {
	if (e == null) return null;
	if (O(e)) return [tc(e.enter), tc(e.leave)];
	{
		let t = tc(e);
		return [t, t];
	}
}
function tc(e) {
	let t = pe(e);
	return process.env.NODE_ENV !== "production" && Ln(t, "<transition> explicit duration"), t;
}
function nc(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[qs] || (e[qs] = /* @__PURE__ */ new Set())).add(t);
}
function rc(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[qs];
	n && (n.delete(t), n.size || (e[qs] = void 0));
}
function ic(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var ac = 0;
function oc(e, t, n, r) {
	let i = e._endId = ++ac, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = sc(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function sc(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${Gs}Delay`), a = r(`${Gs}Duration`), o = cc(i, a), s = r(`${Ks}Delay`), c = r(`${Ks}Duration`), l = cc(s, c), u = null, d = 0, f = 0;
	t === Gs ? o > 0 && (u = Gs, d = o, f = a.length) : t === Ks ? l > 0 && (u = Ks, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? Gs : Ks : null, f = u ? u === Gs ? a.length : c.length : 0);
	let p = u === Gs && /\b(?:transform|all)(?:,|$)/.test(r(`${Gs}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function cc(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => lc(t) + lc(e[n])));
}
function lc(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function uc(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function dc(e, t, n) {
	let r = e[qs];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var fc = /* @__PURE__ */ Symbol("_vod"), pc = /* @__PURE__ */ Symbol("_vsh"), mc = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[fc] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : hc(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), hc(e, !0), r.enter(e)) : r.leave(e, () => {
			hc(e, !1);
		}) : hc(e, t));
	},
	beforeUnmount(e, { value: t }) {
		hc(e, t);
	}
};
function hc(e, t) {
	e.style.display = t ? e[fc] : "none", e[pc] = !t;
}
var gc = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "CSS_VAR_TEXT");
function _c(e) {
	let t = ls();
	if (!t) {
		process.env.NODE_ENV !== "production" && Is("useCssVars is called without current active component instance.");
		return;
	}
	let n = t.ut = (n = e(t.proxy)) => {
		Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e) => yc(e, n));
	};
	process.env.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
	let r = () => {
		let r = e(t.proxy);
		t.ce ? yc(t.ce, r) : vc(t.subTree, r), n(r);
	};
	Ai(() => {
		tr(r);
	}), ki(() => {
		Kr(r, p, { flush: "post" });
		let e = new MutationObserver(r);
		e.observe(t.subTree.el.parentNode, { childList: !0 }), Ni(() => e.disconnect());
	});
}
function vc(e, t) {
	if (e.shapeFlag & 128) {
		let n = e.suspense;
		e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
			vc(n.activeBranch, t);
		});
	}
	for (; e.component;) e = e.component.subTree;
	if (e.shapeFlag & 1 && e.el) yc(e.el, t);
	else if (e.type === Mo) e.children.forEach((e) => vc(e, t));
	else if (e.type === Fo) {
		let { el: n, anchor: r } = e;
		for (; n && (yc(n, t), n !== r);) n = n.nextSibling;
	}
}
function yc(e, t) {
	if (e.nodeType === 1) {
		let n = e.style, r = "";
		for (let e in t) {
			let i = Ie(t[e]);
			n.setProperty(`--${e}`, i), r += `--${e}: ${i};`;
		}
		n[gc] = r;
	}
}
var bc = /(?:^|;)\s*display\s*:/;
function xc(e, t, n) {
	let r = e.style, i = E(n), a = !1;
	if (n && !i) {
		if (t) {
			if (E(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? wc(r, t, "");
			}
			else for (let e in t) n[e] ?? wc(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? wc(r, i, "") : Oc(e, i, !E(t) && t ? t[i] : void 0, o) || wc(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[gc];
			e && (n += ";" + e), r.cssText = n, a = bc.test(n);
		}
	} else t && e.removeAttribute("style");
	fc in e && (e[fc] = a ? r.display : "", e[pc] && (r.display = "none"));
}
var Sc = /[^\\];\s*$/, Cc = /\s*!important$/;
function wc(e, t, n) {
	if (x(n)) n.forEach((n) => wc(e, t, n));
	else if (n ??= "", process.env.NODE_ENV !== "production" && Sc.test(n) && Is(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Dc(e, t);
		Cc.test(n) ? e.setProperty(P(r), n.replace(Cc, ""), "important") : e[r] = n;
	}
}
var Tc = [
	"Webkit",
	"Moz",
	"ms"
], Ec = {};
function Dc(e, t) {
	let n = Ec[t];
	if (n) return n;
	let r = ae(t);
	if (r !== "filter" && r in e) return Ec[t] = r;
	r = se(r);
	for (let n = 0; n < Tc.length; n++) {
		let i = Tc[n] + r;
		if (i in e) return Ec[t] = i;
	}
	return t;
}
function Oc(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && E(r) && n === r;
}
var kc = "http://www.w3.org/1999/xlink";
function Ac(e, t, n, r, i, a = Oe(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(kc, t.slice(6, t.length)) : e.setAttributeNS(kc, t, n) : n == null || a && !ke(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : D(n) ? String(n) : n);
}
function jc(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? zs(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = ke(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch (e) {
		process.env.NODE_ENV !== "production" && !o && Is(`Failed setting prop "${t}" on <${a.toLowerCase()}>: value ${n} is invalid.`, e);
	}
	o && e.removeAttribute(i || t);
}
function Mc(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Nc(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Pc = /* @__PURE__ */ Symbol("_vei");
function Fc(e, t, n, r, i = null) {
	let a = e[Pc] || (e[Pc] = {}), o = a[t];
	if (r && o) o.value = process.env.NODE_ENV === "production" ? r : Uc(r, t);
	else {
		let [n, s] = Rc(t);
		r ? Mc(e, n, a[t] = Hc(process.env.NODE_ENV === "production" ? r : Uc(r, t), i), s) : o && (Nc(e, n, o, s), a[t] = void 0);
	}
}
var Ic = /(Once|Passive|Capture)$/, Lc = /^on:?(?:Once|Passive|Capture)$/;
function Rc(e) {
	let t, n;
	for (; (n = e.match(Ic)) && !Lc.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : P(e.slice(2)), t];
}
var zc = 0, Bc = /* @__PURE__ */ Promise.resolve(), Vc = () => zc ||= (Bc.then(() => zc = 0), Date.now());
function Hc(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (x(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && Bn(e, t, 5, a);
			}
		} else Bn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Vc(), n;
}
function Uc(e, t) {
	return T(e) || x(e) ? e : (Is(`Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`), p);
}
var Wc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Gc = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? dc(e, r, o) : t === "style" ? xc(e, n, r) : h(t) ? g(t) || Fc(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Kc(e, t, r, o)) ? (jc(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ac(e, t, r, o, a, t !== "value")) : e._isVueCE && (qc(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !E(r))) ? jc(e, ae(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ac(e, t, r, o));
};
function Kc(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Wc(t) && T(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Wc(t) && E(n) ? !1 : t in e;
}
function qc(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = ae(t);
	return Array.isArray(n) ? n.some((e) => ae(e) === r) : Object.keys(n).some((e) => ae(e) === r);
}
var Jc = /* @__PURE__ */ new WeakMap(), Yc = /* @__PURE__ */ new WeakMap(), Xc = /* @__PURE__ */ Symbol("_moveCb"), Zc = /* @__PURE__ */ Symbol("_enterCb"), Qc = /* @__PURE__ */ ((e) => (delete e.props.mode, e))({
	name: "TransitionGroup",
	props: /* @__PURE__ */ _({}, Ys, {
		tag: String,
		moveClass: String
	}),
	setup(e, { slots: t }) {
		let n = ls(), r = ei(), i, a;
		return ji(() => {
			if (!i.length) return;
			let t = e.moveClass || `${e.name || "v"}-move`;
			if (!rl(i[0].el, n.vnode.el, t)) {
				i = [];
				return;
			}
			i.forEach($c), i.forEach(el);
			let r = i.filter(tl);
			uc(n.vnode.el), r.forEach((e) => {
				let n = e.el, r = n.style;
				nc(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
				let i = n[Xc] = (e) => {
					e && e.target !== n || (!e || e.propertyName.endsWith("transform")) && (n.removeEventListener("transitionend", i), n[Xc] = null, rc(n, t));
				};
				n.addEventListener("transitionend", i);
			}), i = [];
		}), () => {
			let o = /* @__PURE__ */ L(e), s = $s(o), c = o.tag || Mo;
			if (i = [], a) for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.el && t.el instanceof Element && !t.el[pc] && (i.push(t), di(t, ci(t, s, r, n)), Jc.set(t, nl(t.el)));
			}
			a = t.default ? fi(t.default()) : [];
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.key == null ? process.env.NODE_ENV !== "production" && t.type !== No && Is("<TransitionGroup> children must be keyed.") : di(t, ci(t, s, r, n));
			}
			return G(c, null, a);
		};
	}
});
function $c(e) {
	let t = e.el;
	t[Xc] && t[Xc](), t[Zc] && t[Zc]();
}
function el(e) {
	Yc.set(e, nl(e.el));
}
function tl(e) {
	let t = Jc.get(e), n = Yc.get(e), r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		let t = e.el, n = t.style, a = t.getBoundingClientRect(), o = 1, s = 1;
		return t.offsetWidth && (o = a.width / t.offsetWidth), t.offsetHeight && (s = a.height / t.offsetHeight), (!Number.isFinite(o) || o === 0) && (o = 1), (!Number.isFinite(s) || s === 0) && (s = 1), Math.abs(o - 1) < .01 && (o = 1), Math.abs(s - 1) < .01 && (s = 1), n.transform = n.webkitTransform = `translate(${r / o}px,${i / s}px)`, n.transitionDuration = "0s", e;
	}
}
function nl(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top
	};
}
function rl(e, t, n) {
	let r = e.cloneNode(), i = e[qs];
	i && i.forEach((e) => {
		e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
	}), n.split(/\s+/).forEach((e) => e && r.classList.add(e)), r.style.display = "none";
	let a = t.nodeType === 1 ? t : t.parentNode;
	a.appendChild(r);
	let { hasTransform: o } = sc(r);
	return a.removeChild(r), o;
}
var il = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return x(t) ? (e) => ue(t, e) : t;
};
function al(e) {
	e.target.composing = !0;
}
function ol(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var sl = /* @__PURE__ */ Symbol("_assign"), cl = /* @__PURE__ */ Symbol("_initialValue");
function ll(e, t, n) {
	return t && (e = e.trim()), n && (e = fe(e)), e;
}
var ul = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[cl] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[cl] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[sl] = il(i);
		let a = r || i.props && i.props.type === "number";
		Mc(e, t ? "change" : "input", (t) => {
			t.target.composing || e[sl](ll(e.value, n, a));
		}), (n || a) && Mc(e, "change", () => {
			e.value = ll(e.value, n, a);
		}), t || (Mc(e, "compositionstart", al), Mc(e, "compositionend", ol), Mc(e, "change", ol));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[cl];
		delete e[cl], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[sl](ll(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[sl] = il(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? fe(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, dl = {
	deep: !0,
	created(e, t, n) {
		e[sl] = il(n), Mc(e, "change", () => {
			let t = e._modelValue, n = gl(e), r = e.checked, i = e[sl];
			if (x(t)) {
				let e = Me(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (C(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(_l(e, r));
		});
	},
	mounted: fl,
	beforeUpdate(e, t, n) {
		e[sl] = il(n), fl(e, t, n);
	}
};
function fl(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (x(t)) i = Me(t, r.props.value) > -1;
	else if (C(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = je(t, _l(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var pl = {
	created(e, { value: t }, n) {
		e.checked = je(t, n.props.value), e[sl] = il(n), Mc(e, "change", () => {
			e[sl](gl(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[sl] = il(r), t !== n && (e.checked = je(t, r.props.value));
	}
}, ml = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Mc(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? fe(gl(e)) : gl(e));
			e[sl](e.multiple ? C(e._modelValue) ? new Set(t) : t : t[0]), e._assigning = !0, Zn(() => {
				e._assigning = !1;
			});
		}), e[sl] = il(r);
	},
	mounted(e, { value: t }) {
		hl(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[sl] = il(n);
	},
	updated(e, { value: t }) {
		e._assigning || hl(e, t);
	}
};
function hl(e, t) {
	let n = e.multiple, r = x(t);
	if (n && !r && !C(t)) {
		process.env.NODE_ENV !== "production" && Is(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`);
		return;
	}
	for (let i = 0, a = e.options.length; i < a; i++) {
		let a = e.options[i], o = gl(a);
		if (n) {
			if (r) {
				let e = typeof o;
				a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : Me(t, o) > -1;
			} else a.selected = t.has(o);
		} else if (je(gl(a), t)) {
			e.selectedIndex !== i && (e.selectedIndex = i);
			return;
		}
	}
	!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function gl(e) {
	return "_value" in e ? e._value : e.value;
}
function _l(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var vl = {
	created(e, t, n) {
		bl(e, t, n, null, "created");
	},
	mounted(e, t, n) {
		bl(e, t, n, null, "mounted");
	},
	beforeUpdate(e, t, n, r) {
		bl(e, t, n, r, "beforeUpdate");
	},
	updated(e, t, n, r) {
		bl(e, t, n, r, "updated");
	}
};
function yl(e, t) {
	switch (e) {
		case "SELECT": return ml;
		case "TEXTAREA": return ul;
		default: switch (t) {
			case "checkbox": return dl;
			case "radio": return pl;
			default: return ul;
		}
	}
}
function bl(e, t, n, r, i) {
	let a = yl(e.tagName, n.props && n.props.type)[i];
	a && a(e, t, n, r);
}
var xl = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Sl = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => xl.some((n) => e[`${n}Key`] && !t.includes(n))
}, Cl = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Sl[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, wl = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, Tl = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = P(n.key);
		if (t.some((e) => e === r || wl[e] === r)) return e(n);
	}));
}, El = /* @__PURE__ */ _({ patchProp: Gc }, Ws), Dl;
function Ol() {
	return Dl ||= bo(El);
}
var kl = ((...e) => {
	let t = Ol().createApp(...e);
	process.env.NODE_ENV !== "production" && (jl(t), Ml(t));
	let { mount: n } = t;
	return t.mount = (e) => {
		let r = Nl(e);
		if (!r) return;
		let i = t._component;
		!T(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Al(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Al(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function jl(e) {
	Object.defineProperty(e.config, "isNativeTag", {
		value: (e) => we(e) || Te(e) || Ee(e),
		writable: !1
	});
}
function Ml(e) {
	if (xs()) {
		let t = e.config.isCustomElement;
		Object.defineProperty(e.config, "isCustomElement", {
			get() {
				return t;
			},
			set() {
				Is("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
			}
		});
		let n = e.config.compilerOptions, r = "The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka \"full build\"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc";
		Object.defineProperty(e.config, "compilerOptions", {
			get() {
				return Is(r), n;
			},
			set() {
				Is(r);
			}
		});
	}
}
function Nl(e) {
	if (E(e)) {
		let t = document.querySelector(e);
		return process.env.NODE_ENV !== "production" && !t && Is(`Failed to mount app: mount target selector "${e}" returned null.`), t;
	}
	return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Is("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs"), e;
}
//#endregion
//#region node_modules/vue/dist/vue.runtime.esm-bundler.js
function Pl() {
	Ps();
}
process.env.NODE_ENV !== "production" && Pl();
//#endregion
//#region node_modules/@vue/devtools-api/lib/esm/env.js
function Fl() {
	return Il().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Il() {
	return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
var Ll = typeof Proxy == "function", Rl = "devtools-plugin:setup", zl = "plugin:settings:set", Bl, Vl;
function Hl() {
	return Bl === void 0 && (typeof window < "u" && window.performance ? (Bl = !0, Vl = window.performance) : typeof globalThis < "u" && globalThis.perf_hooks?.performance ? (Bl = !0, Vl = globalThis.perf_hooks.performance) : Bl = !1), Bl;
}
function Ul() {
	return Hl() ? Vl.now() : Date.now();
}
//#endregion
//#region node_modules/@vue/devtools-api/lib/esm/proxy.js
var Wl = class {
	constructor(e, t) {
		this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = t;
		let n = {};
		if (e.settings) for (let t in e.settings) n[t] = e.settings[t].defaultValue;
		let r = `__vue-devtools-plugin-settings__${e.id}`, i = Object.assign({}, n);
		try {
			let e = localStorage.getItem(r), t = JSON.parse(e);
			Object.assign(i, t);
		} catch {}
		this.fallbacks = {
			getSettings() {
				return i;
			},
			setSettings(e) {
				try {
					localStorage.setItem(r, JSON.stringify(e));
				} catch {}
				i = e;
			},
			now() {
				return Ul();
			}
		}, t && t.on(zl, (e, t) => {
			e === this.plugin.id && this.fallbacks.setSettings(t);
		}), this.proxiedOn = new Proxy({}, { get: (e, t) => this.target ? this.target.on[t] : (...e) => {
			this.onQueue.push({
				method: t,
				args: e
			});
		} }), this.proxiedTarget = new Proxy({}, { get: (e, t) => this.target ? this.target[t] : t === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(t) ? (...e) => (this.targetQueue.push({
			method: t,
			args: e,
			resolve: () => {}
		}), this.fallbacks[t](...e)) : (...e) => new Promise((n) => {
			this.targetQueue.push({
				method: t,
				args: e,
				resolve: n
			});
		}) });
	}
	async setRealTarget(e) {
		this.target = e;
		for (let e of this.onQueue) this.target.on[e.method](...e.args);
		for (let e of this.targetQueue) e.resolve(await this.target[e.method](...e.args));
	}
};
//#endregion
//#region node_modules/@vue/devtools-api/lib/esm/index.js
function Gl(e, t) {
	let n = e, r = Il(), i = Fl(), a = Ll && n.enableEarlyProxy;
	if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a)) i.emit(Rl, e, t);
	else {
		let e = a ? new Wl(n, i) : null;
		(r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
			pluginDescriptor: n,
			setupFn: t,
			proxy: e
		}), e && t(e.proxiedTarget);
	}
}
//#endregion
//#region node_modules/vue-router/dist/devtools-EWN81iOl.mjs
var Kl = typeof document < "u";
function ql(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Jl(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && ql(e.default);
}
var Yl = Object.assign;
function Xl(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = Ql(i) ? i.map(e) : e(i);
	}
	return n;
}
var Zl = () => {}, Ql = Array.isArray;
function $l(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
function J(e) {
	let t = Array.from(arguments).slice(1);
	console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
var eu = /#/g, tu = /&/g, nu = /\//g, ru = /=/g, iu = /\?/g, au = /\+/g, ou = /%5B/g, su = /%5D/g, cu = /%5E/g, lu = /%60/g, uu = /%7B/g, du = /%7C/g, fu = /%7D/g, pu = /%20/g;
function mu(e) {
	return e == null ? "" : encodeURI("" + e).replace(du, "|").replace(ou, "[").replace(su, "]");
}
function hu(e) {
	return mu(e).replace(uu, "{").replace(fu, "}").replace(cu, "^");
}
function gu(e) {
	return mu(e).replace(au, "%2B").replace(pu, "+").replace(eu, "%23").replace(tu, "%26").replace(lu, "`").replace(uu, "{").replace(fu, "}").replace(cu, "^");
}
function _u(e) {
	return gu(e).replace(ru, "%3D");
}
function vu(e) {
	return mu(e).replace(eu, "%23").replace(iu, "%3F");
}
function yu(e) {
	return vu(e).replace(nu, "%2F");
}
function bu(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {
		process.env.NODE_ENV !== "production" && J(`Error decoding "${e}". Using original value`);
	}
	return "" + e;
}
var xu = /\/$/, Su = (e) => e.replace(xu, "");
function Cu(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = ju(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: bu(o)
	};
}
function wu(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function Tu(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Eu(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && Du(t.matched[r], n.matched[i]) && Ou(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Du(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ou(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!ku(e[n], t[n])) return !1;
	return !0;
}
function ku(e, t) {
	return Ql(e) ? Au(e, t) : Ql(t) ? Au(t, e) : e?.valueOf() === t?.valueOf();
}
function Au(e, t) {
	return Ql(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function ju(e, t) {
	if (e.startsWith("/")) return e;
	if (process.env.NODE_ENV !== "production" && !t.startsWith("/")) return J(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
	if (!e) return t;
	let n = t.split("/"), r = e.split("/"), i = r[r.length - 1];
	(i === ".." || i === ".") && r.push("");
	let a = n.length - 1, o, s;
	for (o = 0; o < r.length; o++) if (s = r[o], s !== ".") {
		if (s === "..") a > 1 && a--;
		else break;
	}
	return n.slice(0, a).join("/") + "/" + r.slice(o).join("/");
}
var Mu = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
}, Nu = /* @__PURE__ */ function(e) {
	return e.pop = "pop", e.push = "push", e;
}({}), Pu = /* @__PURE__ */ function(e) {
	return e.back = "back", e.forward = "forward", e.unknown = "", e;
}({});
function Fu(e) {
	if (!e) {
		if (Kl) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Su(e);
}
var Iu = /^[^#]+#/;
function Lu(e, t) {
	return e.replace(Iu, "#") + t;
}
function Ru(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var zu = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function Bu(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#");
		if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!r || !document.getElementById(e.el.slice(1)))) try {
			let t = document.querySelector(e.el);
			if (r && t) {
				J(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
				return;
			}
		} catch {
			J(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
			return;
		}
		let i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) {
			process.env.NODE_ENV !== "production" && J(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
			return;
		}
		t = Ru(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function Vu(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var Hu = /* @__PURE__ */ new Map();
function Uu(e, t) {
	Hu.set(e, t);
}
function Wu(e) {
	let t = Hu.get(e);
	return Hu.delete(e), t;
}
function Gu(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function Ku(e) {
	return typeof e == "string" || typeof e == "symbol";
}
var qu = /* @__PURE__ */ function(e) {
	return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
}({}), Ju = Symbol(process.env.NODE_ENV === "production" ? "" : "navigation failure"), Yu = {
	[qu.MATCHER_NOT_FOUND]({ location: e, currentLocation: t }) {
		return `No match for\n ${JSON.stringify(e)}${t ? "\nwhile being at\n" + JSON.stringify(t) : ""}`;
	},
	[qu.NAVIGATION_GUARD_REDIRECT]({ from: e, to: t }) {
		return `Redirected from "${e.fullPath}" to "${$u(t)}" via a navigation guard.`;
	},
	[qu.NAVIGATION_ABORTED]({ from: e, to: t }) {
		return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
	},
	[qu.NAVIGATION_CANCELLED]({ from: e, to: t }) {
		return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
	},
	[qu.NAVIGATION_DUPLICATED]({ from: e, to: t }) {
		return `Avoided redundant navigation to current location: "${e.fullPath}".`;
	}
};
function Xu(e, t) {
	return process.env.NODE_ENV === "production" ? Yl(/* @__PURE__ */ Error(), {
		type: e,
		[Ju]: !0
	}, t) : Yl(Error(Yu[e](t)), {
		type: e,
		[Ju]: !0
	}, t);
}
function Zu(e, t) {
	return e instanceof Error && Ju in e && (t == null || !!(e.type & t));
}
var Qu = [
	"params",
	"query",
	"hash"
];
function $u(e) {
	if (typeof e == "string") return e;
	if (e.path != null) return e.path;
	let t = {};
	for (let n of Qu) n in e && (t[n] = e[n]);
	return JSON.stringify(t, null, 2);
}
function ed(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(au, " "), i = r.indexOf("="), a = bu(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : bu(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			Ql(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function td(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (n = _u(n), r == null) {
			r !== void 0 && (t += (t.length ? "&" : "") + n);
			continue;
		}
		(Ql(r) ? r.map((e) => e && gu(e)) : [r && gu(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function nd(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = Ql(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
var rd = Symbol(process.env.NODE_ENV === "production" ? "" : "router view location matched"), id = Symbol(process.env.NODE_ENV === "production" ? "" : "router view depth"), ad = Symbol(process.env.NODE_ENV === "production" ? "" : "router"), od = Symbol(process.env.NODE_ENV === "production" ? "" : "route location"), sd = Symbol(process.env.NODE_ENV === "production" ? "" : "router view location");
function cd() {
	let e = [];
	function t(t) {
		return e.push(t), () => {
			let n = e.indexOf(t);
			n > -1 && e.splice(n, 1);
		};
	}
	function n() {
		e = [];
	}
	return {
		add: t,
		list: () => e.slice(),
		reset: n
	};
}
function ld(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(Xu(qu.NAVIGATION_ABORTED, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : Gu(e) ? c(Xu(qu.NAVIGATION_GUARD_REDIRECT, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, process.env.NODE_ENV === "production" ? l : ud(l, t, n))), d = Promise.resolve(u);
		if (e.length < 3 && (d = d.then(l)), process.env.NODE_ENV !== "production" && e.length > 2) {
			let t = `The "next" callback was never called inside of ${e.name ? "\"" + e.name + "\"" : ""}:\n${e.toString()}\n. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
			if (typeof u == "object" && "then" in u) d = d.then((e) => l._called ? e : (J(t), Promise.reject(/* @__PURE__ */ Error("Invalid navigation guard"))));
			else if (u !== void 0 && !l._called) {
				J(t), c(/* @__PURE__ */ Error("Invalid navigation guard"));
				return;
			}
		}
		d.catch((e) => c(e));
	});
}
function ud(e, t, n) {
	let r = 0;
	return function() {
		r++ === 1 && J(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, r === 1 && e.apply(null, arguments);
	};
}
function dd(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) {
		process.env.NODE_ENV !== "production" && !o.components && o.children && !o.children.length && J(`Record with path "${o.path}" is either missing a "component(s)" or "children" property.`);
		for (let e in o.components) {
			let s = o.components[e];
			if (process.env.NODE_ENV !== "production") {
				if (!s || typeof s != "object" && typeof s != "function") throw J(`Component "${e}" in record with path "${o.path}" is not a valid component. Received "${String(s)}".`), Error("Invalid route component");
				if ("then" in s) {
					J(`Component "${e}" in record with path "${o.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
					let t = s;
					s = () => t;
				} else s.__asyncLoader && !s.__warnedDefineAsync && (s.__warnedDefineAsync = !0, J(`Component "${e}" in record with path "${o.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
			}
			if (!(t !== "beforeRouteEnter" && !o.instances[e])) {
				if (ql(s)) {
					let c = (s.__vccOpts || s)[t];
					c && a.push(ld(c, n, r, o, e, i));
				} else {
					let c = s();
					process.env.NODE_ENV !== "production" && !("catch" in c) && (J(`Component "${e}" in record with path "${o.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), c = Promise.resolve(c)), a.push(() => c.then((a) => {
						if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
						let s = Jl(a) ? a.default : a;
						o.mods[e] = a, o.components[e] = s;
						let c = (s.__vccOpts || s)[t];
						return c && ld(c, n, r, o, e, i)();
					}));
				}
			}
		}
	}
	return a;
}
function fd(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => Du(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => Du(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
function pd(e, t) {
	let n = Yl({}, e, { matched: e.matched.map((e) => Nd(e, [
		"instances",
		"children",
		"aliasOf"
	])) });
	return { _custom: {
		type: null,
		readOnly: !0,
		display: e.fullPath,
		tooltip: t,
		value: n
	} };
}
function md(e) {
	return { _custom: { display: e } };
}
var hd = 0;
function gd(e, t, n) {
	if (t.__hasDevtools) return;
	t.__hasDevtools = !0;
	let r = hd++;
	Gl({
		id: "org.vuejs.router" + (r ? "." + r : ""),
		label: "Vue Router",
		packageName: "vue-router",
		homepage: "https://router.vuejs.org",
		logo: "https://router.vuejs.org/logo.png",
		componentStateTypes: ["Routing"],
		app: e
	}, (i) => {
		typeof i.now != "function" && J("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), i.on.inspectComponent((e, n) => {
			e.instanceData && e.instanceData.state.push({
				type: "Routing",
				key: "$route",
				editable: !1,
				value: pd(t.currentRoute.value, "Current Route")
			});
		}), i.on.visitComponentTree(({ treeNode: e, componentInstance: t }) => {
			if (t.__vrv_devtools) {
				let n = t.__vrv_devtools;
				e.tags.push({
					label: (n.name ? `${n.name.toString()}: ` : "") + n.path,
					textColor: 0,
					tooltip: "This component is rendered by &lt;router-view&gt;",
					backgroundColor: yd
				});
			}
			Ql(t.__vrl_devtools) && (t.__devtoolsApi = i, t.__vrl_devtools.forEach((t) => {
				let n = t.route.path, r = Cd, i = "", a = 0;
				t.error ? (n = t.error, r = Td, a = Ed) : t.isExactActive ? (r = xd, i = "This is exactly active") : t.isActive && (r = bd, i = "This link is active"), e.tags.push({
					label: n,
					textColor: a,
					tooltip: i,
					backgroundColor: r
				});
			}));
		}), Kr(t.currentRoute, () => {
			c(), i.notifyComponentUpdate(), i.sendInspectorTree(s), i.sendInspectorState(s);
		});
		let a = "router:navigations:" + r;
		i.addTimelineLayer({
			id: a,
			label: `Router${r ? " " + r : ""} Navigations`,
			color: 4237508
		}), t.onError((e, t) => {
			i.addTimelineEvent({
				layerId: a,
				event: {
					title: "Error during Navigation",
					subtitle: t.fullPath,
					logType: "error",
					time: i.now(),
					data: { error: e },
					groupId: t.meta.__navigationId
				}
			});
		});
		let o = 0;
		t.beforeEach((e, t) => {
			let n = {
				guard: md("beforeEach"),
				from: pd(t, "Current Location during this navigation"),
				to: pd(e, "Target location")
			};
			Object.defineProperty(e.meta, "__navigationId", { value: o++ }), i.addTimelineEvent({
				layerId: a,
				event: {
					time: i.now(),
					title: "Start of navigation",
					subtitle: e.fullPath,
					data: n,
					groupId: e.meta.__navigationId
				}
			});
		}), t.afterEach((e, t, n) => {
			let r = { guard: md("afterEach") };
			n ? (r.failure = { _custom: {
				type: Error,
				readOnly: !0,
				display: n ? n.message : "",
				tooltip: "Navigation Failure",
				value: n
			} }, r.status = md("❌")) : r.status = md("✅"), r.from = pd(t, "Current Location during this navigation"), r.to = pd(e, "Target location"), i.addTimelineEvent({
				layerId: a,
				event: {
					title: "End of navigation",
					subtitle: e.fullPath,
					time: i.now(),
					data: r,
					logType: n ? "warning" : "default",
					groupId: e.meta.__navigationId
				}
			});
		});
		let s = "router-inspector:" + r;
		i.addInspector({
			id: s,
			label: "Routes" + (r ? " " + r : ""),
			icon: "book",
			treeFilterPlaceholder: "Search routes"
		});
		function c() {
			if (!l) return;
			let e = l, r = n.getRoutes().filter((e) => !e.parent || !e.parent.record.components);
			r.forEach(jd), e.filter && (r = r.filter((t) => Md(t, e.filter.toLowerCase()))), r.forEach((e) => Ad(e, t.currentRoute.value)), e.rootNodes = r.map(Dd);
		}
		let l;
		i.on.getInspectorTree((t) => {
			l = t, t.app === e && t.inspectorId === s && c();
		}), i.on.getInspectorState((t) => {
			if (t.app === e && t.inspectorId === s) {
				let e = n.getRoutes().find((e) => e.record.__vd_id === t.nodeId);
				e && (t.state = { options: vd(e) });
			}
		}), i.sendInspectorTree(s), i.sendInspectorState(s);
	});
}
function _d(e) {
	return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function vd(e) {
	let { record: t } = e, n = [{
		editable: !1,
		key: "path",
		value: t.path
	}];
	return t.name != null && n.push({
		editable: !1,
		key: "name",
		value: t.name
	}), n.push({
		editable: !1,
		key: "regexp",
		value: e.re
	}), e.keys.length && n.push({
		editable: !1,
		key: "keys",
		value: { _custom: {
			type: null,
			readOnly: !0,
			display: e.keys.map((e) => `${e.name}${_d(e)}`).join(" "),
			tooltip: "Param keys",
			value: e.keys
		} }
	}), t.redirect != null && n.push({
		editable: !1,
		key: "redirect",
		value: t.redirect
	}), e.alias.length && n.push({
		editable: !1,
		key: "aliases",
		value: e.alias.map((e) => e.record.path)
	}), Object.keys(e.record.meta).length && n.push({
		editable: !1,
		key: "meta",
		value: e.record.meta
	}), n.push({
		key: "score",
		editable: !1,
		value: { _custom: {
			type: null,
			readOnly: !0,
			display: e.score.map((e) => e.join(", ")).join(" | "),
			tooltip: "Score used to sort routes",
			value: e.score
		} }
	}), n;
}
var yd = 15485081, bd = 2450411, xd = 8702998, Sd = 2282478, Cd = 16486972, wd = 6710886, Td = 16704226, Ed = 12131356;
function Dd(e) {
	let t = [], { record: n } = e;
	n.name != null && t.push({
		label: String(n.name),
		textColor: 0,
		backgroundColor: Sd
	}), n.aliasOf && t.push({
		label: "alias",
		textColor: 0,
		backgroundColor: Cd
	}), e.__vd_match && t.push({
		label: "matches",
		textColor: 0,
		backgroundColor: yd
	}), e.__vd_exactActive && t.push({
		label: "exact",
		textColor: 0,
		backgroundColor: xd
	}), e.__vd_active && t.push({
		label: "active",
		textColor: 0,
		backgroundColor: bd
	}), n.redirect && t.push({
		label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
		textColor: 16777215,
		backgroundColor: wd
	});
	let r = n.__vd_id;
	return r ?? (r = String(Od++), n.__vd_id = r), {
		id: r,
		label: n.path,
		tags: t,
		children: e.children.map(Dd)
	};
}
var Od = 0, kd = /^\/(.*)\/([a-z]*)$/;
function Ad(e, t) {
	let n = t.matched.length && Du(t.matched[t.matched.length - 1], e.record);
	e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((t) => Du(t, e.record))), e.children.forEach((e) => Ad(e, t));
}
function jd(e) {
	e.__vd_match = !1, e.children.forEach(jd);
}
function Md(e, t) {
	let n = String(e.re).match(kd);
	if (e.__vd_match = !1, !n || n.length < 3) return !1;
	if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t)) return e.children.forEach((e) => Md(e, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
	let r = e.record.path.toLowerCase(), i = bu(r);
	return !t.startsWith("/") && (i.includes(t) || r.includes(t)) || i.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((e) => Md(e, t));
}
function Nd(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || (n[r] = e[r]);
	return n;
}
//#endregion
//#region node_modules/vue-router/dist/vue-router.mjs
var Pd = () => location.protocol + "//" + location.host;
function Fd(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), Tu(n, "");
	}
	return Tu(n, e) + r + i;
}
function Id(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = Fd(e, location), c = n.value, l = t.value, u = 0;
		if (a) {
			if (n.value = s, t.value = a, o && o === c) {
				o = null;
				return;
			}
			u = l ? a.position - l.position : 0;
		} else r(s);
		i.forEach((e) => {
			e(n.value, c, {
				delta: u,
				type: Nu.pop,
				direction: u ? u > 0 ? Pu.forward : Pu.back : Pu.unknown
			});
		});
	};
	function c() {
		o = n.value;
	}
	function l(e) {
		i.push(e);
		let t = () => {
			let t = i.indexOf(e);
			t > -1 && i.splice(t, 1);
		};
		return a.push(t), t;
	}
	function u() {
		if (document.visibilityState === "hidden") {
			let { history: e } = window;
			if (!e.state) return;
			e.replaceState(Yl({}, e.state, { scroll: zu() }), "");
		}
	}
	function d() {
		for (let e of a) e();
		a = [], window.removeEventListener("popstate", s), window.removeEventListener("pagehide", u), document.removeEventListener("visibilitychange", u);
	}
	return window.addEventListener("popstate", s), window.addEventListener("pagehide", u), document.addEventListener("visibilitychange", u), {
		pauseListeners: c,
		listen: l,
		destroy: d
	};
}
function Ld(e, t, n, r = !1, i = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: i ? zu() : null
	};
}
function Rd(e) {
	let { history: t, location: n } = window, r = { value: Fd(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : Pd() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			process.env.NODE_ENV === "production" ? console.error(e) : J("Error with push/replace State", e), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		a(e, Yl({}, t.state, Ld(i.value.back, e, i.value.forward, !0), n, { position: i.value.position }), !0), r.value = e;
	}
	function s(e, n) {
		let o = Yl({}, i.value, t.state, {
			forward: e,
			scroll: zu()
		});
		process.env.NODE_ENV !== "production" && !t.state && J("history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\nhistory.replaceState(history.state, '', url)\n\nYou can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state"), a(o.current, o, !0), a(e, Yl({}, Ld(r.value, e, null), { position: o.position + 1 }, n), !1), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function zd(e) {
	e = Fu(e);
	let t = Rd(e), n = Id(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = Yl({
		location: "",
		base: e,
		go: r,
		createHref: Lu.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function Bd(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), process.env.NODE_ENV !== "production" && !e.endsWith("#/") && !e.endsWith("#") && J(`A hash base must end with a "#":\n"${e}" should be "${e.replace(/#.*$/, "#")}".`), zd(e);
}
var Vd = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
}({}), Hd = /* @__PURE__ */ function(e) {
	return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
}(Hd || {}), Ud = {
	type: Vd.Static,
	value: ""
}, Wd = /[a-zA-Z0-9_]/;
function Gd(e) {
	if (!e) return [[]];
	if (e === "/") return [[Ud]];
	if (!e.startsWith("/")) throw Error(process.env.NODE_ENV === "production" ? `Invalid path "${e}"` : `Route paths should start with a "/": "${e}" should be "/${e}".`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = Hd.Static, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l &&= (n === Hd.Static ? a.push({
			type: Vd.Static,
			value: l
		}) : n === Hd.Param || n === Hd.ParamRegExp || n === Hd.ParamRegExpEnd ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: Vd.Param,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) {
		if (c = e[s++], c === "\\" && n !== Hd.ParamRegExp) {
			r = n, n = Hd.EscapeNext;
			continue;
		}
		switch (n) {
			case Hd.Static:
				c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = Hd.Param) : f();
				break;
			case Hd.EscapeNext:
				f(), n = r;
				break;
			case Hd.Param:
				c === "(" ? n = Hd.ParamRegExp : Wd.test(c) ? f() : (d(), n = Hd.Static, c !== "*" && c !== "?" && c !== "+" && s--);
				break;
			case Hd.ParamRegExp:
				c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = Hd.ParamRegExpEnd : u += c;
				break;
			case Hd.ParamRegExpEnd:
				d(), n = Hd.Static, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
				break;
			default: t("Unknown state");
		}
	}
	return n === Hd.ParamRegExp && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var Kd = "[^/]+?", qd = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, Jd = /* @__PURE__ */ function(e) {
	return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e;
}(Jd || {}), Yd = /[.+*?^${}()[\]/\\]/g;
function Xd(e, t) {
	let n = Yl({}, qd, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [Jd.Root];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = Jd.Segment + (n.sensitive ? Jd.BonusCaseSensitive : 0);
			if (o.type === Vd.Static) r || (i += "/"), i += o.value.replace(Yd, "\\$&"), s += Jd.Static;
			else if (o.type === Vd.Param) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || Kd;
				if (u !== Kd) {
					s += Jd.BonusCustomRegExp;
					try {
						`${u}`;
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message);
					}
				}
				let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
				r || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), i += d, s += Jd.Dynamic, c && (s += Jd.BonusOptional), n && (s += Jd.BonusRepeatable), u === ".*" && (s += Jd.BonusWildcard);
			}
			e.push(s);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += Jd.BonusStrict;
	}
	n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
	let o = new RegExp(i, n.sensitive ? "" : "i");
	function s(e) {
		let t = e.match(o), n = {};
		if (!t) return null;
		for (let e = 1; e < t.length; e++) {
			let r = t[e] || "", i = a[e - 1];
			n[i.name] = r && i.repeatable ? r.split("/") : r;
		}
		return n;
	}
	function c(t) {
		let n = "", r = !1;
		for (let i of e) {
			(!r || !n.endsWith("/")) && (n += "/"), r = !1;
			for (let e of i) if (e.type === Vd.Static) n += e.value;
			else if (e.type === Vd.Param) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (Ql(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = Ql(c) ? c.join("/") : c;
				if (!l) {
					if (s) i.length < 2 && (n.endsWith("/") ? n = n.slice(0, -1) : r = !0);
					else throw Error(`Missing required param "${a}"`);
				}
				n += l;
			}
		}
		return n || "/";
	}
	return {
		re: o,
		score: r,
		keys: a,
		parse: s,
		stringify: c
	};
}
function Zd(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === Jd.Static + Jd.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === Jd.Static + Jd.Segment ? 1 : -1 : 0;
}
function Qd(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = Zd(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if ($d(r)) return 1;
		if ($d(i)) return -1;
	}
	return i.length - r.length;
}
function $d(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var ef = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function tf(e, t, n) {
	let r = Xd(Gd(e.path), n);
	if (process.env.NODE_ENV !== "production") {
		let t = /* @__PURE__ */ new Set();
		for (let n of r.keys) t.has(n.name) && J(`Found duplicated params with name "${n.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), t.add(n.name);
	}
	let i = Yl(r, {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function nf(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = $l(ef, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = af(e);
		process.env.NODE_ENV !== "production" && df(s, n), s.aliasOf = r && r.record;
		let l = $l(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(af(Yl({}, s, {
				components: r ? r.record.components : s.components,
				path: e,
				aliasOf: r ? r.record : s
			})));
		}
		let d, f;
		for (let t of u) {
			let { path: u } = t;
			if (n && u[0] !== "/") {
				let e = n.record.path, r = e[e.length - 1] === "/" ? "" : "/";
				t.path = n.record.path + (u && r + u);
			}
			if (process.env.NODE_ENV !== "production" && t.path === "*") throw Error("Catch all routes (\"*\") must now be defined using a param with a custom regexp.\nSee more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.");
			if (d = tf(t, n, l), process.env.NODE_ENV !== "production" && n && u[0] === "/" && pf(d, n), r ? (r.alias.push(d), process.env.NODE_ENV !== "production" && uf(r, d)) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !sf(d) && (process.env.NODE_ENV !== "production" && ff(e, n), o(e.name))), gf(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : Zl;
	}
	function o(e) {
		if (Ku(e)) {
			let t = r.get(e);
			t && (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(o), t.alias.forEach(o));
		} else {
			let t = n.indexOf(e);
			t > -1 && (n.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(o), e.alias.forEach(o));
		}
	}
	function s() {
		return n;
	}
	function c(e) {
		let t = mf(e, n);
		n.splice(t, 0, e), e.record.name && !sf(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw Xu(qu.MATCHER_NOT_FOUND, { location: e });
			if (process.env.NODE_ENV !== "production") {
				let t = Object.keys(e.params || {}).filter((e) => !i.keys.find((t) => t.name === e));
				t.length && J(`Discarded invalid param(s) "${t.join("\", \"")}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
			}
			s = i.record.name, a = Yl(rf(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && rf(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, process.env.NODE_ENV !== "production" && !o.startsWith("/") && J(`The Matcher cannot resolve relative paths but received "${o}". Unless you directly called \`matcher.resolve("${o}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name);
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw Xu(qu.MATCHER_NOT_FOUND, {
				location: e,
				currentLocation: t
			});
			s = i.record.name, a = Yl({}, t.params, e.params), o = i.stringify(a);
		}
		let c = [], l = i;
		for (; l;) c.unshift(l.record), l = l.parent;
		return {
			name: s,
			path: o,
			params: a,
			matched: c,
			meta: cf(c)
		};
	}
	e.forEach((e) => a(e));
	function u() {
		n.length = 0, r.clear();
	}
	return {
		addRoute: a,
		resolve: l,
		removeRoute: o,
		clearRoutes: u,
		getRoutes: s,
		getRecordMatcher: i
	};
}
function rf(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function af(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: of(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function of(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function sf(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function cf(e) {
	return e.reduce((e, t) => Yl(e, t.meta), {});
}
function lf(e, t) {
	return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function uf(e, t) {
	for (let n of e.keys) if (!n.optional && !t.keys.find(lf.bind(null, n))) return J(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
	for (let n of t.keys) if (!n.optional && !e.keys.find(lf.bind(null, n))) return J(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function df(e, t) {
	t && t.record.name && !e.name && !e.path && J(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function ff(e, t) {
	for (let n = t; n; n = n.parent) if (n.record.name === e.name) throw Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function pf(e, t) {
	for (let n of t.keys) if (!e.keys.find(lf.bind(null, n))) return J(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function mf(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		Qd(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = hf(e);
	return i && (r = t.lastIndexOf(i, r - 1), process.env.NODE_ENV !== "production" && r < 0 && J(`Finding ancestor route "${i.record.path}" failed for "${e.record.path}"`)), r;
}
function hf(e) {
	let t = e;
	for (; t = t.parent;) if (gf(t) && Qd(e, t) === 0) return t;
}
function gf({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function _f(e) {
	let t = Hr(ad), n = Hr(od), r = !1, i = null, a = Ms(() => {
		let n = _n(e.to);
		return process.env.NODE_ENV !== "production" && (!r || n !== i) && (Gu(n) || (r ? J("Invalid value for prop \"to\" in useLink()\n- to:", n, "\n- previous to:", i, "\n- props:", e) : J("Invalid value for prop \"to\" in useLink()\n- to:", n, "\n- props:", e)), i = n, r = !0), t.resolve(n);
	}), o = Ms(() => {
		let { matched: e } = a.value, { length: t } = e, r = e[t - 1], i = n.matched;
		if (!r || !i.length) return -1;
		let o = i.findIndex(Du.bind(null, r));
		if (o > -1) return o;
		let s = Sf(e[t - 2]);
		return t > 1 && Sf(r) === s && i[i.length - 1].path !== s ? i.findIndex(Du.bind(null, e[t - 2])) : o;
	}), s = Ms(() => o.value > -1 && xf(n.params, a.value.params)), c = Ms(() => o.value > -1 && o.value === n.matched.length - 1 && Ou(n.params, a.value.params));
	function l(n = {}) {
		if (bf(n)) {
			let n = t[_n(e.replace) ? "replace" : "push"](_n(e.to)).catch(Zl);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
		}
		return Promise.resolve();
	}
	if (process.env.NODE_ENV !== "production" && Kl) {
		let t = ls();
		if (t) {
			let n = {
				route: a.value,
				isActive: s.value,
				isExactActive: c.value,
				error: null
			};
			t.__vrl_devtools = t.__vrl_devtools || [], t.__vrl_devtools.push(n), Gr(() => {
				n.route = a.value, n.isActive = s.value, n.isExactActive = c.value, n.error = Gu(_n(e.to)) ? null : "Invalid \"to\" value";
			}, { flush: "post" });
		}
	}
	return {
		route: a,
		href: Ms(() => a.value.href),
		isActive: s,
		isExactActive: c,
		navigate: l
	};
}
function vf(e) {
	return e.length === 1 ? e[0] : e;
}
var yf = /* @__PURE__ */ pi({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: !0
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink: _f,
	setup(e, { slots: t }) {
		let n = /* @__PURE__ */ $t(_f(e)), { options: r } = Hr(ad), i = Ms(() => ({
			[Cf(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[Cf(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && vf(t.default(n));
			return e.custom ? r : Ns("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function bf(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function xf(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!Ql(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function Sf(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Cf = (e, t, n) => e ?? t ?? n, wf = /* @__PURE__ */ pi({
	name: "RouterView",
	inheritAttrs: !1,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(e, { attrs: t, slots: n }) {
		process.env.NODE_ENV !== "production" && Df();
		let r = Hr(sd), i = Ms(() => e.route || r.value), a = Hr(id, 0), o = Ms(() => {
			let e = _n(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), s = Ms(() => i.value.matched[o.value]);
		Vr(id, Ms(() => o.value + 1)), Vr(rd, s), Vr(sd, i);
		let c = /* @__PURE__ */ pn();
		return Kr(() => [
			c.value,
			s.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), e && t && (!i || !Du(t, i) || !r) && (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, l = s.value, u = l && l.components[a];
			if (!u) return Tf(n.default, {
				Component: u,
				route: r
			});
			let d = l.props[a], f = Ns(u, Yl({}, d ? d === !0 ? r.params : typeof d == "function" ? d(r) : d : null, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (l.instances[a] = null);
				},
				ref: c
			}));
			if (process.env.NODE_ENV !== "production" && Kl && f.ref) {
				let e = {
					depth: o.value,
					name: l.name,
					path: l.path,
					meta: l.meta
				};
				(Ql(f.ref) ? f.ref.map((e) => e.i) : [f.ref.i]).forEach((t) => {
					t.__vrv_devtools = e;
				});
			}
			return Tf(n.default, {
				Component: f,
				route: r
			}) || f;
		};
	}
});
function Tf(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var Ef = wf;
function Df() {
	let e = ls(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
	if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
		let e = t === "KeepAlive" ? "keep-alive" : "transition";
		J(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${e}>\n    <component :is="Component" />\n  </${e}>\n</router-view>`);
	}
}
function Of(e) {
	let t = nf(e.routes, e), n = e.parseQuery || ed, r = e.stringifyQuery || td, i = e.history;
	if (process.env.NODE_ENV !== "production" && !i) throw Error("Provide the \"history\" option when calling \"createRouter()\": https://router.vuejs.org/api/interfaces/RouterOptions.html#history");
	let a = cd(), o = cd(), s = cd(), c = /* @__PURE__ */ mn(Mu), l = Mu;
	Kl && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = Xl.bind(null, (e) => "" + e), d = Xl.bind(null, yu), f = Xl.bind(null, bu);
	function p(e, n) {
		let r, i;
		return Ku(e) ? (r = t.getRecordMatcher(e), process.env.NODE_ENV !== "production" && !r && J(`Parent route "${String(e)}" not found when adding child route`, n), i = n) : i = e, t.addRoute(i, r);
	}
	function m(e) {
		let n = t.getRecordMatcher(e);
		n ? t.removeRoute(n) : process.env.NODE_ENV !== "production" && J(`Cannot remove non-existent route "${String(e)}"`);
	}
	function h() {
		return t.getRoutes().map((e) => e.record);
	}
	function g(e) {
		return !!t.getRecordMatcher(e);
	}
	function _(e, a) {
		if (a = Yl({}, a || c.value), typeof e == "string") {
			let r = Cu(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return process.env.NODE_ENV !== "production" && (s.startsWith("//") ? J(`Location "${e}" resolved to "${s}". A resolved location cannot start with multiple slashes.`) : o.matched.length || J(`No match found for location with path "${e}"`)), Yl(r, o, {
				params: f(o.params),
				hash: bu(r.hash),
				redirectedFrom: void 0,
				href: s
			});
		}
		if (process.env.NODE_ENV !== "production" && !Gu(e)) return J("router.resolve() was passed an invalid location. This will fail in production.\n- Location:", e), _({});
		let o;
		if (e.path != null) process.env.NODE_ENV !== "production" && "params" in e && !("name" in e) && Object.keys(e.params).length && J(`Path "${e.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), o = Yl({}, e, { path: Cu(n, e.path, a.path).path });
		else {
			let t = Yl({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = Yl({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		process.env.NODE_ENV !== "production" && l && !l.startsWith("#") && J(`A \`hash\` should always start with the character "#". Replace "${l}" with "#${l}".`), s.params = u(f(s.params));
		let p = wu(r, Yl({}, e, {
			hash: hu(l),
			path: s.path
		})), m = i.createHref(p);
		return process.env.NODE_ENV !== "production" && (m.startsWith("//") ? J(`Location "${e}" resolved to "${m}". A resolved location cannot start with multiple slashes.`) : s.matched.length || J(`No match found for location with path "${e.path == null ? e : e.path}"`)), Yl({
			fullPath: p,
			hash: l,
			query: r === td ? nd(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? Cu(n, e, c.value.path) : Yl({}, e);
	}
	function y(e, t) {
		if (l !== e) return Xu(qu.NAVIGATION_CANCELLED, {
			from: t,
			to: e
		});
	}
	function b(e) {
		return C(e);
	}
	function x(e) {
		return b(Yl(v(e), { replace: !0 }));
	}
	function S(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			if (typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = v(i) : { path: i }, i.params = {}), process.env.NODE_ENV !== "production" && i.path == null && !("name" in i)) throw J(`Invalid redirect found:\n${JSON.stringify(i, null, 2)}\n when navigating to "${e.fullPath}". A redirect must contain a name or path. This will break in production.`), Error("Invalid redirect");
			return Yl({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function C(e, t) {
		let n = l = _(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, u = S(n, i);
		if (u) return C(Yl(v(u), {
			state: typeof u == "object" ? Yl({}, a, u.state) : a,
			force: o,
			replace: s
		}), t || n);
		let d = n;
		d.redirectedFrom = t;
		let f;
		return !o && Eu(r, i, n) && (f = Xu(qu.NAVIGATION_DUPLICATED, {
			to: d,
			from: i
		}), re(i, i, !0, !1)), (f ? Promise.resolve(f) : E(d, i)).catch((e) => Zu(e) ? Zu(e, qu.NAVIGATION_GUARD_REDIRECT) ? e : ne(e) : N(e, d, i)).then((e) => {
			if (e) {
				if (Zu(e, qu.NAVIGATION_GUARD_REDIRECT)) return process.env.NODE_ENV !== "production" && Eu(r, _(e.to), d) && t && (t._count = t._count ? t._count + 1 : 1) > 30 ? (J(`Detected a possibly infinite redirection in a navigation guard when going from "${i.fullPath}" to "${d.fullPath}". Aborting to avoid a Stack Overflow.\n Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(/* @__PURE__ */ Error("Infinite redirect in navigation guard"))) : C(Yl({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? Yl({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = O(d, i, !0, s, a);
			return D(d, i, e), e;
		});
	}
	function w(e, t) {
		let n = y(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function T(e) {
		let t = oe.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function E(e, t) {
		let n, [r, i, s] = fd(e, t);
		n = dd(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(ld(r, e, t));
		});
		let c = w.bind(null, e, t);
		return n.push(c), se(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(ld(r, e, t));
			return n.push(c), se(n);
		}).then(() => {
			n = dd(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(ld(r, e, t));
			});
			return n.push(c), se(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (Ql(r.beforeEnter)) for (let i of r.beforeEnter) n.push(ld(i, e, t));
				else n.push(ld(r.beforeEnter, e, t));
			}
			return n.push(c), se(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = dd(s, "beforeRouteEnter", e, t, T), n.push(c), se(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(ld(r, e, t));
			return n.push(c), se(n);
		}).catch((e) => Zu(e, qu.NAVIGATION_CANCELLED) ? e : Promise.reject(e));
	}
	function D(e, t, n) {
		s.list().forEach((r) => T(() => r(e, t, n)));
	}
	function O(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === Mu, l = Kl ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, Yl({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, re(e, t, n, s), ne();
	}
	let k;
	function A() {
		k ||= i.listen((e, t, n) => {
			if (!P.listening) return;
			let r = _(e), a = S(r, P.currentRoute.value);
			if (a) {
				C(Yl(a, {
					replace: !0,
					force: !0
				}), r).catch(Zl);
				return;
			}
			l = r;
			let o = c.value;
			Kl && Uu(Vu(o.fullPath, n.delta), zu()), E(r, o).catch((e) => Zu(e, qu.NAVIGATION_ABORTED | qu.NAVIGATION_CANCELLED) ? e : Zu(e, qu.NAVIGATION_GUARD_REDIRECT) ? (C(Yl(v(e.to), { force: !0 }), r).then((e) => {
				Zu(e, qu.NAVIGATION_ABORTED | qu.NAVIGATION_DUPLICATED) && !n.delta && n.type === Nu.pop && i.go(-1, !1);
			}).catch(Zl), Promise.reject()) : (n.delta && i.go(-n.delta, !1), N(e, r, o))).then((e) => {
				e ||= O(r, o, !1), e && (n.delta && !Zu(e, qu.NAVIGATION_CANCELLED) ? i.go(-n.delta, !1) : n.type === Nu.pop && Zu(e, qu.NAVIGATION_ABORTED | qu.NAVIGATION_DUPLICATED) && i.go(-1, !1)), D(r, o, e);
			}).catch(Zl);
		});
	}
	let j = cd(), M = cd(), ee;
	function N(e, t, n) {
		ne(e);
		let r = M.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : (process.env.NODE_ENV !== "production" && J("uncaught error during route navigation:"), console.error(e)), Promise.reject(e);
	}
	function te() {
		return ee && c.value !== Mu ? Promise.resolve() : new Promise((e, t) => {
			j.add([e, t]);
		});
	}
	function ne(e) {
		return ee || (ee = !e, A(), j.list().forEach(([t, n]) => e ? n(e) : t()), j.reset()), e;
	}
	function re(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!Kl || !a) return Promise.resolve();
		let o = !r && Wu(Vu(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return Zn().then(() => a(t, n, o)).then((e) => e && Bu(e)).catch((e) => N(e, t, n));
	}
	let ie = (e) => i.go(e), ae, oe = /* @__PURE__ */ new Set(), P = {
		currentRoute: c,
		listening: !0,
		addRoute: p,
		removeRoute: m,
		clearRoutes: t.clearRoutes,
		hasRoute: g,
		getRoutes: h,
		resolve: _,
		options: e,
		push: b,
		replace: x,
		go: ie,
		back: () => ie(-1),
		forward: () => ie(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: M.add,
		isReady: te,
		install(e) {
			e.component("RouterLink", yf), e.component("RouterView", Ef), e.config.globalProperties.$router = P, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => _n(c)
			}), Kl && !ae && c.value === Mu && (ae = !0, b(i.location).catch((e) => {
				process.env.NODE_ENV !== "production" && J("Unexpected error when starting the router:", e);
			}));
			let n = {};
			for (let e in Mu) Object.defineProperty(n, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(ad, P), e.provide(od, /* @__PURE__ */ en(n)), e.provide(sd, c);
			let r = e.unmount;
			oe.add(e), e.unmount = function() {
				oe.delete(e), oe.size < 1 && (l = Mu, k && k(), k = null, c.value = Mu, ae = !1, ee = !1), r();
			}, process.env.NODE_ENV !== "production" && Kl && gd(e, P, t);
		}
	};
	function se(e) {
		return e.reduce((e, t) => e.then(() => T(t)), Promise.resolve());
	}
	return P;
}
var kf = (/* @__PURE__ */ l((/* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return e instanceof Map ? e.clear = e.delete = e.set = function() {
			throw Error("map is read-only");
		} : e instanceof Set && (e.add = e.clear = e.delete = function() {
			throw Error("set is read-only");
		}), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((t) => {
			let r = e[t], i = typeof r;
			(i === "object" || i === "function") && !Object.isFrozen(r) && n(r);
		}), e;
	}
	var r = class {
		constructor(e) {
			e.data === void 0 && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
		}
		ignoreMatch() {
			this.isMatchIgnored = !0;
		}
	};
	function i(e) {
		return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	}
	function a(e, ...t) {
		let n = Object.create(null);
		for (let t in e) n[t] = e[t];
		return t.forEach(function(e) {
			for (let t in e) n[t] = e[t];
		}), n;
	}
	var o = "</span>", s = (e) => !!e.scope, c = (e, { prefix: t }) => {
		if (e.startsWith("language:")) return e.replace("language:", "language-");
		if (e.includes(".")) {
			let n = e.split(".");
			return [`${t}${n.shift()}`, ...n.map((e, t) => `${e}${"_".repeat(t + 1)}`)].join(" ");
		}
		return `${t}${e}`;
	}, l = class {
		constructor(e, t) {
			this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this);
		}
		addText(e) {
			this.buffer += i(e);
		}
		openNode(e) {
			if (!s(e)) return;
			let t = c(e.scope, { prefix: this.classPrefix });
			this.span(t);
		}
		closeNode(e) {
			s(e) && (this.buffer += o);
		}
		value() {
			return this.buffer;
		}
		span(e) {
			this.buffer += `<span class="${e}">`;
		}
	}, u = (e = {}) => {
		let t = { children: [] };
		return Object.assign(t, e), t;
	}, d = class e {
		constructor() {
			this.rootNode = u(), this.stack = [this.rootNode];
		}
		get top() {
			return this.stack[this.stack.length - 1];
		}
		get root() {
			return this.rootNode;
		}
		add(e) {
			this.top.children.push(e);
		}
		openNode(e) {
			let t = u({ scope: e });
			this.add(t), this.stack.push(t);
		}
		closeNode() {
			if (this.stack.length > 1) return this.stack.pop();
		}
		closeAllNodes() {
			for (; this.closeNode(););
		}
		toJSON() {
			return JSON.stringify(this.rootNode, null, 4);
		}
		walk(e) {
			return this.constructor._walk(e, this.rootNode);
		}
		static _walk(e, t) {
			return typeof t == "string" ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach((t) => this._walk(e, t)), e.closeNode(t)), e;
		}
		static _collapse(t) {
			typeof t != "string" && t.children && (t.children.every((e) => typeof e == "string") ? t.children = [t.children.join("")] : t.children.forEach((t) => {
				e._collapse(t);
			}));
		}
	}, f = class extends d {
		constructor(e) {
			super(), this.options = e;
		}
		addText(e) {
			e !== "" && this.add(e);
		}
		startScope(e) {
			this.openNode(e);
		}
		endScope() {
			this.closeNode();
		}
		__addSublanguage(e, t) {
			let n = e.root;
			t && (n.scope = `language:${t}`), this.add(n);
		}
		toHTML() {
			return new l(this, this.options).value();
		}
		finalize() {
			return this.closeAllNodes(), !0;
		}
	};
	function p(e) {
		return e ? typeof e == "string" ? e : e.source : null;
	}
	function m(e) {
		return _("(?=", e, ")");
	}
	function h(e) {
		return _("(?:", e, ")*");
	}
	function g(e) {
		return _("(?:", e, ")?");
	}
	function _(...e) {
		return e.map((e) => p(e)).join("");
	}
	function v(e) {
		let t = e[e.length - 1];
		return typeof t == "object" && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
	}
	function y(...e) {
		return "(" + (v(e).capture ? "" : "?:") + e.map((e) => p(e)).join("|") + ")";
	}
	function b(e) {
		return RegExp(e.toString() + "|").exec("").length - 1;
	}
	function x(e, t) {
		let n = e && e.exec(t);
		return n && n.index === 0;
	}
	var S = new RegExp(y(/\[(?:[^\\\]]|\\.)*\]/, /\(\?<(?![=!])[^>]+>/, /\(\?'[^']+'/, /\(\??/, /\\([1-9][0-9]*)/, /\\./));
	function C(e, { joinWith: t }) {
		let n = 0;
		return e.map((e) => {
			n += 1;
			let t = n, r = p(e), i = "";
			for (; r.length > 0;) {
				let e = S.exec(r);
				if (!e) {
					i += r;
					break;
				}
				i += r.substring(0, e.index), r = r.substring(e.index + e[0].length), e[0][0] === "\\" && e[1] ? i += "\\" + String(Number(e[1]) + t) : (i += e[0], (e[0] === "(" || /^\(\?[<']/.test(e[0])) && n++);
			}
			return i;
		}).map((e) => `(${e})`).join(t);
	}
	var w = /\b\B/, T = "[a-zA-Z]\\w*", E = "[a-zA-Z_]\\w*", D = "\\b\\d+(\\.\\d+)?", O = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", k = "\\b(0b[01]+)", A = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", j = (e = {}) => {
		let t = /^#![ ]*\//;
		return e.binary && (e.begin = _(t, /.*\b/, e.binary, /\b.*/)), a({
			scope: "meta",
			begin: t,
			end: /$/,
			relevance: 0,
			"on:begin": (e, t) => {
				e.index !== 0 && t.ignoreMatch();
			}
		}, e);
	}, M = {
		begin: "\\\\[\\s\\S]",
		relevance: 0
	}, ee = {
		scope: "string",
		begin: "'",
		end: "'",
		illegal: "\\n",
		contains: [M]
	}, N = {
		scope: "string",
		begin: "\"",
		end: "\"",
		illegal: "\\n",
		contains: [M]
	}, te = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, ne = function(e, t, n = {}) {
		let r = a({
			scope: "comment",
			begin: e,
			end: t,
			contains: []
		}, n);
		r.contains.push({
			scope: "doctag",
			begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
			end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
			excludeBegin: !0,
			relevance: 0
		});
		let i = y("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
		return r.contains.push({ begin: _(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), r;
	}, re = ne("//", "$"), ie = ne("/\\*", "\\*/"), ae = ne("#", "$"), oe = /*#__PURE__*/ Object.freeze({
		__proto__: null,
		APOS_STRING_MODE: ee,
		BACKSLASH_ESCAPE: M,
		BINARY_NUMBER_MODE: {
			scope: "number",
			begin: k,
			relevance: 0
		},
		BINARY_NUMBER_RE: k,
		COMMENT: ne,
		C_BLOCK_COMMENT_MODE: ie,
		C_LINE_COMMENT_MODE: re,
		C_NUMBER_MODE: {
			scope: "number",
			begin: O,
			relevance: 0
		},
		C_NUMBER_RE: O,
		END_SAME_AS_BEGIN: function(e) {
			return Object.assign(e, {
				"on:begin": (e, t) => {
					t.data._beginMatch = e[1];
				},
				"on:end": (e, t) => {
					t.data._beginMatch !== e[1] && t.ignoreMatch();
				}
			});
		},
		HASH_COMMENT_MODE: ae,
		IDENT_RE: T,
		MATCH_NOTHING_RE: w,
		METHOD_GUARD: {
			begin: "\\.\\s*[a-zA-Z_]\\w*",
			relevance: 0
		},
		NUMBER_MODE: {
			scope: "number",
			begin: D,
			relevance: 0
		},
		NUMBER_RE: D,
		PHRASAL_WORDS_MODE: te,
		QUOTE_STRING_MODE: N,
		REGEXP_MODE: {
			scope: "regexp",
			begin: /\/(?=[^/\n]*\/)/,
			end: /\/[gimuy]*/,
			contains: [M, {
				begin: /\[/,
				end: /\]/,
				relevance: 0,
				contains: [M]
			}]
		},
		RE_STARTERS_RE: A,
		SHEBANG: j,
		TITLE_MODE: {
			scope: "title",
			begin: T,
			relevance: 0
		},
		UNDERSCORE_IDENT_RE: E,
		UNDERSCORE_TITLE_MODE: {
			scope: "title",
			begin: E,
			relevance: 0
		}
	});
	function P(e, t) {
		e.input[e.index - 1] === "." && t.ignoreMatch();
	}
	function se(e, t) {
		e.className !== void 0 && (e.scope = e.className, delete e.className);
	}
	function ce(e, t) {
		t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = P, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, e.relevance === void 0 && (e.relevance = 0));
	}
	function le(e, t) {
		Array.isArray(e.illegal) && (e.illegal = y(...e.illegal));
	}
	function ue(e, t) {
		if (e.match) {
			if (e.begin || e.end) throw Error("begin & end are not supported with match");
			e.begin = e.match, delete e.match;
		}
	}
	function de(e, t) {
		e.relevance === void 0 && (e.relevance = 1);
	}
	var fe = (e, t) => {
		if (!e.beforeMatch) return;
		if (e.starts) throw Error("beforeMatch cannot be used with starts");
		let n = Object.assign({}, e);
		Object.keys(e).forEach((t) => {
			delete e[t];
		}), e.keywords = n.keywords, e.begin = _(n.beforeMatch, m(n.begin)), e.starts = {
			relevance: 0,
			contains: [Object.assign(n, { endsParent: !0 })]
		}, e.relevance = 0, delete n.beforeMatch;
	}, pe = [
		"of",
		"and",
		"for",
		"in",
		"not",
		"or",
		"if",
		"then",
		"parent",
		"list",
		"value"
	], me = "keyword";
	function he(e, t, n = me) {
		let r = Object.create(null);
		return typeof e == "string" ? i(n, e.split(" ")) : Array.isArray(e) ? i(n, e) : Object.keys(e).forEach(function(n) {
			Object.assign(r, he(e[n], t, n));
		}), r;
		function i(e, n) {
			t && (n = n.map((e) => e.toLowerCase())), n.forEach(function(t) {
				let n = t.split("|");
				r[n[0]] = [e, ge(n[0], n[1])];
			});
		}
	}
	function ge(e, t) {
		return t ? Number(t) : +!_e(e);
	}
	function _e(e) {
		return pe.includes(e.toLowerCase());
	}
	var ve = {}, ye = (e) => {
		console.error(e);
	}, be = (e, ...t) => {
		console.log(`WARN: ${e}`, ...t);
	}, F = (e, t) => {
		ve[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), ve[`${e}/${t}`] = !0);
	}, xe = /* @__PURE__ */ Error();
	function Se(e, t, { key: n }) {
		let r = 0, i = e[n], a = {}, o = {};
		for (let e = 1; e <= t.length; e++) o[e + r] = i[e], a[e + r] = !0, r += b(t[e - 1]);
		e[n] = o, e[n]._emit = a, e[n]._multi = !0;
	}
	function Ce(e) {
		if (Array.isArray(e.begin)) {
			if (e.skip || e.excludeBegin || e.returnBegin) throw ye("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), xe;
			if (typeof e.beginScope != "object" || e.beginScope === null) throw ye("beginScope must be object"), xe;
			Se(e, e.begin, { key: "beginScope" }), e.begin = C(e.begin, { joinWith: "" });
		}
	}
	function we(e) {
		if (Array.isArray(e.end)) {
			if (e.skip || e.excludeEnd || e.returnEnd) throw ye("skip, excludeEnd, returnEnd not compatible with endScope: {}"), xe;
			if (typeof e.endScope != "object" || e.endScope === null) throw ye("endScope must be object"), xe;
			Se(e, e.end, { key: "endScope" }), e.end = C(e.end, { joinWith: "" });
		}
	}
	function Te(e) {
		e.scope && typeof e.scope == "object" && e.scope !== null && (e.beginScope = e.scope, delete e.scope);
	}
	function Ee(e) {
		Te(e), typeof e.beginScope == "string" && (e.beginScope = { _wrap: e.beginScope }), typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }), Ce(e), we(e);
	}
	function De(e) {
		function t(t, n) {
			return new RegExp(p(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""));
		}
		class n {
			constructor() {
				this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
			}
			addRule(e, t) {
				t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += b(e) + 1;
			}
			compile() {
				this.regexes.length === 0 && (this.exec = () => null);
				let e = this.regexes.map((e) => e[1]);
				this.matcherRe = t(C(e, { joinWith: "|" }), !0), this.lastIndex = 0;
			}
			exec(e) {
				this.matcherRe.lastIndex = this.lastIndex;
				let t = this.matcherRe.exec(e);
				if (!t) return null;
				let n = t.findIndex((e, t) => t > 0 && e !== void 0), r = this.matchIndexes[n];
				return t.splice(0, n), Object.assign(t, r);
			}
		}
		class r {
			constructor() {
				this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
			}
			getMatcher(e) {
				if (this.multiRegexes[e]) return this.multiRegexes[e];
				let t = new n();
				return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), this.multiRegexes[e] = t, t;
			}
			resumingScanAtSamePosition() {
				return this.regexIndex !== 0;
			}
			considerAll() {
				this.regexIndex = 0;
			}
			addRule(e, t) {
				this.rules.push([e, t]), t.type === "begin" && this.count++;
			}
			exec(e) {
				let t = this.getMatcher(this.regexIndex);
				t.lastIndex = this.lastIndex;
				let n = t.exec(e);
				if (this.resumingScanAtSamePosition() && !(n && n.index === this.lastIndex)) {
					let t = this.getMatcher(0);
					t.lastIndex = this.lastIndex + 1, n = t.exec(e);
				}
				return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n;
			}
		}
		function i(e) {
			let t = new r();
			return e.contains.forEach((e) => t.addRule(e.begin, {
				rule: e,
				type: "begin"
			})), e.terminatorEnd && t.addRule(e.terminatorEnd, { type: "end" }), e.illegal && t.addRule(e.illegal, { type: "illegal" }), t;
		}
		function o(n, r) {
			let a = n;
			if (n.isCompiled) return a;
			[
				se,
				ue,
				Ee,
				fe
			].forEach((e) => e(n, r)), e.compilerExtensions.forEach((e) => e(n, r)), n.__beforeBegin = null, [
				ce,
				le,
				de
			].forEach((e) => e(n, r)), n.isCompiled = !0;
			let s = null;
			return typeof n.keywords == "object" && n.keywords.$pattern && (n.keywords = Object.assign({}, n.keywords), s = n.keywords.$pattern, delete n.keywords.$pattern), s ||= /\w+/, n.keywords &&= he(n.keywords, e.case_insensitive), a.keywordPatternRe = t(s, !0), r && (n.begin ||= /\B|\b/, a.beginRe = t(a.begin), !n.end && !n.endsWithParent && (n.end = /\B|\b/), n.end && (a.endRe = t(a.end)), a.terminatorEnd = p(a.end) || "", n.endsWithParent && r.terminatorEnd && (a.terminatorEnd += (n.end ? "|" : "") + r.terminatorEnd)), n.illegal && (a.illegalRe = t(n.illegal)), n.contains ||= [], n.contains = [].concat(...n.contains.map(function(e) {
				return ke(e === "self" ? n : e);
			})), n.contains.forEach(function(e) {
				o(e, a);
			}), n.starts && o(n.starts, r), a.matcher = i(a), a;
		}
		if (e.compilerExtensions ||= [], e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
		return e.classNameAliases = a(e.classNameAliases || {}), o(e);
	}
	function Oe(e) {
		return e ? e.endsWithParent || Oe(e.starts) : !1;
	}
	function ke(e) {
		return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function(t) {
			return a(e, { variants: null }, t);
		})), e.cachedVariants ? e.cachedVariants : Oe(e) ? a(e, { starts: e.starts ? a(e.starts) : null }) : Object.isFrozen(e) ? a(e) : e;
	}
	var Ae = "11.12.0", je = class extends Error {
		constructor(e, t) {
			super(e), this.name = "HTMLInjectionError", this.html = t;
		}
	}, Me = i, Ne = a, I = Symbol("nomatch"), Pe = 7, Fe = function(e) {
		let t = Object.create(null), i = Object.create(null), a = [], o = !0, s = "Could not find the language '{}', did you forget to load/include a language module?", c = {
			disableAutodetect: !0,
			name: "Plain text",
			contains: []
		}, l = {
			ignoreUnescapedHTML: !1,
			throwUnescapedHTML: !1,
			noHighlightRe: /^(no-?highlight)$/i,
			languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
			classPrefix: "hljs-",
			cssSelector: "pre code",
			languages: null,
			__emitter: f
		};
		function u(e) {
			return l.noHighlightRe.test(e);
		}
		function d(e) {
			let t = e.className + " ";
			t += e.parentNode ? e.parentNode.className : "";
			let n = l.languageDetectRe.exec(t);
			if (n) {
				let t = ee(n[1]);
				return t || (be(s.replace("{}", n[1])), be("Falling back to no-highlight mode for this block.", e)), t ? n[1] : "no-highlight";
			}
			return t.split(/\s+/).find((e) => u(e) || ee(e));
		}
		function p(e, t, n) {
			let r = "", i = "";
			typeof t == "object" ? (r = e, n = t.ignoreIllegals, i = t.language) : (F("10.7.0", "highlight(lang, code, ...args) has been deprecated."), F("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), i = e, r = t), n === void 0 && (n = !0);
			let a = {
				code: r,
				language: i
			};
			ae("before:highlight", a);
			let o = a.result ? a.result : v(a.language, a.code, n);
			return o.code = a.code, ae("after:highlight", o), o;
		}
		function v(e, n, i, a) {
			let c = Object.create(null);
			function u(e, t) {
				return e.keywords[t];
			}
			function d() {
				if (!A.keywords) {
					M.addText(N);
					return;
				}
				let e = 0;
				A.keywordPatternRe.lastIndex = 0;
				let t = A.keywordPatternRe.exec(N), n = "";
				for (; t;) {
					n += N.substring(e, t.index);
					let r = D.case_insensitive ? t[0].toLowerCase() : t[0], i = u(A, r);
					if (i) {
						let [e, a] = i;
						if (M.addText(n), n = "", c[r] = (c[r] || 0) + 1, c[r] <= Pe && (te += a), e.startsWith("_")) n += t[0];
						else {
							let n = D.classNameAliases[e] || e;
							m(t[0], n);
						}
					} else n += t[0];
					e = A.keywordPatternRe.lastIndex, t = A.keywordPatternRe.exec(N);
				}
				n += N.substring(e), M.addText(n);
			}
			function f() {
				if (N === "") return;
				let e = null;
				if (typeof A.subLanguage == "string") {
					if (!t[A.subLanguage]) {
						M.addText(N);
						return;
					}
					e = v(A.subLanguage, N, !0, j[A.subLanguage]), j[A.subLanguage] = e._top;
				} else e = S(N, A.subLanguage.length ? A.subLanguage : null);
				A.relevance > 0 && (te += e.relevance), M.__addSublanguage(e._emitter, e.language);
			}
			function p() {
				A.subLanguage == null ? d() : f(), N = "";
			}
			function m(e, t) {
				e !== "" && (M.startScope(t), M.addText(e), M.endScope());
			}
			function h(e, t) {
				let n = 1, r = t.length - 1;
				for (; n <= r;) {
					if (!e._emit[n]) {
						n++;
						continue;
					}
					let r = D.classNameAliases[e[n]] || e[n], i = t[n];
					r ? m(i, r) : (N = i, d(), N = ""), n++;
				}
			}
			function g(e, t) {
				return e.scope && typeof e.scope == "string" && M.openNode(D.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (m(N, D.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), N = "") : e.beginScope._multi && (h(e.beginScope, t), N = "")), A = Object.create(e, { parent: { value: A } }), A;
			}
			function _(e, t, n) {
				let i = x(e.endRe, n);
				if (i) {
					if (e["on:end"]) {
						let n = new r(e);
						e["on:end"](t, n), n.isMatchIgnored && (i = !1);
					}
					if (i) {
						for (; e.endsParent && e.parent;) e = e.parent;
						return e;
					}
				}
				if (e.endsWithParent) return _(e.parent, t, n);
			}
			function y(e) {
				return A.matcher.regexIndex === 0 ? (N += e[0], 1) : (ie = !0, 0);
			}
			function b(e) {
				let t = e[0], n = e.rule, i = new r(n), a = [n.__beforeBegin, n["on:begin"]];
				for (let n of a) if (n && (n(e, i), i.isMatchIgnored)) return y(t);
				return n.skip ? N += t : (n.excludeBegin && (N += t), p(), !n.returnBegin && !n.excludeBegin && (N = t)), g(n, e), n.returnBegin ? 0 : t.length;
			}
			function C(e) {
				let t = e[0], r = n.substring(e.index), i = _(A, e, r);
				if (!i) return I;
				let a = A;
				A.endScope && A.endScope._wrap ? (p(), m(t, A.endScope._wrap)) : A.endScope && A.endScope._multi ? (p(), h(A.endScope, e)) : a.skip ? N += t : (a.returnEnd || a.excludeEnd || (N += t), p(), a.excludeEnd && (N = t));
				do
					A.scope && M.closeNode(), !A.skip && !A.subLanguage && (te += A.relevance), A = A.parent;
				while (A !== i.parent);
				return i.starts && g(i.starts, e), a.returnEnd ? 0 : t.length;
			}
			function w() {
				let e = [];
				for (let t = A; t !== D; t = t.parent) t.scope && e.unshift(t.scope);
				e.forEach((e) => M.openNode(e));
			}
			let T = {};
			function E(t, r) {
				let a = r && r[0];
				if (N += t, a == null) return p(), 0;
				if (T.type === "begin" && r.type === "end" && T.index === r.index && a === "") {
					if (N += n.slice(r.index, r.index + 1), !o) {
						let t = /* @__PURE__ */ Error(`0 width match regex (${e})`);
						throw t.languageName = e, t.badRule = T.rule, t;
					}
					return 1;
				}
				if (T = r, r.type === "begin") return b(r);
				if (r.type === "illegal" && !i) {
					let e = /* @__PURE__ */ Error("Illegal lexeme \"" + a + "\" for mode \"" + (A.scope || "<unnamed>") + "\"");
					throw e.mode = A, e;
				}
				if (r.type === "end") {
					let e = C(r);
					if (e !== I) return e;
				}
				if (r.type === "illegal" && a === "") return r.index === n.length || (N += "\n"), 1;
				if (re > 1e5 && re > r.index * 3) throw /* @__PURE__ */ Error("potential infinite loop, way more iterations than matches");
				return N += a, a.length;
			}
			let D = ee(e);
			if (!D) throw ye(s.replace("{}", e)), Error("Unknown language: \"" + e + "\"");
			let O = De(D), k = "", A = a || O, j = {}, M = new l.__emitter(l);
			w();
			let N = "", te = 0, ne = 0, re = 0, ie = !1;
			try {
				if (D.__emitTokens) D.__emitTokens(n, M);
				else {
					for (A.matcher.considerAll();;) {
						re++, ie ? ie = !1 : A.matcher.considerAll(), A.matcher.lastIndex = ne;
						let e = A.matcher.exec(n);
						if (!e) break;
						let t = E(n.substring(ne, e.index), e);
						ne = e.index + t;
					}
					E(n.substring(ne));
				}
				return M.finalize(), k = M.toHTML(), {
					language: e,
					value: k,
					relevance: te,
					illegal: !1,
					_emitter: M,
					_top: A
				};
			} catch (t) {
				if (t.message && t.message.includes("Illegal")) return {
					language: e,
					value: Me(n),
					illegal: !0,
					relevance: 0,
					_illegalBy: {
						message: t.message,
						index: ne,
						context: n.slice(ne - 100, ne + 100),
						mode: t.mode,
						resultSoFar: k
					},
					_emitter: M
				};
				if (o) return {
					language: e,
					value: Me(n),
					illegal: !1,
					relevance: 0,
					errorRaised: t,
					_emitter: M,
					_top: A
				};
				throw t;
			}
		}
		function b(e) {
			let t = {
				value: Me(e),
				illegal: !1,
				relevance: 0,
				_top: c,
				_emitter: new l.__emitter(l)
			};
			return t._emitter.addText(e), t;
		}
		function S(e, n) {
			n = n || l.languages || Object.keys(t);
			let r = b(e), i = n.filter(ee).filter(te).map((t) => v(t, e, !1));
			i.unshift(r);
			let [a, o] = i.sort((e, t) => {
				if (e.relevance !== t.relevance) return t.relevance - e.relevance;
				if (e.language && t.language) {
					if (ee(e.language).supersetOf === t.language) return 1;
					if (ee(t.language).supersetOf === e.language) return -1;
				}
				return 0;
			}), s = a;
			return s.secondBest = o, s;
		}
		function C(e, t, n) {
			let r = t && i[t] || n;
			e.classList.add("hljs"), e.classList.add(`language-${r}`);
		}
		function w(e) {
			let t = null, n = d(e);
			if (u(n)) return;
			if (ae("before:highlightElement", {
				el: e,
				language: n
			}), e.dataset.highlighted) {
				console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", e);
				return;
			}
			if (e.children.length > 0 && (l.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), l.throwUnescapedHTML)) throw new je("One of your code blocks includes unescaped HTML.", e.innerHTML);
			t = e;
			let r = t.textContent, i = n ? p(r, {
				language: n,
				ignoreIllegals: !0
			}) : S(r);
			e.innerHTML = i.value, e.dataset.highlighted = "yes", C(e, n, i.language), e.result = {
				language: i.language,
				re: i.relevance,
				relevance: i.relevance
			}, i.secondBest && (e.secondBest = {
				language: i.secondBest.language,
				relevance: i.secondBest.relevance
			}), ae("after:highlightElement", {
				el: e,
				result: i,
				text: r
			});
		}
		function T(e) {
			l = Ne(l, e);
		}
		let E = () => {
			k(), F("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
		};
		function D() {
			k(), F("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
		}
		let O = !1;
		function k() {
			function e() {
				k();
			}
			if (document.readyState === "loading") {
				O || window.addEventListener("DOMContentLoaded", e, !1), O = !0;
				return;
			}
			document.querySelectorAll(l.cssSelector).forEach(w);
		}
		function A(n, r) {
			let i = null;
			try {
				i = r(e);
			} catch (e) {
				if (ye("Language definition for '{}' could not be registered.".replace("{}", n)), o) ye(e);
				else throw e;
				i = c;
			}
			i.name || (i.name = n), t[n] = i, i.rawDefinition = r.bind(null, e), i.aliases && N(i.aliases, { languageName: n });
		}
		function j(e) {
			delete t[e];
			for (let t of Object.keys(i)) i[t] === e && delete i[t];
		}
		function M() {
			return Object.keys(t);
		}
		function ee(e) {
			return e = (e || "").toLowerCase(), t[e] || t[i[e]];
		}
		function N(e, { languageName: t }) {
			typeof e == "string" && (e = [e]), e.forEach((e) => {
				i[e.toLowerCase()] = t;
			});
		}
		function te(e) {
			let t = ee(e);
			return t && !t.disableAutodetect;
		}
		function ne(e) {
			e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = (t) => {
				e["before:highlightBlock"](Object.assign({ block: t.el }, t));
			}), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = (t) => {
				e["after:highlightBlock"](Object.assign({ block: t.el }, t));
			});
		}
		function re(e) {
			ne(e), a.push(e);
		}
		function ie(e) {
			let t = a.indexOf(e);
			t !== -1 && a.splice(t, 1);
		}
		function ae(e, t) {
			let n = e;
			a.forEach(function(e) {
				e[n] && e[n](t);
			});
		}
		function P(e) {
			return F("10.7.0", "highlightBlock will be removed entirely in v12.0"), F("10.7.0", "Please use highlightElement now."), w(e);
		}
		Object.assign(e, {
			highlight: p,
			highlightAuto: S,
			highlightAll: k,
			highlightElement: w,
			highlightBlock: P,
			configure: T,
			initHighlighting: E,
			initHighlightingOnLoad: D,
			registerLanguage: A,
			unregisterLanguage: j,
			listLanguages: M,
			getLanguage: ee,
			registerAliases: N,
			autoDetection: te,
			inherit: Ne,
			addPlugin: re,
			removePlugin: ie
		}), e.debugMode = function() {
			o = !1;
		}, e.safeMode = function() {
			o = !0;
		}, e.versionString = Ae, e.regex = {
			concat: _,
			lookahead: m,
			either: y,
			optional: g,
			anyNumberOfTimes: h
		};
		for (let e in oe) typeof oe[e] == "object" && n(oe[e]);
		return Object.assign(e, oe), e;
	}, Ie = Fe({});
	Ie.newInstance = () => Fe({}), t.exports = Ie, Ie.HighlightJS = Ie, Ie.default = Ie;
})))())).default;
//#endregion
//#region node_modules/highlight.js/es/languages/xml.js
function Af(e) {
	let t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), r = /[\p{L}0-9._:-]+/u, i = {
		className: "symbol",
		begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
	}, a = {
		begin: /\s/,
		contains: [{
			className: "keyword",
			begin: /#?[a-z_][a-z1-9_-]+/,
			illegal: /\n/
		}]
	}, o = e.inherit(a, {
		begin: /\(/,
		end: /\)/
	}), s = e.inherit(e.APOS_STRING_MODE, { className: "string" }), c = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), l = {
		endsWithParent: !0,
		illegal: /</,
		relevance: 0,
		contains: [{
			className: "attr",
			begin: r,
			relevance: 0
		}, {
			begin: /=\s*/,
			relevance: 0,
			contains: [{
				className: "string",
				endsParent: !0,
				variants: [
					{
						begin: /"/,
						end: /"/,
						contains: [i]
					},
					{
						begin: /'/,
						end: /'/,
						contains: [i]
					},
					{ begin: /[^\s"'=<>`]+/ }
				]
			}]
		}]
	};
	return {
		name: "HTML, XML",
		aliases: [
			"html",
			"xhtml",
			"rss",
			"atom",
			"xjb",
			"xsd",
			"xsl",
			"plist",
			"wsf",
			"svg"
		],
		case_insensitive: !0,
		unicodeRegex: !0,
		contains: [
			{
				className: "meta",
				begin: /<![a-z]/,
				end: />/,
				relevance: 10,
				contains: [
					a,
					c,
					s,
					o,
					{
						begin: /\[/,
						end: /\]/,
						contains: [{
							className: "meta",
							begin: /<![a-z]/,
							end: />/,
							contains: [
								a,
								o,
								c,
								s
							]
						}]
					}
				]
			},
			e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
			{
				begin: /<!\[CDATA\[/,
				end: /\]\]>/,
				relevance: 10
			},
			i,
			{
				className: "meta",
				end: /\?>/,
				variants: [{
					begin: /<\?xml/,
					relevance: 10,
					contains: [c]
				}, { begin: /<\?[a-z][a-z0-9]+/ }]
			},
			{
				className: "tag",
				begin: /<style(?=\s|>)/,
				end: />/,
				keywords: { name: "style" },
				contains: [l],
				starts: {
					end: /<\/style>/,
					returnEnd: !0,
					subLanguage: "css"
				}
			},
			{
				className: "tag",
				begin: /<script(?=\s|>)/,
				end: />/,
				keywords: { name: "script" },
				contains: [l],
				starts: {
					end: /<\/script>/,
					returnEnd: !0,
					subLanguage: "javascript"
				}
			},
			{
				className: "tag",
				begin: /<>|<\/>/
			},
			{
				className: "tag",
				begin: t.concat(/</, t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/)))),
				end: /\/?>/,
				contains: [{
					className: "name",
					begin: n,
					relevance: 0,
					starts: l
				}]
			},
			{
				className: "tag",
				begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
				contains: [{
					className: "name",
					begin: n,
					relevance: 0
				}, {
					begin: />/,
					relevance: 0,
					endsParent: !0
				}]
			}
		]
	};
}
//#endregion
//#region \0plugin-vue:export-helper
var Y = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, jf = {
	name: "App",
	data() {
		return {
			showSource: "",
			section: "basic"
		};
	},
	methods: { toggleSource(e) {
		this.showSource = this.showSource == e ? "" : e;
	} }
}, Mf = {
	id: "app",
	class: "p-8 lg:p-0"
}, Nf = { class: "flex flex-wrap justify-center" }, Pf = { class: "w-full text-center md:w-1/5 md:text-left" }, Ff = { class: "w-full md:w-3/5" };
function If(e, t, n, r, i, a) {
	let o = B("router-link"), s = B("router-view");
	return H(), U("div", Mf, [
		t[9] ||= $o("<a title=\"Full Documentation\" href=\"https://formvuelar.netlify.com/?ref=formvuelar-demo\" target=\"_blank\" class=\"absolute right-0 top-0 m-4 mt-5\" style=\"margin-right:105px;\"><svg class=\"h-8 w-8 text-teal-600\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 296.999 296.999\"><path d=\"M45.432 35.049h-.025a10.474 10.474 0 0 0-7.446 3.085 10.583 10.583 0 0 0-3.128 7.543v159.365c0 5.844 4.773 10.61 10.641 10.625 24.738.059 66.184 5.215 94.776 35.136V84.023c0-1.981-.506-3.842-1.461-5.382-23.467-37.792-68.563-43.534-93.357-43.592zM262.167 205.042V45.676c0-2.852-1.111-5.531-3.128-7.543a10.477 10.477 0 0 0-7.445-3.085h-.026c-24.793.059-69.889 5.801-93.357 43.593-.955 1.54-1.46 3.401-1.46 5.382v166.779c28.592-29.921 70.038-35.077 94.776-35.136 5.867-.015 10.64-4.781 10.64-10.624z\"></path><path d=\"M286.373 71.801h-7.706v133.241c0 14.921-12.157 27.088-27.101 27.125-20.983.05-55.581 4.153-80.084 27.344 42.378-10.376 87.052-3.631 112.512 2.171a10.606 10.606 0 0 0 9.011-2.054 10.567 10.567 0 0 0 3.994-8.301v-168.9c.001-5.859-4.767-10.626-10.626-10.626zM18.332 205.042V71.801h-7.706C4.768 71.801 0 76.568 0 82.427v168.897c0 3.25 1.456 6.276 3.994 8.301a10.598 10.598 0 0 0 9.011 2.054c25.46-5.803 70.135-12.547 112.511-2.171-24.502-23.19-59.1-27.292-80.083-27.342-14.943-.036-27.101-12.203-27.101-27.124z\"></path></svg></a><a rel=\"no-referer\" class=\"absolute right-0 top-0 m-4 mt-6 mr-12\" href=\"https://twitter.com/intent/tweet?text=Check%20out%20FormVuelar%21%20Vue%20form%20components%20done%20right%21&amp;hashtags=formVuelar%2Cvue&amp;url=https%3A%2F%2Fjaniskelemen.github.io%2Fformvuelar&amp;original_referer=https%3A%2F%2Ftwitter.com%2Fshare%3Ftext%3DCheck%2520out%2520FormVuelar%21%2520Vue%2520form%2520components%2520done%2520right%21%26hashtags%3DformVuelar%2Cvue%26url%3Dhttps%3A%2F%2Fjaniskelemen.github.io%2Fformvuelar\" title=\"Share on Twitter\" target=\"_blank\"><svg width=\"56px\" height=\"22px\" viewBox=\"328 355 335 276\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"\n    M 630, 425\n    A 195, 195 0 0 1 331, 600\n    A 142, 142 0 0 0 428, 570\n    A  70,  70 0 0 1 370, 523\n    A  70,  70 0 0 0 401, 521\n    A  70,  70 0 0 1 344, 455\n    A  70,  70 0 0 0 372, 460\n    A  70,  70 0 0 1 354, 370\n    A 195, 195 0 0 0 495, 442\n    A  67,  67 0 0 1 611, 380\n    A 117, 117 0 0 0 654, 363\n    A  65,  65 0 0 1 623, 401\n    A 117, 117 0 0 0 662, 390\n    A  65,  65 0 0 1 630, 425\n    Z\" style=\"fill:#3ba9ee;\"></path></svg></a><a class=\"absolute right-0 top-0 m-4\" href=\"https://github.com/janiskelemen/formvuelar\" title=\"View on Github\"><img alt=\"View on Github\" height=\"40\" src=\"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png\" width=\"40\"></a>", 3),
		t[10] ||= W("h1", { class: "text-center mb-16" }, [W("svg", {
			alt: "FormVuelar",
			class: "h-16 inline",
			fill: "none",
			viewBox: "0 0 340 81",
			xmlns: "http://www.w3.org/2000/svg"
		}, [W("path", {
			d: "M215.057 71.6878c.314 0 .524.2072.628.6215.157.3625.236.8027.236 1.3206 0 .4661-.026.7769-.079.9322-.104 1.6055-.758 2.9002-1.962 3.8842-1.151.9322-2.695 1.3983-4.631 1.3983-3.925 0-6.175-1.9939-6.75-5.9816-1.361 1.8126-2.957 3.2886-4.789 4.4279C195.879 79.4303 193.89 80 191.745 80c-2.774 0-4.893-.751-6.358-2.2529-1.413-1.5536-2.119-3.7806-2.119-6.6808 0-.8804.026-1.5536.078-2.0197l3.061-28.1992c.105-1.5019 1.492-2.2528 4.16-2.2528h1.963c2.669 0 3.925.7509 3.768 2.2528l-2.748 26.1794c-.052.259-.078.6215-.078 1.0876 0 2.5376 1.151 3.8065 3.453 3.8065 1.047 0 2.041-.3367 2.983-1.0099.942-.6733 1.779-1.5278 2.512-2.5636l2.904-27.5c.157-1.5019 1.544-2.2528 4.16-2.2528h2.041c2.617 0 3.873.7509 3.768 2.2528l-.942 8.856c-.419 3.9359-.759 6.8879-1.02 8.8559l-.707 6.8361c-.314 2.3823-.471 3.8065-.471 4.2726 0 .8287.105 1.4242.314 1.7868.21.3107.55.4661 1.021.4661.261 0 .523-.0259.785-.0777.261-.1036.523-.1554.784-.1554zM247.744 68.5805c.471 0 .811.2848 1.02.8545.262.5179.393 1.217.393 2.0975 0 1.7608-.393 3.2109-1.178 4.3502-.837 1.2948-2.433 2.3047-4.788 3.0297-2.354.6733-4.552 1.0099-6.593 1.0099-4.867 0-8.661-1.3206-11.382-3.9619-2.668-2.693-4.003-6.7843-4.003-12.274 0-7.4576 1.596-13.5687 4.788-18.3333 3.192-4.7646 7.902-7.1469 14.129-7.1469 3.14 0 5.625.5956 7.457 1.7867 1.831 1.1394 3.087 2.5377 3.768 4.1949.732 1.6573 1.099 3.2886 1.099 4.8941 0 4.4021-1.466 7.8719-4.396 10.4096-2.93 2.5377-6.698 3.8065-11.303 3.8065-2.041 0-3.899-.1295-5.573-.3884 0 3.4181.602 5.8262 1.805 7.2245 1.204 1.3466 2.957 2.0198 5.259 2.0198 1.57 0 2.904-.233 4.003-.6991 1.099-.4661 2.329-1.1135 3.69-1.9421.889-.6215 1.491-.9322 1.805-.9322zm-8.242-22.606c-4.082 0-6.698 3.6512-7.849 10.9534h3.061c2.512 0 4.553-.5438 6.123-1.6313 1.622-1.0876 2.433-2.7707 2.433-5.0495 0-1.3465-.34-2.3823-1.021-3.1073-.68-.7768-1.596-1.1653-2.747-1.1653zM265.962 79.9223c-2.564 0-4.605-.6992-6.122-2.0975-1.518-1.3983-2.276-3.5993-2.276-6.6031 0-.4143.052-1.1393.157-2.1751l4.866-41.673c.157-1.4501 1.622-2.1751 4.396-2.1751h1.491c2.774 0 4.082.725 3.925 2.1751l-4.867 41.5176c-.052.259-.078.5697-.078.9322 0 1.5537.654 2.3305 1.962 2.3305.314 0 .68-.0518 1.099-.1553.419-.1554.733-.2331.942-.2331.366 0 .654.2331.863.6992.21.4661.314 1.0357.314 1.709 0 .4143-.026.725-.078.9322-.157 1.6055-.837 2.8225-2.041 3.6511-1.151.7769-2.669 1.1653-4.553 1.1653zM287.747 80c-3.506 0-6.07-1.5278-7.693-4.5834-1.622-3.0555-2.433-6.9656-2.433-11.7302 0-1.0876.105-2.7707.314-5.0494.733-6.5254 2.433-11.549 5.102-15.0707 2.669-3.5734 5.913-5.3601 9.733-5.3601 1.884 0 3.454.3884 4.71 1.1652 1.256.7769 2.381 1.735 3.375 2.8743.367-1.0358.681-1.7608.942-2.1751.262-.4661.654-.8286 1.178-1.0876.575-.2589 1.386-.3884 2.433-.3884h.785c2.407 0 3.611.6215 3.611 1.8644-.053.7251-.131 1.6055-.236 2.6412-.105.984-.209 1.9421-.314 2.8743l-.392 3.1851-1.256 12.1963c-.157 1.2947-.314 2.693-.471 4.1949-.157 1.4501-.288 2.7966-.393 4.0396-.052 1.6054.393 2.4082 1.335 2.4082.261 0 .523-.0259.785-.0777.261-.1036.523-.1554.785-.1554.314 0 .549.2072.706.6215.157.4143.236.9063.236 1.476 0 1.8644-.602 3.3404-1.806 4.4279-1.151 1.0876-2.799 1.6314-4.945 1.6314-4.029 0-6.279-2.0716-6.75-6.2147C294.942 77.9025 291.829 80 287.747 80zm3.768-8.0014c1.203 0 2.302-.5438 3.296-1.6314 1.047-1.1394 1.884-2.7448 2.512-4.8164l1.334-12.5847c.21-1.7091.471-3.3145.785-4.8164-.575-.6215-1.203-1.1135-1.883-1.476-.681-.4143-1.492-.6215-2.434-.6215-2.093 0-3.715 1.0099-4.866 3.0297-1.152 2.0198-1.963 5.2048-2.434 9.5551-.209 2.2787-.314 3.9618-.314 5.0494 0 5.5414 1.335 8.3122 4.004 8.3122zM319.807 79.5339c-2.773 0-4.081-.7251-3.924-2.1752l2.747-25.7909c.261-2.2788.392-4.3503.392-6.2147 0-.8804-.026-1.7091-.078-2.4859-.053-.8286-.079-1.4242-.079-1.7867.053-.7251.942-1.2689 2.669-1.6314 1.779-.4143 3.323-.6214 4.631-.6214.837 0 1.413.3884 1.727 1.1652.314.725.497 1.5278.55 2.4082.052.8286.104 1.3724.157 1.6313 1.151-1.8126 2.328-3.2368 3.532-4.2726 1.256-1.0357 2.616-1.5536 4.081-1.5536 1.466 0 2.46.3884 2.983 1.1652.576.7251.811 1.5796.707 2.5636-.105 1.0876-.419 2.3564-.942 3.8065-.471 1.4501-.995 2.1751-1.57 2.1751-.314 0-.837-.1035-1.57-.3107-.68-.2589-1.361-.3884-2.041-.3884-1.099 0-2.172.4402-3.218 1.3206-.994.8804-1.701 1.8385-2.119 2.8743l-2.748 25.9463c-.157 1.4501-1.622 2.1752-4.395 2.1752h-1.492zM3.85312 80.154c-2.618 0-3.85-.7187-3.696-2.156l5.159-49.126c.10267-.9754.385-1.6684.847-2.079.462-.462 1.12933-.693 2.002-.693H28.9551c1.1294 0 1.694.7956 1.694 2.387l-.077.924-.231 1.925c-.1026 1.1806-.3593 2.0276-.77 2.541-.3593.5133-.8726.77-1.54.77h-13.167l-1.386 13.552h12.243c1.1294 0 1.694.7956 1.694 2.387l-.077.924-.231 1.925c-.1026 1.1806-.3593 2.0276-.77 2.541-.3593.5133-.8726.77-1.54.77h-12.243l-2.233 21.252c-.154 1.4373-1.53998 2.156-4.15798 2.156h-2.31zM43.4967 80.539c-4.466 0-7.8283-1.3604-10.087-4.081-2.2587-2.772-3.388-6.8017-3.388-12.089 0-1.4374.077-2.926.231-4.466.7187-6.7247 2.541-11.858 5.467-15.4 2.9773-3.542 7.007-5.313 12.089-5.313 4.4147 0 7.7513 1.386 10.01 4.158 2.2587 2.7206 3.388 6.7246 3.388 12.012 0 1.386-.077 2.9003-.231 4.543-.7187 6.7246-2.5667 11.858-5.544 15.4-2.926 3.4906-6.9043 5.236-11.935 5.236zm.77-7.7c1.9507 0 3.465-1.001 4.543-3.003 1.078-2.0534 1.8737-5.39 2.387-10.01.2053-1.7967.308-3.5164.308-5.159 0-2.7207-.385-4.697-1.155-5.929-.7187-1.232-1.848-1.848-3.388-1.848-1.9507 0-3.465 1.001-4.543 3.003-1.078 2.002-1.848 5.313-2.31 9.933-.2053 1.848-.308 3.619-.308 5.313 0 2.7206.3593 4.697 1.078 5.929.7187 1.1806 1.848 1.771 3.388 1.771zM68.488 80.154c-2.7207 0-4.004-.7187-3.85-2.156l2.695-25.564c.2567-2.2587.385-4.312.385-6.16 0-.8727-.0257-1.694-.077-2.464-.0513-.8214-.077-1.4117-.077-1.771.0513-.7187.924-1.2577 2.618-1.617 1.7453-.4107 3.2597-.616 4.543-.616.8213 0 1.386.385 1.694 1.155.308.7186.4877 1.5143.539 2.387.0513.8213.1027 1.3603.154 1.617 1.1293-1.7967 2.2843-3.2084 3.465-4.235 1.232-1.0267 2.5667-1.54 4.004-1.54 1.4373 0 2.4127.385 2.926 1.155.5647.7186.7957 1.5656.693 2.541-.1027 1.078-.4107 2.3356-.924 3.773-.462 1.4373-.9753 2.156-1.54 2.156-.308 0-.8213-.1027-1.54-.308-.6673-.2567-1.3347-.385-2.002-.385-1.078 0-2.1303.4363-3.157 1.309-.9753.8726-1.6683 1.8223-2.079 2.849l-2.695 25.718c-.154 1.4373-1.5913 2.156-4.312 2.156h-1.463zM137.473 72.377c.308 0 .539.2053.693.616.154.3593.231.8213.231 1.386 0 1.8993-.59 3.388-1.771 4.466-1.129 1.078-2.746 1.617-4.851 1.617-2.053 0-3.721-.616-5.005-1.848-1.283-1.232-1.925-3.2597-1.925-6.083 0-.308.257-3.2084.77-8.701l1.155-11.396c.052-.3594.077-.847.077-1.463 0-2.5154-1.052-3.773-3.157-3.773-.975 0-1.925.308-2.849.924-.872.616-1.642 1.386-2.31 2.31l-2.926 27.566c-.102 1.4373-1.463 2.156-4.081 2.156h-1.925c-2.618 0-3.85-.7187-3.696-2.156l2.695-25.564c.052-.308.077-.7444.077-1.309 0-1.2834-.256-2.2587-.77-2.926-.513-.6674-1.36-1.001-2.541-1.001-1.078 0-2.079.385-3.003 1.155-.924.7186-1.668 1.5143-2.233 2.387l-2.8486 27.258c-.154 1.4373-1.5143 2.156-4.081 2.156h-2.002c-2.5667 0-3.7987-.7187-3.696-2.156l2.772-25.564c.2567-2.618.385-4.928.385-6.93 0-.8727-.0257-1.5657-.077-2.079-.0514-.5134-.0514-.924 0-1.232.0513-.8214.9753-1.4117 2.772-1.771 1.848-.4107 3.4137-.616 4.697-.616.8727 0 1.4373.308 1.694.924.2566.616.3846 1.3603.3846 2.233.052.8726.103 1.54.154 2.002 1.284-1.694 2.824-3.08 4.62-4.158 1.797-1.078 3.748-1.617 5.852-1.617 2.002 0 3.645.462 4.928 1.386 1.335.924 2.208 2.31 2.618 4.158 1.335-1.6427 2.926-2.9774 4.774-4.004 1.848-1.0267 3.85-1.54 6.006-1.54 2.464 0 4.364.7443 5.698 2.233 1.386 1.4886 2.079 3.7216 2.079 6.699 0 .462-.051 1.2576-.154 2.387l-1.309 13.09-.693 6.853v.308c0 1.232.411 1.848 1.232 1.848.308 0 .591-.0257.847-.077.257-.1027.488-.154.693-.154z",
			fill: "#3C4948"
		}), W("path", {
			d: "M154.098 80c-3.257 0-5.001-.7377-5.234-2.2131l-8.573-42.3515c0-.233-.078-.5048-.233-.8154-.077-.3882-.077-.7376 0-1.0483.078-.6988.62-1.2424 1.628-1.6306 1.086-.4659 2.637-.6989 4.653-.6989h3.373c3.334 0 5.117.9318 5.35 2.7955l3.688 30.1214h.349l28.005-61.36365C187.724.93182 189.701 0 193.036 0h3.256c3.955 0 5.854.77651 5.699 2.32954l-.581 1.98012-34.751 73.47724C166.116 79.2623 164.178 80 160.844 80h-6.746z",
			fill: "#38A89D"
		})])], -1),
		W("div", Nf, [W("div", Pf, [
			G(o, {
				to: "/",
				class: "button-link md:border-l-2 md:border-b-0 md:flex"
			}, {
				default: z(() => [...t[0] ||= [K(" Basic ", -1)]]),
				_: 1
			}),
			G(o, {
				to: "/prefilled",
				class: "button-link md:border-l-2 md:border-b-0 md:flex"
			}, {
				default: z(() => [...t[1] ||= [K(" Prefilled ", -1)]]),
				_: 1
			}),
			G(o, {
				to: "/advancedselects",
				class: "button-link md:border-l-2 md:border-b-0 md:flex"
			}, {
				default: z(() => [...t[2] ||= [K(" Selects ", -1)]]),
				_: 1
			}),
			G(o, {
				to: "/tags",
				class: "button-link md:border-l-2 md:border-b-0 md:flex"
			}, {
				default: z(() => [...t[3] ||= [K(" Tags ", -1)]]),
				_: 1
			}),
			G(o, {
				to: "/nestedcheckbox",
				class: "button-link md:border-l-2 md:border-b-0 md:flex"
			}, {
				default: z(() => [...t[4] ||= [K(" Multi Checkbox ", -1)]]),
				_: 1
			}),
			G(o, {
				to: "/upload",
				class: "button-link md:border-l-2 md:border-b-0 md:flex"
			}, {
				default: z(() => [...t[5] ||= [K(" Upload ", -1)]]),
				_: 1
			}),
			G(o, {
				to: "/multiupload",
				class: "button-link md:border-l-2 md:border-b-0 md:flex"
			}, {
				default: z(() => [...t[6] ||= [K(" Multi Upload ", -1)]]),
				_: 1
			}),
			G(o, {
				to: "/dropzone",
				class: "button-link md:border-l-2 md:border-b-0 md:flex"
			}, {
				default: z(() => [...t[7] ||= [K(" Dropzone ", -1)]]),
				_: 1
			}),
			G(o, {
				to: "/datepicker",
				class: "button-link md:border-l-2 md:border-b-0 md:flex"
			}, {
				default: z(() => [...t[8] ||= [K(" Date Picker ", -1)]]),
				_: 1
			})
		]), W("div", Ff, [G(s)])])
	]);
}
var Lf = /*#__PURE__*/ Y(jf, [["render", If]]);
//#endregion
//#region node_modules/axios/lib/helpers/bind.js
function Rf(e, t) {
	return function() {
		return e.apply(t, arguments);
	};
}
//#endregion
//#region node_modules/axios/lib/utils.js
var { toString: zf } = Object.prototype, { getPrototypeOf: Bf } = Object, { iterator: Vf, toStringTag: Hf } = Symbol, Uf = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Wf = (e, t) => {
	let n = e, r = [];
	for (; n != null && n !== Object.prototype;) {
		if (r.indexOf(n) !== -1) return !1;
		if (r.push(n), Uf(n, t)) return !0;
		n = Bf(n);
	}
	return !1;
}, Gf = (e, t) => e != null && Wf(e, t) ? e[t] : void 0, Kf = ((e) => (t) => {
	let n = zf.call(t);
	return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(Object.create(null)), qf = (e) => (e = e.toLowerCase(), (t) => Kf(t) === e), Jf = (e) => (t) => typeof t === e, { isArray: Yf } = Array, Xf = Jf("undefined");
function Zf(e) {
	return e !== null && !Xf(e) && e.constructor !== null && !Xf(e.constructor) && tp(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var Qf = qf("ArrayBuffer");
function $f(e) {
	let t;
	return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Qf(e.buffer), t;
}
var ep = Jf("string"), tp = Jf("function"), np = Jf("number"), rp = (e) => typeof e == "object" && !!e, ip = (e) => e === !0 || e === !1, ap = (e) => {
	if (!rp(e)) return !1;
	let t = Bf(e);
	return (t === null || t === Object.prototype || Bf(t) === null) && !Wf(e, Hf) && !Wf(e, Vf);
}, op = (e) => {
	if (!rp(e) || Zf(e)) return !1;
	try {
		return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
	} catch {
		return !1;
	}
}, sp = qf("Date"), cp = qf("File"), lp = (e) => !!(e && e.uri !== void 0), up = (e) => e && e.getParts !== void 0, dp = qf("Blob"), fp = qf("FileList"), pp = (e) => rp(e) && tp(e.pipe);
function mp() {
	return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var hp = mp(), gp = hp.FormData === void 0 ? void 0 : hp.FormData, _p = (e) => {
	if (!e) return !1;
	if (gp && e instanceof gp) return !0;
	let t = Bf(e);
	if (!t || t === Object.prototype || !tp(e.append)) return !1;
	let n = Kf(e);
	return n === "formdata" || n === "object" && tp(e.toString) && e.toString() === "[object FormData]";
}, vp = qf("URLSearchParams"), [yp, bp, xp, Sp] = [
	"ReadableStream",
	"Request",
	"Response",
	"Headers"
].map(qf), Cp = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wp(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e == null) return;
	let r, i;
	if (typeof e != "object" && (e = [e]), Yf(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
	else {
		if (Zf(e)) return;
		let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
		for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
	}
}
function Tp(e, t) {
	if (Zf(e)) return null;
	t = t.toLowerCase();
	let n = Object.keys(e), r = n.length, i;
	for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
	return null;
}
var Ep = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Dp = (e) => !Xf(e) && e !== Ep;
function Op(...e) {
	let { caseless: t, skipUndefined: n } = Dp(this) && this || {}, r = {}, i = (e, i) => {
		if (i === "__proto__" || i === "constructor" || i === "prototype") return;
		let a = t && typeof i == "string" && Tp(r, i) || i, o = Uf(r, a) ? r[a] : void 0;
		ap(o) && ap(e) ? r[a] = Op(o, e) : ap(e) ? r[a] = Op({}, e) : Yf(e) ? r[a] = e.slice() : (!n || !Xf(e)) && (r[a] = e);
	};
	for (let t = 0, n = e.length; t < n; t++) {
		let n = e[t];
		if (!n || Zf(n) || (wp(n, i), typeof n != "object" || Yf(n))) continue;
		let r = Object.getOwnPropertySymbols(n);
		for (let e = 0; e < r.length; e++) {
			let t = r[e];
			Bp.call(n, t) && i(n[t], t);
		}
	}
	return r;
}
var kp = (e, t, n, { allOwnKeys: r } = {}) => (wp(t, (t, r) => {
	n && tp(t) ? Object.defineProperty(e, r, {
		__proto__: null,
		value: Rf(t, n),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : Object.defineProperty(e, r, {
		__proto__: null,
		value: t,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}, { allOwnKeys: r }), e), Ap = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), jp = (e, t, n, r) => {
	e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
		__proto__: null,
		value: e,
		writable: !0,
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(e, "super", {
		__proto__: null,
		value: t.prototype
	}), n && Object.assign(e.prototype, n);
}, Mp = (e, t, n, r) => {
	let i, a, o, s = {};
	if (t ||= {}, e == null) return t;
	do {
		for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
		e = n !== !1 && Bf(e);
	} while (e && (!n || n(e, t)) && e !== Object.prototype);
	return t;
}, Np = (e, t, n) => {
	e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
	let r = e.indexOf(t, n);
	return r !== -1 && r === n;
}, Pp = (e) => {
	if (!e) return null;
	if (Yf(e)) return e;
	let t = e.length;
	if (!np(t)) return null;
	let n = Array(t);
	for (; t-- > 0;) n[t] = e[t];
	return n;
}, Fp = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Bf(Uint8Array)), Ip = (e, t) => {
	let n = (e && e[Vf]).call(e), r;
	for (; (r = n.next()) && !r.done;) {
		let n = r.value;
		t.call(e, n[0], n[1]);
	}
}, Lp = (e, t) => {
	let n, r = [];
	for (; (n = e.exec(t)) !== null;) r.push(n);
	return r;
}, Rp = qf("HTMLFormElement"), zp = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
	return t.toUpperCase() + n;
}), { propertyIsEnumerable: Bp } = Object.prototype, Vp = qf("RegExp"), Hp = (e, t) => {
	let n = Object.getOwnPropertyDescriptors(e), r = {};
	wp(n, (n, i) => {
		let a;
		(a = t(n, i, e)) !== !1 && (r[i] = a || n);
	}), Object.defineProperties(e, r);
}, Up = (e) => {
	Hp(e, (t, n) => {
		if (tp(e) && [
			"arguments",
			"caller",
			"callee"
		].includes(n)) return !1;
		let r = e[n];
		if (tp(r)) {
			if (t.enumerable = !1, "writable" in t) {
				t.writable = !1;
				return;
			}
			t.set ||= () => {
				throw Error("Can not rewrite read-only method '" + n + "'");
			};
		}
	});
}, Wp = (e, t) => {
	let n = {}, r = (e) => {
		e.forEach((e) => {
			n[e] = !0;
		});
	};
	return Yf(e) ? r(e) : r(String(e).split(t)), n;
}, Gp = () => {}, Kp = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function qp(e) {
	return !!(e && tp(e.append) && e[Hf] === "FormData" && e[Vf]);
}
var Jp = (e) => {
	let t = /* @__PURE__ */ new WeakSet(), n = (e) => {
		if (rp(e)) {
			if (t.has(e)) return;
			if (Zf(e)) return e;
			if (!("toJSON" in e)) {
				t.add(e);
				let r = Yf(e) ? [] : {};
				return wp(e, (e, t) => {
					let i = n(e);
					!Xf(i) && (r[t] = i);
				}), t.delete(e), r;
			}
		}
		return e;
	};
	return n(e);
}, Yp = qf("AsyncFunction"), Xp = (e) => e && (rp(e) || tp(e)) && tp(e.then) && tp(e.catch), Zp = ((e, t) => e ? setImmediate : t ? ((e, t) => (Ep.addEventListener("message", ({ source: n, data: r }) => {
	n === Ep && r === e && t.length && t.shift()();
}, !1), (n) => {
	t.push(n), Ep.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", tp(Ep.postMessage)), Qp = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ep) : typeof process < "u" && process.nextTick || Zp, $p = (e) => e != null && tp(e[Vf]), X = {
	isArray: Yf,
	isArrayBuffer: Qf,
	isBuffer: Zf,
	isFormData: _p,
	isArrayBufferView: $f,
	isString: ep,
	isNumber: np,
	isBoolean: ip,
	isObject: rp,
	isPlainObject: ap,
	isEmptyObject: op,
	isReadableStream: yp,
	isRequest: bp,
	isResponse: xp,
	isHeaders: Sp,
	isUndefined: Xf,
	isDate: sp,
	isFile: cp,
	isReactNativeBlob: lp,
	isReactNative: up,
	isBlob: dp,
	isRegExp: Vp,
	isFunction: tp,
	isStream: pp,
	isURLSearchParams: vp,
	isTypedArray: Fp,
	isFileList: fp,
	forEach: wp,
	merge: Op,
	extend: kp,
	trim: Cp,
	stripBOM: Ap,
	inherits: jp,
	toFlatObject: Mp,
	kindOf: Kf,
	kindOfTest: qf,
	endsWith: Np,
	toArray: Pp,
	forEachEntry: Ip,
	matchAll: Lp,
	isHTMLForm: Rp,
	hasOwnProperty: Uf,
	hasOwnProp: Uf,
	hasOwnInPrototypeChain: Wf,
	getSafeProp: Gf,
	reduceDescriptors: Hp,
	freezeMethods: Up,
	toObjectSet: Wp,
	toCamelCase: zp,
	noop: Gp,
	toFiniteNumber: Kp,
	findKey: Tp,
	global: Ep,
	isContextDefined: Dp,
	isSpecCompliantForm: qp,
	toJSONObject: Jp,
	isAsyncFn: Yp,
	isThenable: Xp,
	setImmediate: Zp,
	asap: Qp,
	isIterable: $p,
	isSafeIterable: (e) => e != null && Wf(e, Vf) && $p(e)
}, em = X.toObjectSet([
	"age",
	"authorization",
	"content-length",
	"content-type",
	"etag",
	"expires",
	"from",
	"host",
	"if-modified-since",
	"if-unmodified-since",
	"last-modified",
	"location",
	"max-forwards",
	"proxy-authorization",
	"referer",
	"retry-after",
	"user-agent"
]), tm = (e) => {
	let t = {}, n, r, i;
	return e && e.split("\n").forEach(function(e) {
		i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim(), !(!n || t[n] && em[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
	}), t;
};
//#endregion
//#region node_modules/axios/lib/helpers/sanitizeHeaderValue.js
function nm(e) {
	let t = 0, n = e.length;
	for (; t < n;) {
		let n = e.charCodeAt(t);
		if (n !== 9 && n !== 32) break;
		t += 1;
	}
	for (; n > t;) {
		let t = e.charCodeAt(n - 1);
		if (t !== 9 && t !== 32) break;
		--n;
	}
	return t === 0 && n === e.length ? e : e.slice(t, n);
}
var rm = /* @__PURE__ */ RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), im = /* @__PURE__ */ RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function am(e, t) {
	return X.isArray(e) ? e.map((e) => am(e, t)) : nm(String(e).replace(t, ""));
}
var om = (e) => am(e, rm), sm = (e) => am(e, im);
function cm(e) {
	let t = Object.create(null);
	return X.forEach(e.toJSON(), (e, n) => {
		t[n] = sm(e);
	}), t;
}
//#endregion
//#region node_modules/axios/lib/core/AxiosHeaders.js
var lm = Symbol("internals");
function um(e) {
	return e && String(e).trim().toLowerCase();
}
function dm(e) {
	return e === !1 || e == null ? e : X.isArray(e) ? e.map(dm) : om(String(e));
}
function fm(e) {
	let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
	for (; r = n.exec(e);) t[r[1]] = r[2];
	return t;
}
var pm = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function mm(e, t, n, r, i) {
	if (X.isFunction(r)) return r.call(this, t, n);
	if (i && (t = n), X.isString(t)) {
		if (X.isString(r)) return t.indexOf(r) !== -1;
		if (X.isRegExp(r)) return r.test(t);
	}
}
function hm(e) {
	return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function gm(e, t) {
	let n = X.toCamelCase(" " + t);
	[
		"get",
		"set",
		"has"
	].forEach((r) => {
		Object.defineProperty(e, r + n, {
			__proto__: null,
			value: function(e, n, i) {
				return this[r].call(this, t, e, n, i);
			},
			configurable: !0
		});
	});
}
var _m = class {
	constructor(e) {
		e && this.set(e);
	}
	set(e, t, n) {
		let r = this;
		function i(e, t, n) {
			let i = um(t);
			if (!i) return;
			let a = X.findKey(r, i);
			(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = dm(e));
		}
		let a = (e, t) => X.forEach(e, (e, n) => i(e, n, t));
		if (X.isPlainObject(e) || e instanceof this.constructor) a(e, t);
		else if (X.isString(e) && (e = e.trim()) && !pm(e)) a(tm(e), t);
		else if (X.isObject(e) && X.isSafeIterable(e)) {
			let n = Object.create(null), r, i;
			for (let t of e) {
				if (!X.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
				i = t[0], X.hasOwnProp(n, i) ? (r = n[i], n[i] = X.isArray(r) ? [...r, t[1]] : [r, t[1]]) : n[i] = t[1];
			}
			a(n, t);
		} else e != null && i(t, e, n);
		return this;
	}
	get(e, t) {
		if (e = um(e), e) {
			let n = X.findKey(this, e);
			if (n) {
				let e = this[n];
				if (!t) return e;
				if (t === !0) return fm(e);
				if (X.isFunction(t)) return t.call(this, e, n);
				if (X.isRegExp(t)) return t.exec(e);
				throw TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(e, t) {
		if (e = um(e), e) {
			let n = X.findKey(this, e);
			return !!(n && this[n] !== void 0 && (!t || mm(this, this[n], n, t)));
		}
		return !1;
	}
	delete(e, t) {
		let n = this, r = !1;
		function i(e) {
			if (e = um(e), e) {
				let i = X.findKey(n, e);
				i && (!t || mm(n, n[i], i, t)) && (delete n[i], r = !0);
			}
		}
		return X.isArray(e) ? e.forEach(i) : i(e), r;
	}
	clear(e) {
		let t = Object.keys(this), n = t.length, r = !1;
		for (; n--;) {
			let i = t[n];
			(!e || mm(this, this[i], i, e, !0)) && (delete this[i], r = !0);
		}
		return r;
	}
	normalize(e) {
		let t = this, n = {};
		return X.forEach(this, (r, i) => {
			let a = X.findKey(n, i);
			if (a) {
				t[a] = dm(r), delete t[i];
				return;
			}
			let o = e ? hm(i) : String(i).trim();
			o !== i && delete t[i], t[o] = dm(r), n[o] = !0;
		}), this;
	}
	concat(...e) {
		return this.constructor.concat(this, ...e);
	}
	toJSON(e) {
		let t = Object.create(null);
		return X.forEach(this, (n, r) => {
			n != null && n !== !1 && (t[r] = e && X.isArray(n) ? n.join(", ") : n);
		}), t;
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
	}
	getSetCookie() {
		return this.get("set-cookie") || [];
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
	static concat(e, ...t) {
		let n = new this(e);
		return t.forEach((e) => n.set(e)), n;
	}
	static accessor(e) {
		let t = (this[lm] = this[lm] = { accessors: {} }).accessors, n = this.prototype;
		function r(e) {
			let r = um(e);
			t[r] || (gm(n, e), t[r] = !0);
		}
		return X.isArray(e) ? e.forEach(r) : r(e), this;
	}
};
_m.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization"
]), X.reduceDescriptors(_m.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(e) {
			this[n] = e;
		}
	};
}), X.freezeMethods(_m);
//#endregion
//#region node_modules/axios/lib/core/AxiosError.js
var vm = "[REDACTED ****]";
function ym(e) {
	if (X.hasOwnProp(e, "toJSON")) return !0;
	let t = Object.getPrototypeOf(e);
	for (; t && t !== Object.prototype;) {
		if (X.hasOwnProp(t, "toJSON")) return !0;
		t = Object.getPrototypeOf(t);
	}
	return !1;
}
function bm(e, t) {
	let n = new Set(t.map((e) => String(e).toLowerCase())), r = [], i = (e) => {
		if (typeof e != "object" || !e || X.isBuffer(e)) return e;
		if (r.indexOf(e) !== -1) return;
		e instanceof _m && (e = e.toJSON()), r.push(e);
		let t;
		if (X.isArray(e)) t = [], e.forEach((e, n) => {
			let r = i(e);
			X.isUndefined(r) || (t[n] = r);
		});
		else {
			if (!X.isPlainObject(e) && ym(e)) return r.pop(), e;
			t = Object.create(null);
			for (let [r, a] of Object.entries(e)) {
				let e = n.has(r.toLowerCase()) ? vm : i(a);
				X.isUndefined(e) || (t[r] = e);
			}
		}
		return r.pop(), t;
	};
	return i(e);
}
var Z = class e extends Error {
	static from(t, n, r, i, a, o) {
		let s = new e(t.message, n || t.code, r, i, a);
		return s.cause = t, s.name = t.name, t.status != null && s.status == null && (s.status = t.status), o && Object.assign(s, o), s;
	}
	constructor(e, t, n, r, i) {
		super(e), Object.defineProperty(this, "message", {
			__proto__: null,
			value: e,
			enumerable: !0,
			writable: !0,
			configurable: !0
		}), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status);
	}
	toJSON() {
		let e = this.config, t = e && X.hasOwnProp(e, "redact") ? e.redact : void 0, n = X.isArray(t) && t.length > 0 ? bm(e, t) : X.toJSONObject(e);
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: n,
			code: this.code,
			status: this.status
		};
	}
};
Z.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", Z.ERR_BAD_OPTION = "ERR_BAD_OPTION", Z.ECONNABORTED = "ECONNABORTED", Z.ETIMEDOUT = "ETIMEDOUT", Z.ECONNREFUSED = "ECONNREFUSED", Z.ERR_NETWORK = "ERR_NETWORK", Z.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", Z.ERR_DEPRECATED = "ERR_DEPRECATED", Z.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", Z.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", Z.ERR_CANCELED = "ERR_CANCELED", Z.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", Z.ERR_INVALID_URL = "ERR_INVALID_URL", Z.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
function xm(e) {
	return X.isPlainObject(e) || X.isArray(e);
}
function Sm(e) {
	return X.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Cm(e, t, n) {
	return e ? e.concat(t).map(function(e, t) {
		return e = Sm(e), !n && t ? "[" + e + "]" : e;
	}).join(n ? "." : "") : t;
}
function wm(e) {
	return X.isArray(e) && !e.some(xm);
}
var Tm = X.toFlatObject(X, {}, null, function(e) {
	return /^is[A-Z]/.test(e);
});
function Em(e, t, n) {
	if (!X.isObject(e)) throw TypeError("target must be an object");
	t ||= new FormData(), n = X.toFlatObject(n, {
		metaTokens: !0,
		dots: !1,
		indexes: !1
	}, !1, function(e, t) {
		return !X.isUndefined(t[e]);
	});
	let r = n.metaTokens, i = n.visitor || m, a = n.dots, o = n.indexes, s = n.Blob || typeof Blob < "u" && Blob, c = n.maxDepth === void 0 ? 100 : n.maxDepth, l = s && X.isSpecCompliantForm(t), u = [];
	if (!X.isFunction(i)) throw TypeError("visitor must be a function");
	function d(e) {
		if (e === null) return "";
		if (X.isDate(e)) return e.toISOString();
		if (X.isBoolean(e)) return e.toString();
		if (!l && X.isBlob(e)) throw new Z("Blob is not supported. Use a Buffer instead.");
		return X.isArrayBuffer(e) || X.isTypedArray(e) ? l && typeof Blob == "function" ? new Blob([e]) : Buffer.from(e) : e;
	}
	function f(e) {
		if (e > c) throw new Z("Object is too deeply nested (" + e + " levels). Max depth: " + c, Z.ERR_FORM_DATA_DEPTH_EXCEEDED);
	}
	function p(e, t) {
		if (c === Infinity) return JSON.stringify(e);
		let n = [];
		return JSON.stringify(e, function(e, r) {
			if (!X.isObject(r)) return r;
			for (; n.length && n[n.length - 1] !== this;) n.pop();
			return n.push(r), f(t + n.length - 1), r;
		});
	}
	function m(e, n, i) {
		let s = e;
		if (X.isReactNative(t) && X.isReactNativeBlob(e)) return t.append(Cm(i, n, a), d(e)), !1;
		if (e && !i && typeof e == "object") {
			if (X.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = p(e, 1);
			else if (X.isArray(e) && wm(e) || (X.isFileList(e) || X.endsWith(n, "[]")) && (s = X.toArray(e))) return n = Sm(n), s.forEach(function(e, r) {
				!(X.isUndefined(e) || e === null) && t.append(o === !0 ? Cm([n], r, a) : o === null ? n : n + "[]", d(e));
			}), !1;
		}
		return xm(e) ? !0 : (t.append(Cm(i, n, a), d(e)), !1);
	}
	let h = Object.assign(Tm, {
		defaultVisitor: m,
		convertValue: d,
		isVisitable: xm
	});
	function g(e, n, r = 0) {
		if (!X.isUndefined(e)) {
			if (f(r), u.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
			u.push(e), X.forEach(e, function(e, a) {
				(!(X.isUndefined(e) || e === null) && i.call(t, e, X.isString(a) ? a.trim() : a, n, h)) === !0 && g(e, n ? n.concat(a) : [a], r + 1);
			}), u.pop();
		}
	}
	if (!X.isObject(e)) throw TypeError("data must be an object");
	return g(e), t;
}
//#endregion
//#region node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function Dm(e) {
	let t = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+"
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(e) {
		return t[e];
	});
}
function Om(e, t) {
	this._pairs = [], e && Em(e, this, t);
}
var km = Om.prototype;
km.append = function(e, t) {
	this._pairs.push([e, t]);
}, km.toString = function(e) {
	let t = e ? function(t) {
		return e.call(this, t, Dm);
	} : Dm;
	return this._pairs.map(function(e) {
		return t(e[0]) + "=" + t(e[1]);
	}, "").join("&");
};
//#endregion
//#region node_modules/axios/lib/helpers/buildURL.js
function Am(e) {
	return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function jm(e, t, n) {
	if (!t) return e;
	let r = X.isFunction(n) ? { serialize: n } : n, i = X.getSafeProp(r, "encode") || Am, a = X.getSafeProp(r, "serialize"), o;
	if (o = a ? a(t, r) : X.isURLSearchParams(t) ? t.toString() : new Om(t, r).toString(i), o) {
		let t = e.indexOf("#");
		t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
	}
	return e;
}
//#endregion
//#region node_modules/axios/lib/core/InterceptorManager.js
var Mm = class {
	constructor() {
		this.handlers = [];
	}
	use(e, t, n) {
		return this.handlers.push({
			fulfilled: e,
			rejected: t,
			synchronous: n ? n.synchronous : !1,
			runWhen: n ? n.runWhen : null
		}), this.handlers.length - 1;
	}
	eject(e) {
		this.handlers[e] && (this.handlers[e] = null);
	}
	clear() {
		this.handlers &&= [];
	}
	forEach(e) {
		X.forEach(this.handlers, function(t) {
			t !== null && e(t);
		});
	}
}, Nm = {
	silentJSONParsing: !0,
	forcedJSONParsing: !0,
	clarifyTimeoutError: !1,
	legacyInterceptorReqResOrdering: !0,
	advertiseZstdAcceptEncoding: !1,
	validateStatusUndefinedResolves: !0
}, Pm = {
	isBrowser: !0,
	classes: {
		URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : Om,
		FormData: typeof FormData < "u" ? FormData : null,
		Blob: typeof Blob < "u" ? Blob : null
	},
	protocols: [
		"http",
		"https",
		"file",
		"blob",
		"url",
		"data"
	]
}, Fm = /* @__PURE__ */ s({
	hasBrowserEnv: () => Im,
	hasStandardBrowserEnv: () => Rm,
	hasStandardBrowserWebWorkerEnv: () => zm,
	navigator: () => Lm,
	origin: () => Bm
}), Im = typeof window < "u" && typeof document < "u", Lm = typeof navigator == "object" && navigator || void 0, Rm = Im && (!Lm || [
	"ReactNative",
	"NativeScript",
	"NS"
].indexOf(Lm.product) < 0), zm = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Bm = Im && window.location.href || "http://localhost", Vm = {
	...Fm,
	...Pm
};
//#endregion
//#region node_modules/axios/lib/helpers/toURLEncodedForm.js
function Hm(e, t) {
	return Em(e, new Vm.classes.URLSearchParams(), {
		visitor: function(e, t, n, r) {
			return Vm.isNode && X.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
		},
		...t
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/formDataToJSON.js
var Um = 100;
function Wm(e) {
	if (e > Um) throw new Z("FormData field is too deeply nested (" + e + " levels). Max depth: " + Um, Z.ERR_FORM_DATA_DEPTH_EXCEEDED);
}
function Gm(e) {
	let t = [], n = /\w+|\[(\w*)]/g, r;
	for (; (r = n.exec(e)) !== null;) Wm(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
	return t;
}
function Km(e) {
	let t = {}, n = Object.keys(e), r, i = n.length, a;
	for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
	return t;
}
function qm(e) {
	function t(e, n, r, i) {
		Wm(i);
		let a = e[i++];
		if (a === "__proto__") return !0;
		let o = Number.isFinite(+a), s = i >= e.length;
		return a = !a && X.isArray(r) ? r.length : a, s ? (X.hasOwnProp(r, a) ? r[a] = X.isArray(r[a]) ? r[a].concat(n) : [r[a], n] : r[a] = n, !o) : ((!X.hasOwnProp(r, a) || !X.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && X.isArray(r[a]) && (r[a] = Km(r[a])), !o);
	}
	if (X.isFormData(e) && X.isFunction(e.entries)) {
		let n = {};
		return X.forEachEntry(e, (e, r) => {
			t(Gm(e), r, n, 0);
		}), n;
	}
	return null;
}
//#endregion
//#region node_modules/axios/lib/defaults/index.js
var Jm = (e, t) => e != null && X.hasOwnProp(e, t) ? e[t] : void 0;
function Ym(e, t, n) {
	if (X.isString(e)) try {
		return (t || JSON.parse)(e), X.trim(e);
	} catch (e) {
		if (e.name !== "SyntaxError") throw e;
	}
	return (n || JSON.stringify)(e);
}
var Xm = {
	transitional: Nm,
	adapter: [
		"xhr",
		"http",
		"fetch"
	],
	transformRequest: [function(e, t) {
		let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = X.isObject(e);
		if (i && X.isHTMLForm(e) && (e = new FormData(e)), X.isFormData(e)) return r ? JSON.stringify(qm(e)) : e;
		if (X.isArrayBuffer(e) || X.isBuffer(e) || X.isStream(e) || X.isFile(e) || X.isBlob(e) || X.isReadableStream(e)) return e;
		if (X.isArrayBufferView(e)) return e.buffer;
		if (X.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
		let a;
		if (i) {
			let t = Jm(this, "formSerializer");
			if (n.indexOf("application/x-www-form-urlencoded") > -1) return Hm(e, t).toString();
			if ((a = X.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
				let n = Jm(this, "env"), r = n && n.FormData;
				return Em(a ? { "files[]": e } : e, r && new r(), t);
			}
		}
		return i || r ? (t.setContentType("application/json", !1), Ym(e)) : e;
	}],
	transformResponse: [function(e) {
		let t = Jm(this, "transitional") || Xm.transitional, n = t && t.forcedJSONParsing, r = Jm(this, "responseType"), i = r === "json";
		if (X.isResponse(e) || X.isReadableStream(e)) return e;
		if (e && X.isString(e) && (n && !r || i)) {
			let n = !(t && t.silentJSONParsing) && i;
			try {
				return JSON.parse(e, Jm(this, "parseReviver"));
			} catch (e) {
				if (n) throw e.name === "SyntaxError" ? Z.from(e, Z.ERR_BAD_RESPONSE, this, null, Jm(this, "response")) : e;
			}
		}
		return e;
	}],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: {
		FormData: Vm.classes.FormData,
		Blob: Vm.classes.Blob
	},
	validateStatus: function(e) {
		return e >= 200 && e < 300;
	},
	headers: { common: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": void 0
	} }
};
X.forEach([
	"delete",
	"get",
	"head",
	"post",
	"put",
	"patch",
	"query"
], (e) => {
	Xm.headers[e] = {};
});
//#endregion
//#region node_modules/axios/lib/core/transformData.js
function Zm(e, t) {
	let n = this || Xm, r = t || n, i = _m.from(r.headers), a = r.data;
	return X.forEach(e, function(e) {
		a = e.call(n, a, i.normalize(), t ? t.status : void 0);
	}), i.normalize(), a;
}
//#endregion
//#region node_modules/axios/lib/cancel/isCancel.js
function Qm(e) {
	return !!(e && e.__CANCEL__);
}
//#endregion
//#region node_modules/axios/lib/cancel/CanceledError.js
var $m = class extends Z {
	constructor(e, t, n) {
		super(e ?? "canceled", Z.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
	}
};
//#endregion
//#region node_modules/axios/lib/core/settle.js
function eh(e, t, n) {
	let r = n.config.validateStatus;
	!n.status || !r || r(n.status) ? e(n) : t(new Z("Request failed with status code " + n.status, n.status >= 400 && n.status < 500 ? Z.ERR_BAD_REQUEST : Z.ERR_BAD_RESPONSE, n.config, n.request, n));
}
//#endregion
//#region node_modules/axios/lib/helpers/parseProtocol.js
function th(e) {
	let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
	return t && t[1] || "";
}
//#endregion
//#region node_modules/axios/lib/helpers/speedometer.js
function nh(e, t) {
	e ||= 10;
	let n = Array(e), r = Array(e), i = 0, a = 0, o;
	return t = t === void 0 ? 1e3 : t, function(s) {
		let c = Date.now(), l = r[a];
		o ||= c, n[i] = s, r[i] = c;
		let u = a, d = 0;
		for (; u !== i;) d += n[u++], u %= e;
		if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - o < t) return;
		let f = l && c - l;
		return f ? Math.round(d * 1e3 / f) : void 0;
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/throttle.js
function rh(e, t) {
	let n = 0, r = 1e3 / t, i, a, o = (t, r = Date.now()) => {
		n = r, i = null, a &&= (clearTimeout(a), null), e(...t);
	};
	return [(...e) => {
		let t = Date.now(), s = t - n;
		s >= r ? o(e, t) : (i = e, a ||= setTimeout(() => {
			a = null, o(i);
		}, r - s));
	}, () => i && o(i)];
}
//#endregion
//#region node_modules/axios/lib/helpers/progressEventReducer.js
var ih = (e, t, n = 3) => {
	let r = 0, i = nh(50, 250);
	return rh((n) => {
		if (!n || typeof n.loaded != "number") return;
		let a = n.loaded, o = n.lengthComputable ? n.total : void 0, s = o == null ? a : Math.min(a, o), c = Math.max(0, s - r), l = i(c);
		r = Math.max(r, s), e({
			loaded: s,
			total: o,
			progress: o ? s / o : void 0,
			bytes: c,
			rate: l || void 0,
			estimated: l && o ? (o - s) / l : void 0,
			event: n,
			lengthComputable: o != null,
			[t ? "download" : "upload"]: !0
		});
	}, n);
}, ah = (e, t) => {
	let n = e != null;
	return [(r) => t[0]({
		lengthComputable: n,
		total: e,
		loaded: r
	}), t[1]];
}, oh = (e) => (...t) => X.asap(() => e(...t)), sh = Vm.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, Vm.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(Vm.origin), Vm.navigator && /(msie|trident)/i.test(Vm.navigator.userAgent)) : () => !0, ch = Vm.hasStandardBrowserEnv ? {
	write(e, t, n, r, i, a, o) {
		if (typeof document > "u") return;
		let s = [`${e}=${encodeURIComponent(t)}`];
		X.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), X.isString(r) && s.push(`path=${r}`), X.isString(i) && s.push(`domain=${i}`), a === !0 && s.push("secure"), X.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
	},
	read(e) {
		if (typeof document > "u") return null;
		let t = document.cookie.split(";");
		for (let n = 0; n < t.length; n++) {
			let r = t[n].replace(/^\s+/, ""), i = r.indexOf("=");
			if (i !== -1 && r.slice(0, i) === e) return decodeURIComponent(r.slice(i + 1));
		}
		return null;
	},
	remove(e) {
		this.write(e, "", Date.now() - 864e5, "/");
	}
} : {
	write() {},
	read() {
		return null;
	},
	remove() {}
};
//#endregion
//#region node_modules/axios/lib/helpers/isAbsoluteURL.js
function lh(e) {
	return typeof e == "string" && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
//#endregion
//#region node_modules/axios/lib/helpers/combineURLs.js
function uh(e, t) {
	return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
//#endregion
//#region node_modules/axios/lib/core/buildFullPath.js
var dh = /^https?:(?!\/\/)/i, fh = /[\t\n\r]/g;
function ph(e) {
	let t = 0;
	for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
	return e.slice(t);
}
function mh(e) {
	return ph(e).replace(fh, "");
}
function hh(e, t) {
	if (typeof e == "string" && dh.test(mh(e))) throw new Z("Invalid URL: missing \"//\" after protocol", Z.ERR_INVALID_URL, t);
}
function gh(e, t, n, r) {
	hh(t, r);
	let i = !lh(t);
	return e && (i || n === !1) ? (hh(e, r), uh(e, t)) : t;
}
//#endregion
//#region node_modules/axios/lib/core/mergeConfig.js
var _h = (e) => e instanceof _m ? { ...e } : e;
function vh(e, t) {
	t ||= {};
	let n = Object.create(null);
	Object.defineProperty(n, "hasOwnProperty", {
		__proto__: null,
		value: Object.prototype.hasOwnProperty,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
	function r(e, t, n, r) {
		return X.isPlainObject(e) && X.isPlainObject(t) ? X.merge.call({ caseless: r }, e, t) : X.isPlainObject(t) ? X.merge({}, t) : X.isArray(t) ? t.slice() : t;
	}
	function i(e, t, n, i) {
		if (!X.isUndefined(t)) return r(e, t, n, i);
		if (!X.isUndefined(e)) return r(void 0, e, n, i);
	}
	function a(e, t) {
		if (!X.isUndefined(t)) return r(void 0, t);
	}
	function o(e, t) {
		if (!X.isUndefined(t)) return r(void 0, t);
		if (!X.isUndefined(e)) return r(void 0, e);
	}
	function s(n) {
		let r = X.hasOwnProp(t, "transitional") ? t.transitional : void 0;
		if (!X.isUndefined(r)) {
			if (X.isPlainObject(r)) {
				if (X.hasOwnProp(r, n)) return r[n];
			} else return;
		}
		let i = X.hasOwnProp(e, "transitional") ? e.transitional : void 0;
		if (X.isPlainObject(i) && X.hasOwnProp(i, n)) return i[n];
	}
	function c(n, i, a) {
		if (X.hasOwnProp(t, a)) return r(n, i);
		if (X.hasOwnProp(e, a)) return r(void 0, n);
	}
	let l = {
		url: a,
		method: a,
		data: a,
		baseURL: o,
		transformRequest: o,
		transformResponse: o,
		paramsSerializer: o,
		timeout: o,
		timeoutMessage: o,
		withCredentials: o,
		withXSRFToken: o,
		adapter: o,
		responseType: o,
		xsrfCookieName: o,
		xsrfHeaderName: o,
		onUploadProgress: o,
		onDownloadProgress: o,
		decompress: o,
		maxContentLength: o,
		maxBodyLength: o,
		beforeRedirect: o,
		transport: o,
		httpAgent: o,
		httpsAgent: o,
		cancelToken: o,
		socketPath: o,
		allowedSocketPaths: o,
		responseEncoding: o,
		validateStatus: c,
		headers: (e, t, n) => i(_h(e), _h(t), n, !0)
	};
	return X.forEach(Object.keys({
		...e,
		...t
	}), function(r) {
		if (r === "__proto__" || r === "constructor" || r === "prototype") return;
		let a = X.hasOwnProp(l, r) ? l[r] : i, o = a(X.hasOwnProp(e, r) ? e[r] : void 0, X.hasOwnProp(t, r) ? t[r] : void 0, r);
		X.isUndefined(o) && a !== c || (n[r] = o);
	}), X.hasOwnProp(t, "validateStatus") && X.isUndefined(t.validateStatus) && s("validateStatusUndefinedResolves") === !1 && (X.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
//#endregion
//#region node_modules/axios/lib/helpers/resolveConfig.js
var yh = ["content-type", "content-length"];
function bh(e, t, n) {
	if (n !== "content-only") {
		e.set(t);
		return;
	}
	Object.entries(t).forEach(([t, n]) => {
		yh.includes(t.toLowerCase()) && e.set(t, n);
	});
}
var xh = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
function Sh(e) {
	let t = vh({}, e), n = (e) => X.hasOwnProp(t, e) ? t[e] : void 0, r = n("data"), i = n("withXSRFToken"), a = n("xsrfHeaderName"), o = n("xsrfCookieName"), s = n("headers"), c = n("auth"), l = n("baseURL"), u = n("allowAbsoluteUrls"), d = n("url");
	if (t.headers = s = _m.from(s), t.url = jm(gh(l, d, u, t), n("params"), n("paramsSerializer")), c) {
		let e = X.getSafeProp(c, "username") || "", t = X.getSafeProp(c, "password") || "";
		s.set("Authorization", "Basic " + btoa(e + ":" + (t ? xh(t) : "")));
	}
	if (X.isFormData(r) && (Vm.hasStandardBrowserEnv || Vm.hasStandardBrowserWebWorkerEnv || X.isReactNative(r) ? s.setContentType(void 0) : X.isFunction(r.getHeaders) && bh(s, r.getHeaders(), n("formDataHeaderPolicy"))), Vm.hasStandardBrowserEnv && (X.isFunction(i) && (i = i(t)), i === !0 || i == null && sh(t.url))) {
		let e = a && o && ch.read(o);
		e && s.set(a, e);
	}
	return t;
}
var Ch = typeof XMLHttpRequest < "u" && function(e) {
	return new Promise(function(t, n) {
		let r = Sh(e), i = r.data, a = _m.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p;
		function m() {
			f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
		}
		let h = new XMLHttpRequest();
		h.open(r.method.toUpperCase(), r.url, !0), h.timeout = r.timeout;
		function g() {
			if (!h) return;
			let r = _m.from("getAllResponseHeaders" in h && h.getAllResponseHeaders());
			eh(function(e) {
				t(e), m();
			}, function(e) {
				n(e), m();
			}, {
				data: !o || o === "text" || o === "json" ? h.responseText : h.response,
				status: h.status,
				statusText: h.statusText,
				headers: r,
				config: e,
				request: h
			}), h = null;
		}
		"onloadend" in h ? h.onloadend = g : h.onreadystatechange = function() {
			!h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.startsWith("file:")) || setTimeout(g);
		}, h.onabort = function() {
			h &&= (n(new Z("Request aborted", Z.ECONNABORTED, e, h)), m(), null);
		}, h.onerror = function(t) {
			let r = new Z(t && t.message ? t.message : "Network Error", Z.ERR_NETWORK, e, h);
			r.event = t || null, n(r), m(), h = null;
		}, h.ontimeout = function() {
			let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || Nm;
			r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new Z(t, i.clarifyTimeoutError ? Z.ETIMEDOUT : Z.ECONNABORTED, e, h)), m(), h = null;
		}, i === void 0 && a.setContentType(null), "setRequestHeader" in h && X.forEach(cm(a), function(e, t) {
			h.setRequestHeader(t, e);
		}), X.isUndefined(r.withCredentials) || (h.withCredentials = !!r.withCredentials), o && o !== "json" && (h.responseType = r.responseType), c && ([d, p] = ih(c, !0), h.addEventListener("progress", d)), s && h.upload && ([u, f] = ih(s), h.upload.addEventListener("progress", u), h.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
			h &&= (n(!t || t.type ? new $m(null, e, h) : t), h.abort(), m(), null);
		}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
		let _ = th(r.url);
		if (_ && !Vm.protocols.includes(_)) {
			n(new Z("Unsupported protocol " + _ + ":", Z.ERR_BAD_REQUEST, e));
			return;
		}
		h.send(i || null);
	});
}, wh = (e, t) => {
	if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
	let n = new AbortController(), r = !1, i = function(e) {
		if (!r) {
			r = !0, o();
			let t = e instanceof Error ? e : this.reason;
			n.abort(t instanceof Z ? t : new $m(t instanceof Error ? t.message : t));
		}
	}, a = t && setTimeout(() => {
		a = null, i(new Z(`timeout of ${t}ms exceeded`, Z.ETIMEDOUT));
	}, t), o = () => {
		e &&= (a && clearTimeout(a), a = null, e.forEach((e) => {
			e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i);
		}), null);
	};
	e.forEach((e) => e.addEventListener("abort", i));
	let { signal: s } = n;
	return s.unsubscribe = () => X.asap(o), s;
}, Th = function* (e, t) {
	let n = e.byteLength;
	if (!t || n < t) {
		yield e;
		return;
	}
	let r = 0, i;
	for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
}, Eh = async function* (e, t) {
	for await (let n of Dh(e)) yield* Th(n, t);
}, Dh = async function* (e) {
	if (e[Symbol.asyncIterator]) {
		yield* e;
		return;
	}
	let t = e.getReader();
	try {
		for (;;) {
			let { done: e, value: n } = await t.read();
			if (e) break;
			yield n;
		}
	} finally {
		await t.cancel();
	}
}, Oh = (e, t, n, r) => {
	let i = Eh(e, t), a = 0, o, s = (e) => {
		o || (o = !0, r && r(e));
	};
	return new ReadableStream({
		async pull(e) {
			try {
				let { done: t, value: r } = await i.next();
				if (t) {
					s(), e.close();
					return;
				}
				let o = r.byteLength;
				n && n(a += o), e.enqueue(new Uint8Array(r));
			} catch (e) {
				throw s(e), e;
			}
		},
		cancel(e) {
			return s(e), i.return();
		}
	}, { highWaterMark: 2 });
}, kh = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, Ah = (e, t, n) => t + 2 < n && kh(e.charCodeAt(t + 1)) && kh(e.charCodeAt(t + 2));
function jh(e) {
	if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
	let t = e.indexOf(",");
	if (t < 0) return 0;
	let n = e.slice(5, t), r = e.slice(t + 1);
	if (/;base64/i.test(n)) {
		let e = r.length, t = r.length;
		for (let n = 0; n < t; n++) if (r.charCodeAt(n) === 37 && n + 2 < t) {
			let t = r.charCodeAt(n + 1), i = r.charCodeAt(n + 2);
			kh(t) && kh(i) && (e -= 2, n += 2);
		}
		let n = 0, i = t - 1, a = (e) => e >= 2 && r.charCodeAt(e - 2) === 37 && r.charCodeAt(e - 1) === 51 && (r.charCodeAt(e) === 68 || r.charCodeAt(e) === 100);
		i >= 0 && (r.charCodeAt(i) === 61 ? (n++, i--) : a(i) && (n++, i -= 3)), n === 1 && i >= 0 && (r.charCodeAt(i) === 61 || a(i)) && n++;
		let o = Math.floor(e / 4) * 3 - (n || 0);
		return o > 0 ? o : 0;
	}
	let i = 0;
	for (let e = 0, t = r.length; e < t; e++) {
		let n = r.charCodeAt(e);
		if (n === 37 && Ah(r, e, t)) i += 1, e += 2;
		else if (n < 128) i += 1;
		else if (n < 2048) i += 2;
		else if (n >= 55296 && n <= 56319 && e + 1 < t) {
			let t = r.charCodeAt(e + 1);
			t >= 56320 && t <= 57343 ? (i += 4, e++) : i += 3;
		} else i += 3;
	}
	return i;
}
//#endregion
//#region node_modules/axios/lib/env/data.js
var Mh = "1.18.0", Nh = 65536, { isFunction: Ph } = X, Fh = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) => String.fromCharCode(parseInt(t, 16))), Ih = (e) => {
	if (!X.isString(e)) return e;
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}, Lh = (e, ...t) => {
	try {
		return !!e(...t);
	} catch {
		return !1;
	}
}, Rh = (e) => {
	let t = e.indexOf("://"), n = e;
	return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, zh = (e) => {
	let t = X.global !== void 0 && X.global !== null ? X.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
	e = X.merge.call({ skipUndefined: !0 }, {
		Request: t.Request,
		Response: t.Response
	}, e);
	let { fetch: i, Request: a, Response: o } = e, s = i ? Ph(i) : typeof fetch == "function", c = Ph(a), l = Ph(o);
	if (!s) return !1;
	let u = s && Ph(n), d = s && (typeof r == "function" ? ((e) => (t) => e.encode(t))(new r()) : async (e) => new Uint8Array(await new a(e).arrayBuffer())), f = c && u && Lh(() => {
		let e = !1, t = new a(Vm.origin, {
			body: new n(),
			method: "POST",
			get duplex() {
				return e = !0, "half";
			}
		}), r = t.headers.has("Content-Type");
		return t.body != null && t.body.cancel(), e && !r;
	}), p = l && u && Lh(() => X.isReadableStream(new o("").body)), m = { stream: p && ((e) => e.body) };
	s && [
		"text",
		"arrayBuffer",
		"blob",
		"formData",
		"stream"
	].forEach((e) => {
		!m[e] && (m[e] = (t, n) => {
			let r = t && t[e];
			if (r) return r.call(t);
			throw new Z(`Response type '${e}' is not supported`, Z.ERR_NOT_SUPPORT, n);
		});
	});
	let h = async (e) => {
		if (e == null) return 0;
		if (X.isBlob(e)) return e.size;
		if (X.isSpecCompliantForm(e)) return (await new a(Vm.origin, {
			method: "POST",
			body: e
		}).arrayBuffer()).byteLength;
		if (X.isArrayBufferView(e) || X.isArrayBuffer(e)) return e.byteLength;
		if (X.isURLSearchParams(e) && (e += ""), X.isString(e)) return (await d(e)).byteLength;
	}, g = async (e, t) => X.toFiniteNumber(e.getContentLength()) ?? h(t);
	return async (e) => {
		let { url: t, method: n, data: s, signal: l, cancelToken: d, timeout: _, onDownloadProgress: v, onUploadProgress: y, responseType: b, headers: x, withCredentials: S = "same-origin", fetchOptions: C, maxContentLength: w, maxBodyLength: T } = Sh(e), E = X.isNumber(w) && w > -1, D = X.isNumber(T) && T > -1, O = (t) => X.hasOwnProp(e, t) ? e[t] : void 0, k = i || fetch;
		b = b ? (b + "").toLowerCase() : "text";
		let A = wh([l, d && d.toAbortSignal()], _), j = null, M = A && A.unsubscribe && (() => {
			A.unsubscribe();
		}), ee, N = null, te = () => new Z("Request body larger than maxBodyLength limit", Z.ERR_BAD_REQUEST, e, j);
		try {
			let i, l = O("auth");
			if (l && (i = {
				username: X.getSafeProp(l, "username") || "",
				password: X.getSafeProp(l, "password") || ""
			}), Rh(t)) {
				let e = new URL(t, Vm.origin);
				!i && (e.username || e.password) && (i = {
					username: Ih(e.username),
					password: Ih(e.password)
				}), (e.username || e.password) && (e.username = "", e.password = "", t = e.href);
			}
			if (i && (x.delete("authorization"), x.set("Authorization", "Basic " + btoa(Fh((i.username || "") + ":" + (i.password || ""))))), E && typeof t == "string" && t.startsWith("data:") && jh(t) > w) throw new Z("maxContentLength size of " + w + " exceeded", Z.ERR_BAD_RESPONSE, e, j);
			if (D && n !== "get" && n !== "head") {
				let e = await h(s);
				if (typeof e == "number" && isFinite(e) && (ee = e, e > T)) throw te();
			}
			let d = D && (X.isReadableStream(s) || X.isStream(s)), _ = (e, t, n) => Oh(e, Nh, (e) => {
				if (D && e > T) throw N = te();
				t && t(e);
			}, n);
			if (f && n !== "get" && n !== "head" && (y || d)) {
				if (ee ??= await g(x, s), ee !== 0 || d) {
					let e = new a(t, {
						method: "POST",
						body: s,
						duplex: "half"
					}), n;
					if (X.isFormData(s) && (n = e.headers.get("content-type")) && x.setContentType(n), e.body) {
						let [t, n] = y && ah(ee, ih(oh(y))) || [];
						s = _(e.body, t, n);
					}
				}
			} else if (d && !c && u && n !== "get" && n !== "head") s = _(s);
			else if (d && c && !f && n !== "get" && n !== "head") throw new Z("Stream request bodies are not supported by the current fetch implementation", Z.ERR_NOT_SUPPORT, e, j);
			X.isString(S) || (S = S ? "include" : "omit");
			let ne = c && "credentials" in a.prototype;
			if (X.isFormData(s)) {
				let e = x.getContentType();
				e && /^multipart\/form-data/i.test(e) && !/boundary=/i.test(e) && x.delete("content-type");
			}
			x.set("User-Agent", "axios/" + Mh, !1);
			let re = {
				...C,
				signal: A,
				method: n.toUpperCase(),
				headers: cm(x.normalize()),
				body: s,
				duplex: "half",
				credentials: ne ? S : void 0
			};
			j = c && new a(t, re);
			let ie = await (c ? k(j, C) : k(t, re)), ae = _m.from(ie.headers);
			if (E) {
				let t = X.toFiniteNumber(ae.getContentLength());
				if (t != null && t > w) throw new Z("maxContentLength size of " + w + " exceeded", Z.ERR_BAD_RESPONSE, e, j);
			}
			let oe = p && (b === "stream" || b === "response");
			if (p && ie.body && (v || E || oe && M)) {
				let t = {};
				[
					"status",
					"statusText",
					"headers"
				].forEach((e) => {
					t[e] = ie[e];
				});
				let n = X.toFiniteNumber(ae.getContentLength()), [r, i] = v && ah(n, ih(oh(v), !0)) || [], a = 0;
				ie = new o(Oh(ie.body, Nh, (t) => {
					if (E && (a = t, a > w)) throw new Z("maxContentLength size of " + w + " exceeded", Z.ERR_BAD_RESPONSE, e, j);
					r && r(t);
				}, () => {
					i && i(), M && M();
				}), t);
			}
			b ||= "text";
			let P = await m[X.findKey(m, b) || "text"](ie, e);
			if (E && !p && !oe) {
				let t;
				if (P != null && (typeof P.byteLength == "number" ? t = P.byteLength : typeof P.size == "number" ? t = P.size : typeof P == "string" && (t = typeof r == "function" ? new r().encode(P).byteLength : P.length)), typeof t == "number" && t > w) throw new Z("maxContentLength size of " + w + " exceeded", Z.ERR_BAD_RESPONSE, e, j);
			}
			return !oe && M && M(), await new Promise((t, n) => {
				eh(t, n, {
					data: P,
					headers: _m.from(ie.headers),
					status: ie.status,
					statusText: ie.statusText,
					config: e,
					request: j
				});
			});
		} catch (t) {
			if (M && M(), A && A.aborted && A.reason instanceof Z) {
				let n = A.reason;
				throw n.config = e, j && (n.request = j), t !== n && (n.cause = t), n;
			}
			throw N ? (j && !N.request && (N.request = j), N) : t instanceof Z ? (j && !t.request && (t.request = j), t) : t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message) ? Object.assign(new Z("Network Error", Z.ERR_NETWORK, e, j, t && t.response), { cause: t.cause || t }) : Z.from(t, t && t.code, e, j, t && t.response);
		}
	};
}, Bh = /* @__PURE__ */ new Map(), Vh = (e) => {
	let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
		r,
		i,
		n
	], o = a.length, s, c, l = Bh;
	for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : zh(t)), l = c;
	return c;
};
Vh();
//#endregion
//#region node_modules/axios/lib/adapters/adapters.js
var Hh = {
	http: null,
	xhr: Ch,
	fetch: { get: Vh }
};
X.forEach(Hh, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", {
				__proto__: null,
				value: t
			});
		} catch {}
		Object.defineProperty(e, "adapterName", {
			__proto__: null,
			value: t
		});
	}
});
var Uh = (e) => `- ${e}`, Wh = (e) => X.isFunction(e) || e === null || e === !1;
function Gh(e, t) {
	e = X.isArray(e) ? e : [e];
	let { length: n } = e, r, i, a = {};
	for (let o = 0; o < n; o++) {
		r = e[o];
		let n;
		if (i = r, !Wh(r) && (i = Hh[(n = String(r)).toLowerCase()], i === void 0)) throw new Z(`Unknown adapter '${n}'`);
		if (i && (X.isFunction(i) || (i = i.get(t)))) break;
		a[n || "#" + o] = i;
	}
	if (!i) {
		let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
		throw new Z("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(Uh).join("\n") : " " + Uh(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
	}
	return i;
}
var Kh = {
	getAdapter: Gh,
	adapters: Hh
};
//#endregion
//#region node_modules/axios/lib/core/dispatchRequest.js
function qh(e) {
	if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new $m(null, e);
}
function Jh(e) {
	return qh(e), e.headers = _m.from(e.headers), e.data = Zm.call(e, e.transformRequest), [
		"post",
		"put",
		"patch"
	].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Kh.getAdapter(e.adapter || Xm.adapter, e)(e).then(function(t) {
		qh(e), e.response = t;
		try {
			t.data = Zm.call(e, e.transformResponse, t);
		} finally {
			delete e.response;
		}
		return t.headers = _m.from(t.headers), t;
	}, function(t) {
		if (!Qm(t) && (qh(e), t && t.response)) {
			e.response = t.response;
			try {
				t.response.data = Zm.call(e, e.transformResponse, t.response);
			} finally {
				delete e.response;
			}
			t.response.headers = _m.from(t.response.headers);
		}
		return Promise.reject(t);
	});
}
//#endregion
//#region node_modules/axios/lib/helpers/validator.js
var Yh = {};
[
	"object",
	"boolean",
	"number",
	"function",
	"string",
	"symbol"
].forEach((e, t) => {
	Yh[e] = function(n) {
		return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
	};
});
var Xh = {};
Yh.transitional = function(e, t, n) {
	function r(e, t) {
		return "[Axios v" + Mh + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
	}
	return (n, i, a) => {
		if (e === !1) throw new Z(r(i, " has been removed" + (t ? " in " + t : "")), Z.ERR_DEPRECATED);
		return t && !Xh[i] && (Xh[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, a);
	};
}, Yh.spelling = function(e) {
	return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function Zh(e, t, n) {
	if (typeof e != "object") throw new Z("options must be an object", Z.ERR_BAD_OPTION_VALUE);
	let r = Object.keys(e), i = r.length;
	for (; i-- > 0;) {
		let a = r[i], o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
		if (o) {
			let t = e[a], n = t === void 0 || o(t, a, e);
			if (n !== !0) throw new Z("option " + a + " must be " + n, Z.ERR_BAD_OPTION_VALUE);
			continue;
		}
		if (n !== !0) throw new Z("Unknown option " + a, Z.ERR_BAD_OPTION);
	}
}
var Qh = {
	assertOptions: Zh,
	validators: Yh
}, $h = Qh.validators, eg = class {
	constructor(e) {
		this.defaults = e || {}, this.interceptors = {
			request: new Mm(),
			response: new Mm()
		};
	}
	async request(e, t) {
		try {
			return await this._request(e, t);
		} catch (e) {
			if (e instanceof Error) {
				let t = {};
				Error.captureStackTrace ? Error.captureStackTrace(t) : t = /* @__PURE__ */ Error();
				let n = (() => {
					if (!t.stack) return "";
					let e = t.stack.indexOf("\n");
					return e === -1 ? "" : t.stack.slice(e + 1);
				})();
				try {
					if (!e.stack) e.stack = n;
					else if (n) {
						let t = n.indexOf("\n"), r = t === -1 ? -1 : n.indexOf("\n", t + 1), i = r === -1 ? "" : n.slice(r + 1);
						String(e.stack).endsWith(i) || (e.stack += "\n" + n);
					}
				} catch {}
			}
			throw e;
		}
	}
	_request(e, t) {
		typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = vh(this.defaults, t);
		let { transitional: n, paramsSerializer: r, headers: i } = t;
		n !== void 0 && Qh.assertOptions(n, {
			silentJSONParsing: $h.transitional($h.boolean),
			forcedJSONParsing: $h.transitional($h.boolean),
			clarifyTimeoutError: $h.transitional($h.boolean),
			legacyInterceptorReqResOrdering: $h.transitional($h.boolean),
			advertiseZstdAcceptEncoding: $h.transitional($h.boolean),
			validateStatusUndefinedResolves: $h.transitional($h.boolean)
		}, !1), r != null && (X.isFunction(r) ? t.paramsSerializer = { serialize: r } : Qh.assertOptions(r, {
			encode: $h.function,
			serialize: $h.function
		}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), Qh.assertOptions(t, {
			baseUrl: $h.spelling("baseURL"),
			withXsrfToken: $h.spelling("withXSRFToken")
		}, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
		let a = i && X.merge(i.common, i[t.method]);
		i && X.forEach([
			"delete",
			"get",
			"head",
			"post",
			"put",
			"patch",
			"query",
			"common"
		], (e) => {
			delete i[e];
		}), t.headers = _m.concat(a, i);
		let o = [], s = !0;
		this.interceptors.request.forEach(function(e) {
			if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
			s &&= e.synchronous;
			let n = t.transitional || Nm;
			n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
		});
		let c = [];
		this.interceptors.response.forEach(function(e) {
			c.push(e.fulfilled, e.rejected);
		});
		let l, u = 0, d;
		if (!s) {
			let e = [Jh.bind(this), void 0];
			for (e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t); u < d;) l = l.then(e[u++], e[u++]);
			return l;
		}
		d = o.length;
		let f = t;
		for (; u < d;) {
			let e = o[u++], t = o[u++];
			try {
				f = e(f);
			} catch (e) {
				t.call(this, e);
				break;
			}
		}
		try {
			l = Jh.call(this, f);
		} catch (e) {
			return Promise.reject(e);
		}
		for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
		return l;
	}
	getUri(e) {
		return e = vh(this.defaults, e), jm(gh(e.baseURL, e.url, e.allowAbsoluteUrls, e), e.params, e.paramsSerializer);
	}
};
X.forEach([
	"delete",
	"get",
	"head",
	"options"
], function(e) {
	eg.prototype[e] = function(t, n) {
		return this.request(vh(n || {}, {
			method: e,
			url: t,
			data: n && X.hasOwnProp(n, "data") ? n.data : void 0
		}));
	};
}), X.forEach([
	"post",
	"put",
	"patch",
	"query"
], function(e) {
	function t(t) {
		return function(n, r, i) {
			return this.request(vh(i || {}, {
				method: e,
				headers: t ? { "Content-Type": "multipart/form-data" } : {},
				url: n,
				data: r
			}));
		};
	}
	eg.prototype[e] = t(), e !== "query" && (eg.prototype[e + "Form"] = t(!0));
});
//#endregion
//#region node_modules/axios/lib/cancel/CancelToken.js
var tg = class e {
	constructor(e) {
		if (typeof e != "function") throw TypeError("executor must be a function.");
		let t;
		this.promise = new Promise(function(e) {
			t = e;
		});
		let n = this;
		this.promise.then((e) => {
			if (!n._listeners) return;
			let t = n._listeners.length;
			for (; t-- > 0;) n._listeners[t](e);
			n._listeners = null;
		}), this.promise.then = (e) => {
			let t, r = new Promise((e) => {
				n.subscribe(e), t = e;
			}).then(e);
			return r.cancel = function() {
				n.unsubscribe(t);
			}, r;
		}, e(function(e, r, i) {
			n.reason || (n.reason = new $m(e, r, i), t(n.reason));
		});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(e) {
		if (this.reason) {
			e(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(e) : this._listeners = [e];
	}
	unsubscribe(e) {
		if (!this._listeners) return;
		let t = this._listeners.indexOf(e);
		t !== -1 && this._listeners.splice(t, 1);
	}
	toAbortSignal() {
		let e = new AbortController(), t = (t) => {
			e.abort(t);
		};
		return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
	}
	static source() {
		let t;
		return {
			token: new e(function(e) {
				t = e;
			}),
			cancel: t
		};
	}
};
//#endregion
//#region node_modules/axios/lib/helpers/spread.js
function ng(e) {
	return function(t) {
		return e.apply(null, t);
	};
}
//#endregion
//#region node_modules/axios/lib/helpers/isAxiosError.js
function rg(e) {
	return X.isObject(e) && e.isAxiosError === !0;
}
//#endregion
//#region node_modules/axios/lib/helpers/HttpStatusCode.js
var ig = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
	WebServerIsDown: 521,
	ConnectionTimedOut: 522,
	OriginIsUnreachable: 523,
	TimeoutOccurred: 524,
	SslHandshakeFailed: 525,
	InvalidSslCertificate: 526
};
Object.entries(ig).forEach(([e, t]) => {
	ig[t] = e;
});
//#endregion
//#region node_modules/axios/lib/axios.js
function ag(e) {
	let t = new eg(e), n = Rf(eg.prototype.request, t);
	return X.extend(n, eg.prototype, t, { allOwnKeys: !0 }), X.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(t) {
		return ag(vh(e, t));
	}, n;
}
var og = ag(Xm);
og.Axios = eg, og.CanceledError = $m, og.CancelToken = tg, og.isCancel = Qm, og.VERSION = Mh, og.toFormData = Em, og.AxiosError = Z, og.Cancel = og.CanceledError, og.all = function(e) {
	return Promise.all(e);
}, og.spread = ng, og.isAxiosError = rg, og.mergeConfig = vh, og.AxiosHeaders = _m, og.formToJSON = (e) => qm(X.isHTMLForm(e) ? new FormData(e) : e), og.getAdapter = Kh.getAdapter, og.HttpStatusCode = ig, og.default = og;
//#endregion
//#region node_modules/lodash/_freeGlobal.js
var sg = /* @__PURE__ */ o(((e, t) => {
	t.exports = typeof global == "object" && global && global.Object === Object && global;
})), cg = /* @__PURE__ */ o(((e, t) => {
	var n = sg(), r = typeof self == "object" && self && self.Object === Object && self;
	t.exports = n || r || Function("return this")();
})), lg = /* @__PURE__ */ o(((e, t) => {
	t.exports = cg().Symbol;
})), ug = /* @__PURE__ */ o(((e, t) => {
	var n = lg(), r = Object.prototype, i = r.hasOwnProperty, a = r.toString, o = n ? n.toStringTag : void 0;
	function s(e) {
		var t = i.call(e, o), n = e[o];
		try {
			e[o] = void 0;
			var r = !0;
		} catch {}
		var s = a.call(e);
		return r && (t ? e[o] = n : delete e[o]), s;
	}
	t.exports = s;
})), dg = /* @__PURE__ */ o(((e, t) => {
	var n = Object.prototype.toString;
	function r(e) {
		return n.call(e);
	}
	t.exports = r;
})), fg = /* @__PURE__ */ o(((e, t) => {
	var n = lg(), r = ug(), i = dg(), a = "[object Null]", o = "[object Undefined]", s = n ? n.toStringTag : void 0;
	function c(e) {
		return e == null ? e === void 0 ? o : a : s && s in Object(e) ? r(e) : i(e);
	}
	t.exports = c;
})), pg = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		var t = typeof e;
		return e != null && (t == "object" || t == "function");
	}
	t.exports = n;
})), mg = /* @__PURE__ */ o(((e, t) => {
	var n = fg(), r = pg(), i = "[object AsyncFunction]", a = "[object Function]", o = "[object GeneratorFunction]", s = "[object Proxy]";
	function c(e) {
		if (!r(e)) return !1;
		var t = n(e);
		return t == a || t == o || t == i || t == s;
	}
	t.exports = c;
})), hg = /* @__PURE__ */ o(((e, t) => {
	t.exports = cg()["__core-js_shared__"];
})), gg = /* @__PURE__ */ o(((e, t) => {
	var n = hg(), r = function() {
		var e = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
		return e ? "Symbol(src)_1." + e : "";
	}();
	function i(e) {
		return !!r && r in e;
	}
	t.exports = i;
})), _g = /* @__PURE__ */ o(((e, t) => {
	var n = Function.prototype.toString;
	function r(e) {
		if (e != null) {
			try {
				return n.call(e);
			} catch {}
			try {
				return e + "";
			} catch {}
		}
		return "";
	}
	t.exports = r;
})), vg = /* @__PURE__ */ o(((e, t) => {
	var n = mg(), r = gg(), i = pg(), a = _g(), o = /[\\^$.*+?()[\]{}|]/g, s = /^\[object .+?Constructor\]$/, c = Function.prototype, l = Object.prototype, u = c.toString, d = l.hasOwnProperty, f = RegExp("^" + u.call(d).replace(o, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	function p(e) {
		return !i(e) || r(e) ? !1 : (n(e) ? f : s).test(a(e));
	}
	t.exports = p;
})), yg = /* @__PURE__ */ o(((e, t) => {
	function n(e, t) {
		return e?.[t];
	}
	t.exports = n;
})), bg = /* @__PURE__ */ o(((e, t) => {
	var n = vg(), r = yg();
	function i(e, t) {
		var i = r(e, t);
		return n(i) ? i : void 0;
	}
	t.exports = i;
})), xg = /* @__PURE__ */ o(((e, t) => {
	var n = bg();
	t.exports = function() {
		try {
			var e = n(Object, "defineProperty");
			return e({}, "", {}), e;
		} catch {}
	}();
})), Sg = /* @__PURE__ */ o(((e, t) => {
	var n = xg();
	function r(e, t, r) {
		t == "__proto__" && n ? n(e, t, {
			configurable: !0,
			enumerable: !0,
			value: r,
			writable: !0
		}) : e[t] = r;
	}
	t.exports = r;
})), Cg = /* @__PURE__ */ o(((e, t) => {
	function n(e, t) {
		return e === t || e !== e && t !== t;
	}
	t.exports = n;
})), wg = /* @__PURE__ */ o(((e, t) => {
	var n = Sg(), r = Cg(), i = Object.prototype.hasOwnProperty;
	function a(e, t, a) {
		var o = e[t];
		(!(i.call(e, t) && r(o, a)) || a === void 0 && !(t in e)) && n(e, t, a);
	}
	t.exports = a;
})), Tg = /* @__PURE__ */ o(((e, t) => {
	var n = wg(), r = Sg();
	function i(e, t, i, a) {
		var o = !i;
		i ||= {};
		for (var s = -1, c = t.length; ++s < c;) {
			var l = t[s], u = a ? a(i[l], e[l], l, i, e) : void 0;
			u === void 0 && (u = e[l]), o ? r(i, l, u) : n(i, l, u);
		}
		return i;
	}
	t.exports = i;
})), Eg = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return e;
	}
	t.exports = n;
})), Dg = /* @__PURE__ */ o(((e, t) => {
	function n(e, t, n) {
		switch (n.length) {
			case 0: return e.call(t);
			case 1: return e.call(t, n[0]);
			case 2: return e.call(t, n[0], n[1]);
			case 3: return e.call(t, n[0], n[1], n[2]);
		}
		return e.apply(t, n);
	}
	t.exports = n;
})), Og = /* @__PURE__ */ o(((e, t) => {
	var n = Dg(), r = Math.max;
	function i(e, t, i) {
		return t = r(t === void 0 ? e.length - 1 : t, 0), function() {
			for (var a = arguments, o = -1, s = r(a.length - t, 0), c = Array(s); ++o < s;) c[o] = a[t + o];
			o = -1;
			for (var l = Array(t + 1); ++o < t;) l[o] = a[o];
			return l[t] = i(c), n(e, this, l);
		};
	}
	t.exports = i;
})), kg = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return function() {
			return e;
		};
	}
	t.exports = n;
})), Ag = /* @__PURE__ */ o(((e, t) => {
	var n = kg(), r = xg(), i = Eg();
	t.exports = r ? function(e, t) {
		return r(e, "toString", {
			configurable: !0,
			enumerable: !1,
			value: n(t),
			writable: !0
		});
	} : i;
})), jg = /* @__PURE__ */ o(((e, t) => {
	var n = Date.now;
	function r(e) {
		var t = 0, r = 0;
		return function() {
			var i = n(), a = 16 - (i - r);
			if (r = i, a > 0) {
				if (++t >= 800) return arguments[0];
			} else t = 0;
			return e.apply(void 0, arguments);
		};
	}
	t.exports = r;
})), Mg = /* @__PURE__ */ o(((e, t) => {
	var n = Ag();
	t.exports = jg()(n);
})), Ng = /* @__PURE__ */ o(((e, t) => {
	var n = Eg(), r = Og(), i = Mg();
	function a(e, t) {
		return i(r(e, t, n), e + "");
	}
	t.exports = a;
})), Pg = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
	}
	t.exports = n;
})), Fg = /* @__PURE__ */ o(((e, t) => {
	var n = mg(), r = Pg();
	function i(e) {
		return e != null && r(e.length) && !n(e);
	}
	t.exports = i;
})), Ig = /* @__PURE__ */ o(((e, t) => {
	var n = /^(?:0|[1-9]\d*)$/;
	function r(e, t) {
		var r = typeof e;
		return t ??= 9007199254740991, !!t && (r == "number" || r != "symbol" && n.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	t.exports = r;
})), Lg = /* @__PURE__ */ o(((e, t) => {
	var n = Cg(), r = Fg(), i = Ig(), a = pg();
	function o(e, t, o) {
		if (!a(o)) return !1;
		var s = typeof t;
		return (s == "number" ? r(o) && i(t, o.length) : s == "string" && t in o) ? n(o[t], e) : !1;
	}
	t.exports = o;
})), Rg = /* @__PURE__ */ o(((e, t) => {
	var n = Ng(), r = Lg();
	function i(e) {
		return n(function(t, n) {
			var i = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, s = a > 2 ? n[2] : void 0;
			for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, s && r(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++i < a;) {
				var c = n[i];
				c && e(t, c, i, o);
			}
			return t;
		});
	}
	t.exports = i;
})), zg = /* @__PURE__ */ o(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	t.exports = n;
})), Bg = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return typeof e == "object" && !!e;
	}
	t.exports = n;
})), Vg = /* @__PURE__ */ o(((e, t) => {
	var n = fg(), r = Bg(), i = "[object Arguments]";
	function a(e) {
		return r(e) && n(e) == i;
	}
	t.exports = a;
})), Hg = /* @__PURE__ */ o(((e, t) => {
	var n = Vg(), r = Bg(), i = Object.prototype, a = i.hasOwnProperty, o = i.propertyIsEnumerable;
	t.exports = n(function() {
		return arguments;
	}()) ? n : function(e) {
		return r(e) && a.call(e, "callee") && !o.call(e, "callee");
	};
})), Ug = /* @__PURE__ */ o(((e, t) => {
	t.exports = Array.isArray;
})), Wg = /* @__PURE__ */ o(((e, t) => {
	function n() {
		return !1;
	}
	t.exports = n;
})), Gg = /* @__PURE__ */ o(((e, t) => {
	var n = cg(), r = Wg(), i = typeof e == "object" && e && !e.nodeType && e, a = i && typeof t == "object" && t && !t.nodeType && t, o = a && a.exports === i ? n.Buffer : void 0;
	t.exports = (o ? o.isBuffer : void 0) || r;
})), Kg = /* @__PURE__ */ o(((e, t) => {
	var n = fg(), r = Pg(), i = Bg(), a = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", c = "[object Date]", l = "[object Error]", u = "[object Function]", d = "[object Map]", f = "[object Number]", p = "[object Object]", m = "[object RegExp]", h = "[object Set]", g = "[object String]", _ = "[object WeakMap]", v = "[object ArrayBuffer]", y = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", C = "[object Int16Array]", w = "[object Int32Array]", T = "[object Uint8Array]", E = "[object Uint8ClampedArray]", D = "[object Uint16Array]", O = "[object Uint32Array]", k = {};
	k[b] = k[x] = k[S] = k[C] = k[w] = k[T] = k[E] = k[D] = k[O] = !0, k[a] = k[o] = k[v] = k[s] = k[y] = k[c] = k[l] = k[u] = k[d] = k[f] = k[p] = k[m] = k[h] = k[g] = k[_] = !1;
	function A(e) {
		return i(e) && r(e.length) && !!k[n(e)];
	}
	t.exports = A;
})), qg = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return function(t) {
			return e(t);
		};
	}
	t.exports = n;
})), Jg = /* @__PURE__ */ o(((e, t) => {
	var n = sg(), r = typeof e == "object" && e && !e.nodeType && e, i = r && typeof t == "object" && t && !t.nodeType && t, a = i && i.exports === r && n.process;
	t.exports = function() {
		try {
			return i && i.require && i.require("util").types || a && a.binding && a.binding("util");
		} catch {}
	}();
})), Yg = /* @__PURE__ */ o(((e, t) => {
	var n = Kg(), r = qg(), i = Jg(), a = i && i.isTypedArray;
	t.exports = a ? r(a) : n;
})), Xg = /* @__PURE__ */ o(((e, t) => {
	var n = zg(), r = Hg(), i = Ug(), a = Gg(), o = Ig(), s = Yg(), c = Object.prototype.hasOwnProperty;
	function l(e, t) {
		var l = i(e), u = !l && r(e), d = !l && !u && a(e), f = !l && !u && !d && s(e), p = l || u || d || f, m = p ? n(e.length, String) : [], h = m.length;
		for (var g in e) (t || c.call(e, g)) && !(p && (g == "length" || d && (g == "offset" || g == "parent") || f && (g == "buffer" || g == "byteLength" || g == "byteOffset") || o(g, h))) && m.push(g);
		return m;
	}
	t.exports = l;
})), Zg = /* @__PURE__ */ o(((e, t) => {
	var n = Object.prototype;
	function r(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || n);
	}
	t.exports = r;
})), Qg = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		var t = [];
		if (e != null) for (var n in Object(e)) t.push(n);
		return t;
	}
	t.exports = n;
})), $g = /* @__PURE__ */ o(((e, t) => {
	var n = pg(), r = Zg(), i = Qg(), a = Object.prototype.hasOwnProperty;
	function o(e) {
		if (!n(e)) return i(e);
		var t = r(e), o = [];
		for (var s in e) s == "constructor" && (t || !a.call(e, s)) || o.push(s);
		return o;
	}
	t.exports = o;
})), e_ = /* @__PURE__ */ o(((e, t) => {
	var n = Xg(), r = $g(), i = Fg();
	function a(e) {
		return i(e) ? n(e, !0) : r(e);
	}
	t.exports = a;
})), t_ = /* @__PURE__ */ o(((e, t) => {
	var n = Tg(), r = Rg(), i = e_();
	t.exports = r(function(e, t) {
		n(t, i(t), e);
	});
})), n_ = Symbol("formvuelar-form-context");
function r_() {
	return {
		errors: {},
		isLoading: !1,
		uploadPercentage: 0,
		dirty: () => {},
		getErrors: () => [],
		hasErrors: () => !1
	};
}
//#endregion
//#region src/components/mixins/config.js
var i_ = { methods: { getConfig(e, t) {
	let n = this.$.appContext.config.globalProperties.$formvuelar;
	return n && n[e] ? n[e] : t;
} } }, a_ = /* @__PURE__ */ l(t_()), o_ = {
	mixins: [i_],
	emits: [
		"changed",
		"error",
		"requestfinished",
		"requeststarted",
		"success",
		"uploadProgress"
	],
	props: {
		method: {
			type: String,
			default: "post",
			validator: function(e) {
				return [
					"get",
					"post",
					"put",
					"patch",
					"delete"
				].indexOf(e) !== -1;
			}
		},
		url: {
			type: String,
			required: !0
		},
		multipart: {
			type: Boolean,
			default: !1
		},
		headers: {
			type: Object,
			default: () => ({})
		},
		data: {
			type: Object,
			default: () => ({})
		}
	},
	data() {
		return {
			errors: {},
			uploadPercentage: 0,
			isLoading: !1,
			isDragging: !1
		};
	},
	provide() {
		let e = this;
		return { [n_]: {
			get errors() {
				return e.errors;
			},
			get isLoading() {
				return e.isLoading;
			},
			get uploadPercentage() {
				return e.uploadPercentage;
			},
			dirty: (t) => e.dirty(t),
			getErrors: (t) => e.getErrors(t),
			hasErrors: (t) => e.hasErrors(t)
		} };
	},
	computed: { additionalHeaders() {
		let e = this.multipart ? { "Content-Type": "multipart/form-data" } : {}, t = this.getConfig("headers", {});
		return (0, a_.default)(t, this.headers, e);
	} },
	created() {
		this.axios = og.create(), this.loadInterceptors();
	},
	beforeUnmount() {
		this.unloadInterceptors();
	},
	methods: {
		prepareData() {
			let e = this.data, t = new FormData();
			return Object.keys(e).forEach((n) => {
				e[n] instanceof Array ? Object.keys(e[n]).forEach((r) => {
					e[n][r] instanceof File ? t.append(n + "[]", e[n][r]) : e[n][r] instanceof Object ? t.append(n + "[]", JSON.stringify(this.replaceNullOnMultipart(e[n][r]))) : t.append(n, this.replaceNullOnMultipart(e[n]));
				}) : e[n] instanceof Object && !(e[n] instanceof File) ? t.append(n, JSON.stringify(this.replaceNullOnMultipart(e[n]))) : this.multipart && typeof e[n] == "boolean" ? t.append(n, +!!e[n]) : t.append(n, this.replaceNullOnMultipart(e[n]));
			}), (this.method == "patch" || this.method == "put") && t.append("_method", this.method), t;
		},
		replaceNullOnMultipart(e) {
			return this.multipart && e === null ? "" : e;
		},
		submit() {
			let e = this;
			this.isLoading = !0, this.$emit("requeststarted");
			let t = this.multipart && (this.method == "patch" || this.method == "put") ? "post" : this.method;
			this.axios({
				method: t,
				url: this.url,
				data: this.multipart ? this.prepareData() : this.data,
				params: this.method == "get" || this.method == "delete" ? this.data : {},
				headers: this.additionalHeaders,
				onUploadProgress: function(t) {
					let n = Math.round(t.loaded * 100 / t.total);
					e.uploadPercentage = n, e.$emit("uploadProgress", n);
				}
			}).then(function(t) {
				e.$emit("success", t);
			}).catch(function(t) {
				if (t.response && t.response.status === 422 && (e.errors = t.response.data.errors, e.$nextTick(() => {
					document.getElementsByClassName("fvl-has-error")[0]?.scrollIntoView({
						behavior: "smooth",
						block: "nearest",
						inline: "nearest"
					});
				})), t.response && t.response.status === 419) {
					e.$emit("error", { response: { status: 419 } });
					return;
				}
				if (t.response && t.response.status === 401) {
					e.$emit("error", { response: { status: 401 } });
					return;
				}
				e.$emit("error", t.response);
			}).then(function() {
				e.isLoading = !1, e.uploadPercentage = 0, e.$emit("uploadProgress", 0), e.$emit("requestfinished");
			});
		},
		dirty(e) {
			Object.keys(this.errors).filter((t) => t.startsWith(e + ".")).forEach((e) => {
				this.errors[e] = !1;
			}), this.errors[e] = !1, this.$emit("changed", { fieldName: e });
		},
		getErrors(e) {
			return this.errors[e] ? this.errors[e] : [];
		},
		hasErrors(e) {
			return !!(this.errors[e] && this.errors[e].length);
		},
		loadInterceptors() {
			let e = this.getConfig("interceptors", !1);
			e && (e.request && (this.requestInterceptor = this.axios.interceptors.request.use(e.request.before, e.request.error)), e.response && (this.responseInterceptor = this.axios.interceptors.response.use(e.response.success, e.response.error)));
		},
		unloadInterceptors() {
			this.requestInterceptor && this.axios.interceptors.request.eject(this.requestInterceptor), this.responseInterceptor && this.axios.interceptors.response.eject(this.responseInterceptor);
		}
	}
};
function s_(e, t, n, r, i, a) {
	return H(), U("form", {
		class: F({ "fvl-form-drag-over": i.isDragging }),
		onSubmit: t[0] ||= Cl((e) => a.submit(), ["prevent"]),
		onDragover: t[1] ||= (e) => i.isDragging = !0,
		onDragend: t[2] ||= (e) => i.isDragging = !1,
		onDragleave: t[3] ||= (e) => i.isDragging = !1,
		onDragexit: t[4] ||= (e) => i.isDragging = !1,
		onDrop: t[5] ||= (e) => i.isDragging = !1
	}, [V(e.$slots, "default")], 34);
}
var c_ = /*#__PURE__*/ Y(o_, [["render", s_]]), l_ = {
	props: { errors: {
		type: Array,
		default: () => []
	} },
	computed: { multible() {
		return this.errors.length > 1 ? "- " : "";
	} }
}, u_ = ["innerHTML"];
function d_(e, t, n, r, i, a) {
	return H(), Ho(Qc, {
		name: "slide-down",
		appear: ""
	}, {
		default: z(() => [(H(!0), U(Mo, null, Wi(n.errors, (e, t) => (H(), U("div", {
			key: "error" + t,
			class: "fvl-checkbox-error-message",
			innerHTML: a.multible + e
		}, null, 8, u_))), 128))]),
		_: 1
	});
}
var f_ = /*#__PURE__*/ Y(l_, [["render", d_]]), p_ = {
	inject: { fvlFormContext: {
		from: n_,
		default: r_()
	} },
	computed: {
		formIsLoading() {
			return this.fvlFormContext.isLoading;
		},
		formUploadPercentage() {
			return this.fvlFormContext.uploadPercentage;
		}
	},
	methods: {
		formDirty(e) {
			this.fvlFormContext.dirty(e);
		},
		formGetErrors(e) {
			return this.fvlFormContext.getErrors(e);
		},
		formHasErrors(e) {
			return this.fvlFormContext.hasErrors(e);
		}
	}
}, m_ = {
	components: { ValidationErrors: f_ },
	mixins: [p_],
	emits: [
		"changed",
		"input",
		"update:modelValue"
	],
	props: {
		label: {
			type: String,
			required: !1,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			default: null
		},
		modelValue: {
			validator: (e) => typeof e == "string" || e === "number" || e === null,
			default: ""
		},
		type: {
			type: String,
			default: "text"
		},
		min: {
			type: Number,
			required: !1,
			default: null
		},
		max: {
			type: Number,
			required: !1,
			default: null
		},
		maxlength: {
			type: Number,
			required: !1,
			default: null
		},
		size: {
			type: Number,
			required: !1,
			default: null
		},
		step: {
			type: Number,
			required: !1,
			default: null
		},
		pattern: {
			type: String,
			required: !1,
			default: null
		},
		placeholder: {
			type: String,
			required: !1,
			default: null
		},
		autocomplete: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	methods: {
		handleChange() {
			this.formDirty(this.name), this.$emit("changed");
		},
		handleInput(e) {
			this.formDirty(this.name), this.$emit("update:modelValue", e.target.value), this.$emit("input", e);
		}
	}
}, h_ = ["for"], g_ = ["innerHTML"], __ = { class: "fvl-input-group" }, v_ = [
	"id",
	"value",
	"name",
	"type",
	"placeholder",
	"autocomplete",
	"min",
	"max",
	"size",
	"step",
	"maxlength",
	"required",
	"readonly",
	"disabled",
	"pattern"
];
function y_(e, t, n, r, i, a) {
	let o = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-input-wrapper"]) }, [
		n.label ? (H(), U("label", {
			key: 0,
			class: F([n.labelClass, "fvl-input-label"]),
			for: n.name
		}, [W("span", { innerHTML: n.label }, null, 8, g_), V(e.$slots, "label_suffix")], 10, h_)) : q("", !0),
		W("div", __, [
			V(e.$slots, "prefix"),
			W("input", {
				id: n.id,
				value: n.modelValue,
				name: n.name,
				type: n.type,
				placeholder: n.placeholder,
				autocomplete: n.autocomplete,
				class: F([n.fieldClass, "fvl-input"]),
				min: n.min,
				max: n.max,
				size: n.size,
				step: n.step,
				maxlength: n.maxlength,
				required: n.required,
				readonly: n.readonly,
				disabled: n.disabled,
				pattern: n.pattern,
				onChange: t[0] ||= (...e) => a.handleChange && a.handleChange(...e),
				onInput: t[1] ||= (...e) => a.handleInput && a.handleInput(...e)
			}, null, 42, v_),
			V(e.$slots, "suffix")
		]),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(o, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var b_ = /*#__PURE__*/ Y(m_, [["render", y_]]), x_ = {
	components: { ValidationErrors: f_ },
	mixins: [p_],
	emits: [
		"changed",
		"input",
		"update:modelValue"
	],
	props: {
		label: {
			type: String,
			required: !1,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			default: null
		},
		modelValue: {
			validator: (e) => typeof e == "string" || e === null,
			default: ""
		},
		placeholder: {
			type: String,
			required: !1,
			default: null
		},
		autocomplete: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		cols: {
			type: Number,
			required: !1,
			default: null
		},
		maxlength: {
			type: Number,
			required: !1,
			default: null
		},
		rows: {
			type: Number,
			required: !1,
			default: null
		},
		wrap: {
			type: String,
			required: !1,
			default: null
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	methods: {
		handleChange() {
			this.formDirty(this.name), this.$emit("changed");
		},
		handleInput(e) {
			this.formDirty(this.name), this.$emit("update:modelValue", e.target.value), this.$emit("input", e);
		}
	}
}, S_ = ["for"], C_ = ["innerHTML"], w_ = { class: "fvl-input-group" }, T_ = [
	"id",
	"value",
	"name",
	"placeholder",
	"autocomplete",
	"cols",
	"maxlength",
	"rows",
	"wrap",
	"required",
	"readonly",
	"disabled"
];
function E_(e, t, n, r, i, a) {
	let o = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-textarea-wrapper"]) }, [
		n.label ? (H(), U("label", {
			key: 0,
			class: F([n.labelClass, "fvl-textarea-label"]),
			for: n.name
		}, [W("span", { innerHTML: n.label }, null, 8, C_), V(e.$slots, "label_suffix")], 10, S_)) : q("", !0),
		W("div", w_, [W("textarea", {
			id: n.id,
			value: n.modelValue,
			name: n.name,
			placeholder: n.placeholder,
			autocomplete: n.autocomplete,
			class: F([n.fieldClass, "fvl-textarea"]),
			cols: n.cols,
			maxlength: n.maxlength,
			rows: n.rows,
			wrap: n.wrap,
			required: n.required,
			readonly: n.readonly,
			disabled: n.disabled,
			onChange: t[0] ||= (...e) => a.handleChange && a.handleChange(...e),
			onInput: t[1] ||= (...e) => a.handleInput && a.handleInput(...e)
		}, null, 42, T_)]),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(o, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var D_ = /*#__PURE__*/ Y(x_, [["render", E_]]), O_ = {
	components: { ValidationErrors: f_ },
	mixins: [p_],
	emits: ["changed", "update:modelValue"],
	props: {
		modelValue: {
			type: [String, Number],
			default: ""
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			default: null
		},
		label: {
			type: String,
			default: null
		},
		options: {
			type: Object,
			required: !0,
			default: () => ({})
		},
		allowEmpty: {
			type: Boolean,
			default: !0
		},
		placeholder: {
			type: String,
			required: !1,
			default: null
		},
		autocomplete: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: ""
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	methods: { handleChange(e) {
		this.$emit("update:modelValue", e.target.value), this.$emit("changed"), this.formDirty(this.name);
	} }
}, k_ = ["for"], A_ = ["innerHTML"], j_ = { class: "fvl-select" }, M_ = [
	"id",
	"value",
	"name",
	"placeholder",
	"autocomplete",
	"required",
	"readonly",
	"disabled"
], N_ = ["textContent"], P_ = ["value", "textContent"];
function F_(e, t, n, r, i, a) {
	let o = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-select-wrapper"]) }, [
		n.label ? (H(), U("label", {
			key: 0,
			class: F([n.labelClass, "fvl-select-label"]),
			for: n.id
		}, [W("span", { innerHTML: n.label }, null, 8, A_), V(e.$slots, "label_suffix")], 10, k_)) : q("", !0),
		W("div", j_, [W("select", {
			id: n.id,
			ref: "select",
			value: n.modelValue,
			name: n.name,
			placeholder: n.placeholder,
			autocomplete: n.autocomplete,
			class: F(n.fieldClass),
			required: n.required,
			readonly: n.readonly,
			disabled: n.disabled,
			onChange: t[0] ||= (...e) => a.handleChange && a.handleChange(...e)
		}, [n.allowEmpty ? (H(), U("option", {
			key: 0,
			disabled: "",
			value: "",
			textContent: I(n.placeholder)
		}, null, 8, N_)) : q("", !0), (H(!0), U(Mo, null, Wi(n.options, (e, t) => (H(), U("option", {
			key: t,
			value: t,
			textContent: I(e)
		}, null, 8, P_))), 128))], 42, M_), W("div", {
			class: "pointer-events-none absolute h-full inset-y-0 right-0 flex items-center px-2 text-gray-700",
			onClick: t[1] ||= (t) => e.$refs.select.click()
		}, [...t[2] ||= [W("svg", {
			class: "fill-current h-4 w-4",
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 20 20"
		}, [W("path", { d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" })], -1)]])]),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(o, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var I_ = /*#__PURE__*/ Y(O_, [["render", F_]]);
//#endregion
//#region node_modules/fuse.js/dist/fuse.esm.js
function L_(e) {
	return Array.isArray ? Array.isArray(e) : q_(e) === "[object Array]";
}
function R_(e) {
	if (typeof e == "string") return e;
	let t = e + "";
	return t == "0" && 1 / e == -Infinity ? "-0" : t;
}
function z_(e) {
	return e == null ? "" : R_(e);
}
function B_(e) {
	return typeof e == "string";
}
function V_(e) {
	return typeof e == "number";
}
function H_(e) {
	return e === !0 || e === !1 || W_(e) && q_(e) == "[object Boolean]";
}
function U_(e) {
	return typeof e == "object";
}
function W_(e) {
	return U_(e) && e !== null;
}
function G_(e) {
	return e != null;
}
function K_(e) {
	return !e.trim().length;
}
function q_(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var J_ = "Incorrect 'index' type", Y_ = (e) => `Invalid value for key ${e}`, X_ = (e) => `Pattern length exceeds max of ${e}.`, Z_ = (e) => `Missing ${e} property in key`, Q_ = (e) => `Property 'weight' in key '${e}' must be a positive integer`, $_ = Object.prototype.hasOwnProperty, ev = class {
	constructor(e) {
		this._keys = [], this._keyMap = {};
		let t = 0;
		e.forEach((e) => {
			let n = tv(e);
			t += n.weight, this._keys.push(n), this._keyMap[n.id] = n, t += n.weight;
		}), this._keys.forEach((e) => {
			e.weight /= t;
		});
	}
	get(e) {
		return this._keyMap[e];
	}
	keys() {
		return this._keys;
	}
	toJSON() {
		return JSON.stringify(this._keys);
	}
};
function tv(e) {
	let t = null, n = null, r = null, i = 1, a = null;
	if (B_(e) || L_(e)) r = e, t = nv(e), n = rv(e);
	else {
		if (!$_.call(e, "name")) throw Error(Z_("name"));
		let o = e.name;
		if (r = o, $_.call(e, "weight") && (i = e.weight, i <= 0)) throw Error(Q_(o));
		t = nv(o), n = rv(o), a = e.getFn;
	}
	return {
		path: t,
		id: n,
		weight: i,
		src: r,
		getFn: a
	};
}
function nv(e) {
	return L_(e) ? e : e.split(".");
}
function rv(e) {
	return L_(e) ? e.join(".") : e;
}
function iv(e, t) {
	let n = [], r = !1, i = (e, t, a) => {
		if (G_(e)) {
			if (!t[a]) n.push(e);
			else {
				let o = e[t[a]];
				if (!G_(o)) return;
				if (a === t.length - 1 && (B_(o) || V_(o) || H_(o))) n.push(z_(o));
				else if (L_(o)) {
					r = !0;
					for (let e = 0, n = o.length; e < n; e += 1) i(o[e], t, a + 1);
				} else t.length && i(o, t, a + 1);
			}
		}
	};
	return i(e, B_(t) ? t.split(".") : t, 0), r ? n : n[0];
}
var av = {
	includeMatches: !1,
	findAllMatches: !1,
	minMatchCharLength: 1
}, ov = {
	isCaseSensitive: !1,
	includeScore: !1,
	keys: [],
	shouldSort: !0,
	sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, sv = {
	location: 0,
	threshold: .6,
	distance: 100
}, cv = {
	useExtendedSearch: !1,
	getFn: iv,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, Q = {
	...ov,
	...av,
	...sv,
	...cv
}, lv = /[^ ]+/g;
function uv(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = 10 ** t;
	return {
		get(t) {
			let i = t.match(lv).length;
			if (n.has(i)) return n.get(i);
			let a = 1 / i ** (.5 * e), o = parseFloat(Math.round(a * r) / r);
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var dv = class {
	constructor({ getFn: e = Q.getFn, fieldNormWeight: t = Q.fieldNormWeight } = {}) {
		this.norm = uv(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
	}
	setSources(e = []) {
		this.docs = e;
	}
	setIndexRecords(e = []) {
		this.records = e;
	}
	setKeys(e = []) {
		this.keys = e, this._keysMap = {}, e.forEach((e, t) => {
			this._keysMap[e.id] = t;
		});
	}
	create() {
		this.isCreated || !this.docs.length || (this.isCreated = !0, B_(this.docs[0]) ? this.docs.forEach((e, t) => {
			this._addString(e, t);
		}) : this.docs.forEach((e, t) => {
			this._addObject(e, t);
		}), this.norm.clear());
	}
	add(e) {
		let t = this.size();
		B_(e) ? this._addString(e, t) : this._addObject(e, t);
	}
	removeAt(e) {
		this.records.splice(e, 1);
		for (let t = e, n = this.size(); t < n; t += 1) --this.records[t].i;
	}
	getValueForItemAtKeyId(e, t) {
		return e[this._keysMap[t]];
	}
	size() {
		return this.records.length;
	}
	_addString(e, t) {
		if (!G_(e) || K_(e)) return;
		let n = {
			v: e,
			i: t,
			n: this.norm.get(e)
		};
		this.records.push(n);
	}
	_addObject(e, t) {
		let n = {
			i: t,
			$: {}
		};
		this.keys.forEach((t, r) => {
			let i = t.getFn ? t.getFn(e) : this.getFn(e, t.path);
			if (G_(i)) {
				if (L_(i)) {
					let e = [], t = [{
						nestedArrIndex: -1,
						value: i
					}];
					for (; t.length;) {
						let { nestedArrIndex: n, value: r } = t.pop();
						if (G_(r)) {
							if (B_(r) && !K_(r)) {
								let t = {
									v: r,
									i: n,
									n: this.norm.get(r)
								};
								e.push(t);
							} else L_(r) && r.forEach((e, n) => {
								t.push({
									nestedArrIndex: n,
									value: e
								});
							});
						}
					}
					n.$[r] = e;
				} else if (B_(i) && !K_(i)) {
					let e = {
						v: i,
						n: this.norm.get(i)
					};
					n.$[r] = e;
				}
			}
		}), this.records.push(n);
	}
	toJSON() {
		return {
			keys: this.keys,
			records: this.records
		};
	}
};
function fv(e, t, { getFn: n = Q.getFn, fieldNormWeight: r = Q.fieldNormWeight } = {}) {
	let i = new dv({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(tv)), i.setSources(t), i.create(), i;
}
function pv(e, { getFn: t = Q.getFn, fieldNormWeight: n = Q.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new dv({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function mv(e, { errors: t = 0, currentLocation: n = 0, expectedLocation: r = 0, distance: i = Q.distance, ignoreLocation: a = Q.ignoreLocation } = {}) {
	let o = t / e.length;
	if (a) return o;
	let s = Math.abs(r - n);
	return i ? o + s / i : s ? 1 : o;
}
function hv(e = [], t = Q.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
var gv = 32;
function _v(e, t, n, { location: r = Q.location, distance: i = Q.distance, threshold: a = Q.threshold, findAllMatches: o = Q.findAllMatches, minMatchCharLength: s = Q.minMatchCharLength, includeMatches: c = Q.includeMatches, ignoreLocation: l = Q.ignoreLocation } = {}) {
	if (t.length > gv) throw Error(X_(gv));
	let u = t.length, d = e.length, f = Math.max(0, Math.min(r, d)), p = a, m = f, h = s > 1 || c, g = h ? Array(d) : [], _;
	for (; (_ = e.indexOf(t, m)) > -1;) {
		let e = mv(t, {
			currentLocation: _,
			expectedLocation: f,
			distance: i,
			ignoreLocation: l
		});
		if (p = Math.min(e, p), m = _ + u, h) {
			let e = 0;
			for (; e < u;) g[_ + e] = 1, e += 1;
		}
	}
	m = -1;
	let v = [], y = 1, b = u + d, x = 1 << u - 1;
	for (let r = 0; r < u; r += 1) {
		let a = 0, s = b;
		for (; a < s;) mv(t, {
			errors: r,
			currentLocation: f + s,
			expectedLocation: f,
			distance: i,
			ignoreLocation: l
		}) <= p ? a = s : b = s, s = Math.floor((b - a) / 2 + a);
		b = s;
		let c = Math.max(1, f - s + 1), _ = o ? d : Math.min(f + s, d) + u, S = Array(_ + 2);
		S[_ + 1] = (1 << r) - 1;
		for (let a = _; a >= c; --a) {
			let o = a - 1, s = n[e.charAt(o)];
			if (h && (g[o] = +!!s), S[a] = (S[a + 1] << 1 | 1) & s, r && (S[a] |= (v[a + 1] | v[a]) << 1 | 1 | v[a + 1]), S[a] & x && (y = mv(t, {
				errors: r,
				currentLocation: o,
				expectedLocation: f,
				distance: i,
				ignoreLocation: l
			}), y <= p)) {
				if (p = y, m = o, m <= f) break;
				c = Math.max(1, 2 * f - m);
			}
		}
		if (mv(t, {
			errors: r + 1,
			currentLocation: f,
			expectedLocation: f,
			distance: i,
			ignoreLocation: l
		}) > p) break;
		v = S;
	}
	let S = {
		isMatch: m >= 0,
		score: Math.max(.001, y)
	};
	if (h) {
		let e = hv(g, s);
		e.length ? c && (S.indices = e) : S.isMatch = !1;
	}
	return S;
}
function vv(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
var yv = class {
	constructor(e, { location: t = Q.location, threshold: n = Q.threshold, distance: r = Q.distance, includeMatches: i = Q.includeMatches, findAllMatches: a = Q.findAllMatches, minMatchCharLength: o = Q.minMatchCharLength, isCaseSensitive: s = Q.isCaseSensitive, ignoreLocation: c = Q.ignoreLocation } = {}) {
		if (this.options = {
			location: t,
			threshold: n,
			distance: r,
			includeMatches: i,
			findAllMatches: a,
			minMatchCharLength: o,
			isCaseSensitive: s,
			ignoreLocation: c
		}, this.pattern = s ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length) return;
		let l = (e, t) => {
			this.chunks.push({
				pattern: e,
				alphabet: vv(e),
				startIndex: t
			});
		}, u = this.pattern.length;
		if (u > gv) {
			let e = 0, t = u % gv, n = u - t;
			for (; e < n;) l(this.pattern.substr(e, gv), e), e += gv;
			if (t) {
				let e = u - gv;
				l(this.pattern.substr(e), e);
			}
		} else l(this.pattern, 0);
	}
	searchIn(e) {
		let { isCaseSensitive: t, includeMatches: n } = this.options;
		if (t || (e = e.toLowerCase()), this.pattern === e) {
			let t = {
				isMatch: !0,
				score: 0
			};
			return n && (t.indices = [[0, e.length - 1]]), t;
		}
		let { location: r, distance: i, threshold: a, findAllMatches: o, minMatchCharLength: s, ignoreLocation: c } = this.options, l = [], u = 0, d = !1;
		this.chunks.forEach(({ pattern: t, alphabet: f, startIndex: p }) => {
			let { isMatch: m, score: h, indices: g } = _v(e, t, f, {
				location: r + p,
				distance: i,
				threshold: a,
				findAllMatches: o,
				minMatchCharLength: s,
				includeMatches: n,
				ignoreLocation: c
			});
			m && (d = !0), u += h, m && g && (l = [...l, ...g]);
		});
		let f = {
			isMatch: d,
			score: d ? u / this.chunks.length : 1
		};
		return d && n && (f.indices = l), f;
	}
}, bv = class {
	constructor(e) {
		this.pattern = e;
	}
	static isMultiMatch(e) {
		return xv(e, this.multiRegex);
	}
	static isSingleMatch(e) {
		return xv(e, this.singleRegex);
	}
	search() {}
};
function xv(e, t) {
	let n = e.match(t);
	return n ? n[1] : null;
}
var Sv = class extends bv {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "exact";
	}
	static get multiRegex() {
		return /^="(.*)"$/;
	}
	static get singleRegex() {
		return /^=(.*)$/;
	}
	search(e) {
		let t = e === this.pattern;
		return {
			isMatch: t,
			score: +!t,
			indices: [0, this.pattern.length - 1]
		};
	}
}, Cv = class extends bv {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "inverse-exact";
	}
	static get multiRegex() {
		return /^!"(.*)"$/;
	}
	static get singleRegex() {
		return /^!(.*)$/;
	}
	search(e) {
		let t = e.indexOf(this.pattern) === -1;
		return {
			isMatch: t,
			score: +!t,
			indices: [0, e.length - 1]
		};
	}
}, wv = class extends bv {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "prefix-exact";
	}
	static get multiRegex() {
		return /^\^"(.*)"$/;
	}
	static get singleRegex() {
		return /^\^(.*)$/;
	}
	search(e) {
		let t = e.startsWith(this.pattern);
		return {
			isMatch: t,
			score: +!t,
			indices: [0, this.pattern.length - 1]
		};
	}
}, Tv = class extends bv {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "inverse-prefix-exact";
	}
	static get multiRegex() {
		return /^!\^"(.*)"$/;
	}
	static get singleRegex() {
		return /^!\^(.*)$/;
	}
	search(e) {
		let t = !e.startsWith(this.pattern);
		return {
			isMatch: t,
			score: +!t,
			indices: [0, e.length - 1]
		};
	}
}, Ev = class extends bv {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "suffix-exact";
	}
	static get multiRegex() {
		return /^"(.*)"\$$/;
	}
	static get singleRegex() {
		return /^(.*)\$$/;
	}
	search(e) {
		let t = e.endsWith(this.pattern);
		return {
			isMatch: t,
			score: +!t,
			indices: [e.length - this.pattern.length, e.length - 1]
		};
	}
}, Dv = class extends bv {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "inverse-suffix-exact";
	}
	static get multiRegex() {
		return /^!"(.*)"\$$/;
	}
	static get singleRegex() {
		return /^!(.*)\$$/;
	}
	search(e) {
		let t = !e.endsWith(this.pattern);
		return {
			isMatch: t,
			score: +!t,
			indices: [0, e.length - 1]
		};
	}
}, Ov = class extends bv {
	constructor(e, { location: t = Q.location, threshold: n = Q.threshold, distance: r = Q.distance, includeMatches: i = Q.includeMatches, findAllMatches: a = Q.findAllMatches, minMatchCharLength: o = Q.minMatchCharLength, isCaseSensitive: s = Q.isCaseSensitive, ignoreLocation: c = Q.ignoreLocation } = {}) {
		super(e), this._bitapSearch = new yv(e, {
			location: t,
			threshold: n,
			distance: r,
			includeMatches: i,
			findAllMatches: a,
			minMatchCharLength: o,
			isCaseSensitive: s,
			ignoreLocation: c
		});
	}
	static get type() {
		return "fuzzy";
	}
	static get multiRegex() {
		return /^"(.*)"$/;
	}
	static get singleRegex() {
		return /^(.*)$/;
	}
	search(e) {
		return this._bitapSearch.searchIn(e);
	}
}, kv = class extends bv {
	constructor(e) {
		super(e);
	}
	static get type() {
		return "include";
	}
	static get multiRegex() {
		return /^'"(.*)"$/;
	}
	static get singleRegex() {
		return /^'(.*)$/;
	}
	search(e) {
		let t = 0, n, r = [], i = this.pattern.length;
		for (; (n = e.indexOf(this.pattern, t)) > -1;) t = n + i, r.push([n, t - 1]);
		let a = !!r.length;
		return {
			isMatch: a,
			score: +!a,
			indices: r
		};
	}
}, Av = [
	Sv,
	kv,
	wv,
	Tv,
	Dv,
	Ev,
	Cv,
	Ov
], jv = Av.length, Mv = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, Nv = "|";
function Pv(e, t = {}) {
	return e.split(Nv).map((e) => {
		let n = e.trim().split(Mv).filter((e) => e && !!e.trim()), r = [];
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e], a = !1, o = -1;
			for (; !a && ++o < jv;) {
				let e = Av[o], n = e.isMultiMatch(i);
				n && (r.push(new e(n, t)), a = !0);
			}
			if (!a) for (o = -1; ++o < jv;) {
				let e = Av[o], n = e.isSingleMatch(i);
				if (n) {
					r.push(new e(n, t));
					break;
				}
			}
		}
		return r;
	});
}
var Fv = /* @__PURE__ */ new Set([Ov.type, kv.type]), Iv = class {
	constructor(e, { isCaseSensitive: t = Q.isCaseSensitive, includeMatches: n = Q.includeMatches, minMatchCharLength: r = Q.minMatchCharLength, ignoreLocation: i = Q.ignoreLocation, findAllMatches: a = Q.findAllMatches, location: o = Q.location, threshold: s = Q.threshold, distance: c = Q.distance } = {}) {
		this.query = null, this.options = {
			isCaseSensitive: t,
			includeMatches: n,
			minMatchCharLength: r,
			findAllMatches: a,
			ignoreLocation: i,
			location: o,
			threshold: s,
			distance: c
		}, this.pattern = t ? e : e.toLowerCase(), this.query = Pv(this.pattern, this.options);
	}
	static condition(e, t) {
		return t.useExtendedSearch;
	}
	searchIn(e) {
		let t = this.query;
		if (!t) return {
			isMatch: !1,
			score: 1
		};
		let { includeMatches: n, isCaseSensitive: r } = this.options;
		e = r ? e : e.toLowerCase();
		let i = 0, a = [], o = 0;
		for (let r = 0, s = t.length; r < s; r += 1) {
			let s = t[r];
			a.length = 0, i = 0;
			for (let t = 0, r = s.length; t < r; t += 1) {
				let r = s[t], { isMatch: c, indices: l, score: u } = r.search(e);
				if (c) {
					if (i += 1, o += u, n) {
						let e = r.constructor.type;
						Fv.has(e) ? a = [...a, ...l] : a.push(l);
					}
				} else {
					o = 0, i = 0, a.length = 0;
					break;
				}
			}
			if (i) {
				let e = {
					isMatch: !0,
					score: o / i
				};
				return n && (e.indices = a), e;
			}
		}
		return {
			isMatch: !1,
			score: 1
		};
	}
}, Lv = [];
function Rv(...e) {
	Lv.push(...e);
}
function zv(e, t) {
	for (let n = 0, r = Lv.length; n < r; n += 1) {
		let r = Lv[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new yv(e, t);
}
var Bv = {
	AND: "$and",
	OR: "$or"
}, Vv = {
	PATH: "$path",
	PATTERN: "$val"
}, Hv = (e) => !!(e[Bv.AND] || e[Bv.OR]), Uv = (e) => !!e[Vv.PATH], Wv = (e) => !L_(e) && U_(e) && !Hv(e), Gv = (e) => ({ [Bv.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function Kv(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		let i = Object.keys(e), a = Uv(e);
		if (!a && i.length > 1 && !Hv(e)) return r(Gv(e));
		if (Wv(e)) {
			let r = a ? e[Vv.PATH] : i[0], o = a ? e[Vv.PATTERN] : e[r];
			if (!B_(o)) throw Error(Y_(r));
			let s = {
				keyId: rv(r),
				pattern: o
			};
			return n && (s.searcher = zv(o, t)), s;
		}
		let o = {
			children: [],
			operator: i[0]
		};
		return i.forEach((t) => {
			let n = e[t];
			L_(n) && n.forEach((e) => {
				o.children.push(r(e));
			});
		}), o;
	};
	return Hv(e) || (e = Gv(e)), r(e);
}
function qv(e, { ignoreFieldNorm: t = Q.ignoreFieldNorm }) {
	e.forEach((e) => {
		let n = 1;
		e.matches.forEach(({ key: e, norm: r, score: i }) => {
			let a = e ? e.weight : null;
			n *= (i === 0 && a ? 2 ** -52 : i) ** +((a || 1) * (t ? 1 : r));
		}), e.score = n;
	});
}
function Jv(e, t) {
	let n = e.matches;
	t.matches = [], G_(n) && n.forEach((e) => {
		if (!G_(e.indices) || !e.indices.length) return;
		let { indices: n, value: r } = e, i = {
			indices: n,
			value: r
		};
		e.key && (i.key = e.key.src), e.idx > -1 && (i.refIndex = e.idx), t.matches.push(i);
	});
}
function Yv(e, t) {
	t.score = e.score;
}
function Xv(e, t, { includeMatches: n = Q.includeMatches, includeScore: r = Q.includeScore } = {}) {
	let i = [];
	return n && i.push(Jv), r && i.push(Yv), e.map((e) => {
		let { idx: n } = e, r = {
			item: t[n],
			refIndex: n
		};
		return i.length && i.forEach((t) => {
			t(e, r);
		}), r;
	});
}
var Zv = class {
	constructor(e, t = {}, n) {
		this.options = {
			...Q,
			...t
		}, this.options.useExtendedSearch, this._keyStore = new ev(this.options.keys), this.setCollection(e, n);
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof dv)) throw Error(J_);
		this._myIndex = t || fv(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		});
	}
	add(e) {
		G_(e) && (this._docs.push(e), this._myIndex.add(e));
	}
	remove(e = () => !1) {
		let t = [];
		for (let n = 0, r = this._docs.length; n < r; n += 1) {
			let i = this._docs[n];
			e(i, n) && (this.removeAt(n), --n, --r, t.push(i));
		}
		return t;
	}
	removeAt(e) {
		this._docs.splice(e, 1), this._myIndex.removeAt(e);
	}
	getIndex() {
		return this._myIndex;
	}
	search(e, { limit: t = -1 } = {}) {
		let { includeMatches: n, includeScore: r, shouldSort: i, sortFn: a, ignoreFieldNorm: o } = this.options, s = B_(e) ? B_(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
		return qv(s, { ignoreFieldNorm: o }), i && s.sort(a), V_(t) && t > -1 && (s = s.slice(0, t)), Xv(s, this._docs, {
			includeMatches: n,
			includeScore: r
		});
	}
	_searchStringList(e) {
		let t = zv(e, this.options), { records: n } = this._myIndex, r = [];
		return n.forEach(({ v: e, i: n, n: i }) => {
			if (!G_(e)) return;
			let { isMatch: a, score: o, indices: s } = t.searchIn(e);
			a && r.push({
				item: e,
				idx: n,
				matches: [{
					score: o,
					value: e,
					norm: i,
					indices: s
				}]
			});
		}), r;
	}
	_searchLogical(e) {
		let t = Kv(e, this.options), n = (e, t, r) => {
			if (!e.children) {
				let { keyId: n, searcher: i } = e, a = this._findMatches({
					key: this._keyStore.get(n),
					value: this._myIndex.getValueForItemAtKeyId(t, n),
					searcher: i
				});
				return a && a.length ? [{
					idx: r,
					item: t,
					matches: a
				}] : [];
			}
			let i = [];
			for (let a = 0, o = e.children.length; a < o; a += 1) {
				let o = e.children[a], s = n(o, t, r);
				if (s.length) i.push(...s);
				else if (e.operator === Bv.AND) return [];
			}
			return i;
		}, r = this._myIndex.records, i = {}, a = [];
		return r.forEach(({ $: e, i: r }) => {
			if (G_(e)) {
				let o = n(t, e, r);
				o.length && (i[r] || (i[r] = {
					idx: r,
					item: e,
					matches: []
				}, a.push(i[r])), o.forEach(({ matches: e }) => {
					i[r].matches.push(...e);
				}));
			}
		}), a;
	}
	_searchObjectList(e) {
		let t = zv(e, this.options), { keys: n, records: r } = this._myIndex, i = [];
		return r.forEach(({ $: e, i: r }) => {
			if (!G_(e)) return;
			let a = [];
			n.forEach((n, r) => {
				a.push(...this._findMatches({
					key: n,
					value: e[r],
					searcher: t
				}));
			}), a.length && i.push({
				idx: r,
				item: e,
				matches: a
			});
		}), i;
	}
	_findMatches({ key: e, value: t, searcher: n }) {
		if (!G_(t)) return [];
		let r = [];
		if (L_(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!G_(t)) return;
			let { isMatch: o, score: s, indices: c } = n.searchIn(t);
			o && r.push({
				score: s,
				key: e,
				value: t,
				idx: i,
				norm: a,
				indices: c
			});
		});
		else {
			let { v: i, n: a } = t, { isMatch: o, score: s, indices: c } = n.searchIn(i);
			o && r.push({
				score: s,
				key: e,
				value: i,
				norm: a,
				indices: c
			});
		}
		return r;
	}
};
Zv.version = "6.6.2", Zv.createIndex = fv, Zv.parseIndex = pv, Zv.config = Q, Zv.parseQuery = Kv, Rv(Iv);
//#endregion
//#region node_modules/popper.js/dist/esm/popper.js
var Qv = typeof window < "u" && typeof document < "u" && typeof navigator < "u", $v = function() {
	for (var e = [
		"Edge",
		"Trident",
		"Firefox"
	], t = 0; t < e.length; t += 1) if (Qv && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
	return 0;
}();
function ey(e) {
	var t = !1;
	return function() {
		t || (t = !0, window.Promise.resolve().then(function() {
			t = !1, e();
		}));
	};
}
function ty(e) {
	var t = !1;
	return function() {
		t || (t = !0, setTimeout(function() {
			t = !1, e();
		}, $v));
	};
}
var ny = Qv && window.Promise ? ey : ty;
function ry(e) {
	return e && {}.toString.call(e) === "[object Function]";
}
function iy(e, t) {
	if (e.nodeType !== 1) return [];
	var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
	return t ? n[t] : n;
}
function ay(e) {
	return e.nodeName === "HTML" ? e : e.parentNode || e.host;
}
function oy(e) {
	if (!e) return document.body;
	switch (e.nodeName) {
		case "HTML":
		case "BODY": return e.ownerDocument.body;
		case "#document": return e.body;
	}
	var t = iy(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
	return /(auto|scroll|overlay)/.test(n + i + r) ? e : oy(ay(e));
}
function sy(e) {
	return e && e.referenceNode ? e.referenceNode : e;
}
var cy = Qv && !!(window.MSInputMethodContext && document.documentMode), ly = Qv && /MSIE 10/.test(navigator.userAgent);
function uy(e) {
	return e === 11 ? cy : e === 10 ? ly : cy || ly;
}
function dy(e) {
	if (!e) return document.documentElement;
	for (var t = uy(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
	var r = n && n.nodeName;
	return !r || r === "BODY" || r === "HTML" ? e ? e.ownerDocument.documentElement : document.documentElement : [
		"TH",
		"TD",
		"TABLE"
	].indexOf(n.nodeName) !== -1 && iy(n, "position") === "static" ? dy(n) : n;
}
function fy(e) {
	var t = e.nodeName;
	return t === "BODY" ? !1 : t === "HTML" || dy(e.firstElementChild) === e;
}
function py(e) {
	return e.parentNode === null ? e : py(e.parentNode);
}
function my(e, t) {
	if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
	var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, r = n ? e : t, i = n ? t : e, a = document.createRange();
	a.setStart(r, 0), a.setEnd(i, 0);
	var o = a.commonAncestorContainer;
	if (e !== o && t !== o || r.contains(i)) return fy(o) ? o : dy(o);
	var s = py(e);
	return s.host ? my(s.host, t) : my(e, py(t).host);
}
function hy(e) {
	var t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top") === "top" ? "scrollTop" : "scrollLeft", n = e.nodeName;
	if (n === "BODY" || n === "HTML") {
		var r = e.ownerDocument.documentElement;
		return (e.ownerDocument.scrollingElement || r)[t];
	}
	return e[t];
}
function gy(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r = hy(t, "top"), i = hy(t, "left"), a = n ? -1 : 1;
	return e.top += r * a, e.bottom += r * a, e.left += i * a, e.right += i * a, e;
}
function _y(e, t) {
	var n = t === "x" ? "Left" : "Top", r = n === "Left" ? "Right" : "Bottom";
	return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"]);
}
function vy(e, t, n, r) {
	return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], uy(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + (e === "Height" ? "Top" : "Left")]) + parseInt(r["margin" + (e === "Height" ? "Bottom" : "Right")]) : 0);
}
function yy(e) {
	var t = e.body, n = e.documentElement, r = uy(10) && getComputedStyle(n);
	return {
		height: vy("Height", t, n, r),
		width: vy("Width", t, n, r)
	};
}
var by = function(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}, xy = function() {
	function e(e, t) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
		}
	}
	return function(t, n, r) {
		return n && e(t.prototype, n), r && e(t, r), t;
	};
}(), Sy = function(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}, Cy = Object.assign || function(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t];
		for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
	}
	return e;
};
function wy(e) {
	return Cy({}, e, {
		right: e.left + e.width,
		bottom: e.top + e.height
	});
}
function Ty(e) {
	var t = {};
	try {
		if (uy(10)) {
			t = e.getBoundingClientRect();
			var n = hy(e, "top"), r = hy(e, "left");
			t.top += n, t.left += r, t.bottom += n, t.right += r;
		} else t = e.getBoundingClientRect();
	} catch {}
	var i = {
		left: t.left,
		top: t.top,
		width: t.right - t.left,
		height: t.bottom - t.top
	}, a = e.nodeName === "HTML" ? yy(e.ownerDocument) : {}, o = a.width || e.clientWidth || i.width, s = a.height || e.clientHeight || i.height, c = e.offsetWidth - o, l = e.offsetHeight - s;
	if (c || l) {
		var u = iy(e);
		c -= _y(u, "x"), l -= _y(u, "y"), i.width -= c, i.height -= l;
	}
	return wy(i);
}
function Ey(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r = uy(10), i = t.nodeName === "HTML", a = Ty(e), o = Ty(t), s = oy(e), c = iy(t), l = parseFloat(c.borderTopWidth), u = parseFloat(c.borderLeftWidth);
	n && i && (o.top = Math.max(o.top, 0), o.left = Math.max(o.left, 0));
	var d = wy({
		top: a.top - o.top - l,
		left: a.left - o.left - u,
		width: a.width,
		height: a.height
	});
	if (d.marginTop = 0, d.marginLeft = 0, !r && i) {
		var f = parseFloat(c.marginTop), p = parseFloat(c.marginLeft);
		d.top -= l - f, d.bottom -= l - f, d.left -= u - p, d.right -= u - p, d.marginTop = f, d.marginLeft = p;
	}
	return (r && !n ? t.contains(s) : t === s && s.nodeName !== "BODY") && (d = gy(d, t)), d;
}
function Dy(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = e.ownerDocument.documentElement, r = Ey(e, n), i = Math.max(n.clientWidth, window.innerWidth || 0), a = Math.max(n.clientHeight, window.innerHeight || 0), o = t ? 0 : hy(n), s = t ? 0 : hy(n, "left");
	return wy({
		top: o - r.top + r.marginTop,
		left: s - r.left + r.marginLeft,
		width: i,
		height: a
	});
}
function Oy(e) {
	var t = e.nodeName;
	if (t === "BODY" || t === "HTML") return !1;
	if (iy(e, "position") === "fixed") return !0;
	var n = ay(e);
	return n ? Oy(n) : !1;
}
function ky(e) {
	if (!e || !e.parentElement || uy()) return document.documentElement;
	for (var t = e.parentElement; t && iy(t, "transform") === "none";) t = t.parentElement;
	return t || document.documentElement;
}
function Ay(e, t, n, r) {
	var i = arguments.length > 4 && arguments[4] !== void 0 && arguments[4], a = {
		top: 0,
		left: 0
	}, o = i ? ky(e) : my(e, sy(t));
	if (r === "viewport") a = Dy(o, i);
	else {
		var s = void 0;
		r === "scrollParent" ? (s = oy(ay(t)), s.nodeName === "BODY" && (s = e.ownerDocument.documentElement)) : s = r === "window" ? e.ownerDocument.documentElement : r;
		var c = Ey(s, o, i);
		if (s.nodeName === "HTML" && !Oy(o)) {
			var l = yy(e.ownerDocument), u = l.height, d = l.width;
			a.top += c.top - c.marginTop, a.bottom = u + c.top, a.left += c.left - c.marginLeft, a.right = d + c.left;
		} else a = c;
	}
	n ||= 0;
	var f = typeof n == "number";
	return a.left += f ? n : n.left || 0, a.top += f ? n : n.top || 0, a.right -= f ? n : n.right || 0, a.bottom -= f ? n : n.bottom || 0, a;
}
function jy(e) {
	return e.width * e.height;
}
function My(e, t, n, r, i) {
	var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
	if (e.indexOf("auto") === -1) return e;
	var o = Ay(n, r, a, i), s = {
		top: {
			width: o.width,
			height: t.top - o.top
		},
		right: {
			width: o.right - t.right,
			height: o.height
		},
		bottom: {
			width: o.width,
			height: o.bottom - t.bottom
		},
		left: {
			width: t.left - o.left,
			height: o.height
		}
	}, c = Object.keys(s).map(function(e) {
		return Cy({ key: e }, s[e], { area: jy(s[e]) });
	}).sort(function(e, t) {
		return t.area - e.area;
	}), l = c.filter(function(e) {
		var t = e.width, r = e.height;
		return t >= n.clientWidth && r >= n.clientHeight;
	}), u = l.length > 0 ? l[0].key : c[0].key, d = e.split("-")[1];
	return u + (d ? "-" + d : "");
}
function Ny(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
	return Ey(n, r ? ky(t) : my(t, sy(n)), r);
}
function Py(e) {
	var t = e.ownerDocument.defaultView.getComputedStyle(e), n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0), r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
	return {
		width: e.offsetWidth + r,
		height: e.offsetHeight + n
	};
}
function Fy(e) {
	var t = {
		left: "right",
		right: "left",
		bottom: "top",
		top: "bottom"
	};
	return e.replace(/left|right|bottom|top/g, function(e) {
		return t[e];
	});
}
function Iy(e, t, n) {
	n = n.split("-")[0];
	var r = Py(e), i = {
		width: r.width,
		height: r.height
	}, a = ["right", "left"].indexOf(n) !== -1, o = a ? "top" : "left", s = a ? "left" : "top", c = a ? "height" : "width", l = a ? "width" : "height";
	return i[o] = t[o] + t[c] / 2 - r[c] / 2, i[s] = n === s ? t[s] - r[l] : t[Fy(s)], i;
}
function Ly(e, t) {
	return Array.prototype.find ? e.find(t) : e.filter(t)[0];
}
function Ry(e, t, n) {
	if (Array.prototype.findIndex) return e.findIndex(function(e) {
		return e[t] === n;
	});
	var r = Ly(e, function(e) {
		return e[t] === n;
	});
	return e.indexOf(r);
}
function zy(e, t, n) {
	return (n === void 0 ? e : e.slice(0, Ry(e, "name", n))).forEach(function(e) {
		e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
		var n = e.function || e.fn;
		e.enabled && ry(n) && (t.offsets.popper = wy(t.offsets.popper), t.offsets.reference = wy(t.offsets.reference), t = n(t, e));
	}), t;
}
function By() {
	if (!this.state.isDestroyed) {
		var e = {
			instance: this,
			styles: {},
			arrowStyles: {},
			attributes: {},
			flipped: !1,
			offsets: {}
		};
		e.offsets.reference = Ny(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = My(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = Iy(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = zy(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
	}
}
function Vy(e, t) {
	return e.some(function(e) {
		var n = e.name;
		return e.enabled && n === t;
	});
}
function Hy(e) {
	for (var t = [
		!1,
		"ms",
		"Webkit",
		"Moz",
		"O"
	], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
		var i = t[r], a = i ? "" + i + n : e;
		if (document.body.style[a] !== void 0) return a;
	}
	return null;
}
function Uy() {
	return this.state.isDestroyed = !0, Vy(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Hy("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
}
function Wy(e) {
	var t = e.ownerDocument;
	return t ? t.defaultView : window;
}
function Gy(e, t, n, r) {
	var i = e.nodeName === "BODY", a = i ? e.ownerDocument.defaultView : e;
	a.addEventListener(t, n, { passive: !0 }), i || Gy(oy(a.parentNode), t, n, r), r.push(a);
}
function Ky(e, t, n, r) {
	n.updateBound = r, Wy(e).addEventListener("resize", n.updateBound, { passive: !0 });
	var i = oy(e);
	return Gy(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n;
}
function qy() {
	this.state.eventsEnabled || (this.state = Ky(this.reference, this.options, this.state, this.scheduleUpdate));
}
function Jy(e, t) {
	return Wy(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
		e.removeEventListener("scroll", t.updateBound);
	}), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
}
function Yy() {
	this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = Jy(this.reference, this.state));
}
function Xy(e) {
	return e !== "" && !isNaN(parseFloat(e)) && isFinite(e);
}
function Zy(e, t) {
	Object.keys(t).forEach(function(n) {
		var r = "";
		[
			"width",
			"height",
			"top",
			"right",
			"bottom",
			"left"
		].indexOf(n) !== -1 && Xy(t[n]) && (r = "px"), e.style[n] = t[n] + r;
	});
}
function Qy(e, t) {
	Object.keys(t).forEach(function(n) {
		t[n] === !1 ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
	});
}
function $y(e) {
	return Zy(e.instance.popper, e.styles), Qy(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Zy(e.arrowElement, e.arrowStyles), e;
}
function eb(e, t, n, r, i) {
	var a = Ny(i, t, e, n.positionFixed), o = My(n.placement, a, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
	return t.setAttribute("x-placement", o), Zy(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
}
function tb(e, t) {
	var n = e.offsets, r = n.popper, i = n.reference, a = Math.round, o = Math.floor, s = function(e) {
		return e;
	}, c = a(i.width), l = a(r.width), u = ["left", "right"].indexOf(e.placement) !== -1, d = e.placement.indexOf("-") !== -1, f = c % 2 == l % 2, p = c % 2 == 1 && l % 2 == 1, m = t ? u || d || f ? a : o : s, h = t ? a : s;
	return {
		left: m(p && !d && t ? r.left - 1 : r.left),
		top: h(r.top),
		bottom: h(r.bottom),
		right: m(r.right)
	};
}
var nb = Qv && /Firefox/i.test(navigator.userAgent);
function rb(e, t) {
	var n = t.x, r = t.y, i = e.offsets.popper, a = Ly(e.instance.modifiers, function(e) {
		return e.name === "applyStyle";
	}).gpuAcceleration;
	a !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
	var o = a === void 0 ? t.gpuAcceleration : a, s = dy(e.instance.popper), c = Ty(s), l = { position: i.position }, u = tb(e, window.devicePixelRatio < 2 || !nb), d = n === "bottom" ? "top" : "bottom", f = r === "right" ? "left" : "right", p = Hy("transform"), m = void 0, h = void 0;
	if (h = d === "bottom" ? s.nodeName === "HTML" ? -s.clientHeight + u.bottom : -c.height + u.bottom : u.top, m = f === "right" ? s.nodeName === "HTML" ? -s.clientWidth + u.right : -c.width + u.right : u.left, o && p) l[p] = "translate3d(" + m + "px, " + h + "px, 0)", l[d] = 0, l[f] = 0, l.willChange = "transform";
	else {
		var g = d === "bottom" ? -1 : 1, _ = f === "right" ? -1 : 1;
		l[d] = h * g, l[f] = m * _, l.willChange = d + ", " + f;
	}
	return e.attributes = Cy({}, { "x-placement": e.placement }, e.attributes), e.styles = Cy({}, l, e.styles), e.arrowStyles = Cy({}, e.offsets.arrow, e.arrowStyles), e;
}
function ib(e, t, n) {
	var r = Ly(e, function(e) {
		return e.name === t;
	}), i = !!r && e.some(function(e) {
		return e.name === n && e.enabled && e.order < r.order;
	});
	if (!i) {
		var a = "`" + t + "`", o = "`" + n + "`";
		console.warn(o + " modifier is required by " + a + " modifier in order to work, be sure to include it before " + a + "!");
	}
	return i;
}
function ab(e, t) {
	var n;
	if (!ib(e.instance.modifiers, "arrow", "keepTogether")) return e;
	var r = t.element;
	if (typeof r == "string") {
		if (r = e.instance.popper.querySelector(r), !r) return e;
	} else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
	var i = e.placement.split("-")[0], a = e.offsets, o = a.popper, s = a.reference, c = ["left", "right"].indexOf(i) !== -1, l = c ? "height" : "width", u = c ? "Top" : "Left", d = u.toLowerCase(), f = c ? "left" : "top", p = c ? "bottom" : "right", m = Py(r)[l];
	s[p] - m < o[d] && (e.offsets.popper[d] -= o[d] - (s[p] - m)), s[d] + m > o[p] && (e.offsets.popper[d] += s[d] + m - o[p]), e.offsets.popper = wy(e.offsets.popper);
	var h = s[d] + s[l] / 2 - m / 2, g = iy(e.instance.popper), _ = parseFloat(g["margin" + u]), v = parseFloat(g["border" + u + "Width"]), y = h - e.offsets.popper[d] - _ - v;
	return y = Math.max(Math.min(o[l] - m, y), 0), e.arrowElement = r, e.offsets.arrow = (n = {}, Sy(n, d, Math.round(y)), Sy(n, f, ""), n), e;
}
function ob(e) {
	return e === "end" ? "start" : e === "start" ? "end" : e;
}
var sb = [
	"auto-start",
	"auto",
	"auto-end",
	"top-start",
	"top",
	"top-end",
	"right-start",
	"right",
	"right-end",
	"bottom-end",
	"bottom",
	"bottom-start",
	"left-end",
	"left",
	"left-start"
], cb = sb.slice(3);
function lb(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = cb.indexOf(e), r = cb.slice(n + 1).concat(cb.slice(0, n));
	return t ? r.reverse() : r;
}
var ub = {
	FLIP: "flip",
	CLOCKWISE: "clockwise",
	COUNTERCLOCKWISE: "counterclockwise"
};
function db(e, t) {
	if (Vy(e.instance.modifiers, "inner") || e.flipped && e.placement === e.originalPlacement) return e;
	var n = Ay(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), r = e.placement.split("-")[0], i = Fy(r), a = e.placement.split("-")[1] || "", o = [];
	switch (t.behavior) {
		case ub.FLIP:
			o = [r, i];
			break;
		case ub.CLOCKWISE:
			o = lb(r);
			break;
		case ub.COUNTERCLOCKWISE:
			o = lb(r, !0);
			break;
		default: o = t.behavior;
	}
	return o.forEach(function(s, c) {
		if (r !== s || o.length === c + 1) return e;
		r = e.placement.split("-")[0], i = Fy(r);
		var l = e.offsets.popper, u = e.offsets.reference, d = Math.floor, f = r === "left" && d(l.right) > d(u.left) || r === "right" && d(l.left) < d(u.right) || r === "top" && d(l.bottom) > d(u.top) || r === "bottom" && d(l.top) < d(u.bottom), p = d(l.left) < d(n.left), m = d(l.right) > d(n.right), h = d(l.top) < d(n.top), g = d(l.bottom) > d(n.bottom), _ = r === "left" && p || r === "right" && m || r === "top" && h || r === "bottom" && g, v = ["top", "bottom"].indexOf(r) !== -1, y = !!t.flipVariations && (v && a === "start" && p || v && a === "end" && m || !v && a === "start" && h || !v && a === "end" && g), b = !!t.flipVariationsByContent && (v && a === "start" && m || v && a === "end" && p || !v && a === "start" && g || !v && a === "end" && h), x = y || b;
		(f || _ || x) && (e.flipped = !0, (f || _) && (r = o[c + 1]), x && (a = ob(a)), e.placement = r + (a ? "-" + a : ""), e.offsets.popper = Cy({}, e.offsets.popper, Iy(e.instance.popper, e.offsets.reference, e.placement)), e = zy(e.instance.modifiers, e, "flip"));
	}), e;
}
function fb(e) {
	var t = e.offsets, n = t.popper, r = t.reference, i = e.placement.split("-")[0], a = Math.floor, o = ["top", "bottom"].indexOf(i) !== -1, s = o ? "right" : "bottom", c = o ? "left" : "top", l = o ? "width" : "height";
	return n[s] < a(r[c]) && (e.offsets.popper[c] = a(r[c]) - n[l]), n[c] > a(r[s]) && (e.offsets.popper[c] = a(r[s])), e;
}
function pb(e, t, n, r) {
	var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), a = +i[1], o = i[2];
	if (!a) return e;
	if (o.indexOf("%") === 0) {
		var s = void 0;
		switch (o) {
			case "%p":
				s = n;
				break;
			default: s = r;
		}
		return wy(s)[t] / 100 * a;
	}
	if (o === "vh" || o === "vw") {
		var c = void 0;
		return c = o === "vh" ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0), c / 100 * a;
	}
	return a;
}
function mb(e, t, n, r) {
	var i = [0, 0], a = ["right", "left"].indexOf(r) !== -1, o = e.split(/(\+|\-)/).map(function(e) {
		return e.trim();
	}), s = o.indexOf(Ly(o, function(e) {
		return e.search(/,|\s/) !== -1;
	}));
	o[s] && o[s].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
	var c = /\s*,\s*|\s+/, l = s === -1 ? [o] : [o.slice(0, s).concat([o[s].split(c)[0]]), [o[s].split(c)[1]].concat(o.slice(s + 1))];
	return l = l.map(function(e, r) {
		var i = (r === 1 ? !a : a) ? "height" : "width", o = !1;
		return e.reduce(function(e, t) {
			return e[e.length - 1] === "" && ["+", "-"].indexOf(t) !== -1 ? (e[e.length - 1] = t, o = !0, e) : o ? (e[e.length - 1] += t, o = !1, e) : e.concat(t);
		}, []).map(function(e) {
			return pb(e, i, t, n);
		});
	}), l.forEach(function(e, t) {
		e.forEach(function(n, r) {
			Xy(n) && (i[t] += n * (e[r - 1] === "-" ? -1 : 1));
		});
	}), i;
}
function hb(e, t) {
	var n = t.offset, r = e.placement, i = e.offsets, a = i.popper, o = i.reference, s = r.split("-")[0], c = void 0;
	return c = Xy(+n) ? [+n, 0] : mb(n, a, o, s), s === "left" ? (a.top += c[0], a.left -= c[1]) : s === "right" ? (a.top += c[0], a.left += c[1]) : s === "top" ? (a.left += c[0], a.top -= c[1]) : s === "bottom" && (a.left += c[0], a.top += c[1]), e.popper = a, e;
}
function gb(e, t) {
	var n = t.boundariesElement || dy(e.instance.popper);
	e.instance.reference === n && (n = dy(n));
	var r = Hy("transform"), i = e.instance.popper.style, a = i.top, o = i.left, s = i[r];
	i.top = "", i.left = "", i[r] = "";
	var c = Ay(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
	i.top = a, i.left = o, i[r] = s, t.boundaries = c;
	var l = t.priority, u = e.offsets.popper, d = {
		primary: function(e) {
			var n = u[e];
			return u[e] < c[e] && !t.escapeWithReference && (n = Math.max(u[e], c[e])), Sy({}, e, n);
		},
		secondary: function(e) {
			var n = e === "right" ? "left" : "top", r = u[n];
			return u[e] > c[e] && !t.escapeWithReference && (r = Math.min(u[n], c[e] - (e === "right" ? u.width : u.height))), Sy({}, n, r);
		}
	};
	return l.forEach(function(e) {
		var t = ["left", "top"].indexOf(e) === -1 ? "secondary" : "primary";
		u = Cy({}, u, d[t](e));
	}), e.offsets.popper = u, e;
}
function _b(e) {
	var t = e.placement, n = t.split("-")[0], r = t.split("-")[1];
	if (r) {
		var i = e.offsets, a = i.reference, o = i.popper, s = ["bottom", "top"].indexOf(n) !== -1, c = s ? "left" : "top", l = s ? "width" : "height", u = {
			start: Sy({}, c, a[c]),
			end: Sy({}, c, a[c] + a[l] - o[l])
		};
		e.offsets.popper = Cy({}, o, u[r]);
	}
	return e;
}
function vb(e) {
	if (!ib(e.instance.modifiers, "hide", "preventOverflow")) return e;
	var t = e.offsets.reference, n = Ly(e.instance.modifiers, function(e) {
		return e.name === "preventOverflow";
	}).boundaries;
	if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
		if (e.hide === !0) return e;
		e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
	} else {
		if (e.hide === !1) return e;
		e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
	}
	return e;
}
function yb(e) {
	var t = e.placement, n = t.split("-")[0], r = e.offsets, i = r.popper, a = r.reference, o = ["left", "right"].indexOf(n) !== -1, s = ["top", "left"].indexOf(n) === -1;
	return i[o ? "left" : "top"] = a[n] - (s ? i[o ? "width" : "height"] : 0), e.placement = Fy(t), e.offsets.popper = wy(i), e;
}
var bb = {
	placement: "bottom",
	positionFixed: !1,
	eventsEnabled: !0,
	removeOnDestroy: !1,
	onCreate: function() {},
	onUpdate: function() {},
	modifiers: {
		shift: {
			order: 100,
			enabled: !0,
			fn: _b
		},
		offset: {
			order: 200,
			enabled: !0,
			fn: hb,
			offset: 0
		},
		preventOverflow: {
			order: 300,
			enabled: !0,
			fn: gb,
			priority: [
				"left",
				"right",
				"top",
				"bottom"
			],
			padding: 5,
			boundariesElement: "scrollParent"
		},
		keepTogether: {
			order: 400,
			enabled: !0,
			fn: fb
		},
		arrow: {
			order: 500,
			enabled: !0,
			fn: ab,
			element: "[x-arrow]"
		},
		flip: {
			order: 600,
			enabled: !0,
			fn: db,
			behavior: "flip",
			padding: 5,
			boundariesElement: "viewport",
			flipVariations: !1,
			flipVariationsByContent: !1
		},
		inner: {
			order: 700,
			enabled: !1,
			fn: yb
		},
		hide: {
			order: 800,
			enabled: !0,
			fn: vb
		},
		computeStyle: {
			order: 850,
			enabled: !0,
			fn: rb,
			gpuAcceleration: !0,
			x: "bottom",
			y: "right"
		},
		applyStyle: {
			order: 900,
			enabled: !0,
			fn: $y,
			onLoad: eb,
			gpuAcceleration: void 0
		}
	}
}, xb = function() {
	function e(t, n) {
		var r = this, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
		by(this, e), this.scheduleUpdate = function() {
			return requestAnimationFrame(r.update);
		}, this.update = ny(this.update.bind(this)), this.options = Cy({}, e.Defaults, i), this.state = {
			isDestroyed: !1,
			isCreated: !1,
			scrollParents: []
		}, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(Cy({}, e.Defaults.modifiers, i.modifiers)).forEach(function(t) {
			r.options.modifiers[t] = Cy({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {});
		}), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
			return Cy({ name: e }, r.options.modifiers[e]);
		}).sort(function(e, t) {
			return e.order - t.order;
		}), this.modifiers.forEach(function(e) {
			e.enabled && ry(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state);
		}), this.update();
		var a = this.options.eventsEnabled;
		a && this.enableEventListeners(), this.state.eventsEnabled = a;
	}
	return xy(e, [
		{
			key: "update",
			value: function() {
				return By.call(this);
			}
		},
		{
			key: "destroy",
			value: function() {
				return Uy.call(this);
			}
		},
		{
			key: "enableEventListeners",
			value: function() {
				return qy.call(this);
			}
		},
		{
			key: "disableEventListeners",
			value: function() {
				return Yy.call(this);
			}
		}
	]), e;
}();
xb.Utils = (typeof window < "u" ? window : global).PopperUtils, xb.placements = sb, xb.Defaults = bb;
//#endregion
//#region node_modules/lodash/_listCacheClear.js
var Sb = /* @__PURE__ */ o(((e, t) => {
	function n() {
		this.__data__ = [], this.size = 0;
	}
	t.exports = n;
})), Cb = /* @__PURE__ */ o(((e, t) => {
	var n = Cg();
	function r(e, t) {
		for (var r = e.length; r--;) if (n(e[r][0], t)) return r;
		return -1;
	}
	t.exports = r;
})), wb = /* @__PURE__ */ o(((e, t) => {
	var n = Cb(), r = Array.prototype.splice;
	function i(e) {
		var t = this.__data__, i = n(t, e);
		return i < 0 ? !1 : (i == t.length - 1 ? t.pop() : r.call(t, i, 1), --this.size, !0);
	}
	t.exports = i;
})), Tb = /* @__PURE__ */ o(((e, t) => {
	var n = Cb();
	function r(e) {
		var t = this.__data__, r = n(t, e);
		return r < 0 ? void 0 : t[r][1];
	}
	t.exports = r;
})), Eb = /* @__PURE__ */ o(((e, t) => {
	var n = Cb();
	function r(e) {
		return n(this.__data__, e) > -1;
	}
	t.exports = r;
})), Db = /* @__PURE__ */ o(((e, t) => {
	var n = Cb();
	function r(e, t) {
		var r = this.__data__, i = n(r, e);
		return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
	}
	t.exports = r;
})), Ob = /* @__PURE__ */ o(((e, t) => {
	var n = Sb(), r = wb(), i = Tb(), a = Eb(), o = Db();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), kb = /* @__PURE__ */ o(((e, t) => {
	var n = Ob();
	function r() {
		this.__data__ = new n(), this.size = 0;
	}
	t.exports = r;
})), Ab = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		var t = this.__data__, n = t.delete(e);
		return this.size = t.size, n;
	}
	t.exports = n;
})), jb = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return this.__data__.get(e);
	}
	t.exports = n;
})), Mb = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), Nb = /* @__PURE__ */ o(((e, t) => {
	t.exports = bg()(cg(), "Map");
})), Pb = /* @__PURE__ */ o(((e, t) => {
	t.exports = bg()(Object, "create");
})), Fb = /* @__PURE__ */ o(((e, t) => {
	var n = Pb();
	function r() {
		this.__data__ = n ? n(null) : {}, this.size = 0;
	}
	t.exports = r;
})), Ib = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		var t = this.has(e) && delete this.__data__[e];
		return this.size -= +!!t, t;
	}
	t.exports = n;
})), Lb = /* @__PURE__ */ o(((e, t) => {
	var n = Pb(), r = "__lodash_hash_undefined__", i = Object.prototype.hasOwnProperty;
	function a(e) {
		var t = this.__data__;
		if (n) {
			var a = t[e];
			return a === r ? void 0 : a;
		}
		return i.call(t, e) ? t[e] : void 0;
	}
	t.exports = a;
})), Rb = /* @__PURE__ */ o(((e, t) => {
	var n = Pb(), r = Object.prototype.hasOwnProperty;
	function i(e) {
		var t = this.__data__;
		return n ? t[e] !== void 0 : r.call(t, e);
	}
	t.exports = i;
})), zb = /* @__PURE__ */ o(((e, t) => {
	var n = Pb(), r = "__lodash_hash_undefined__";
	function i(e, t) {
		var i = this.__data__;
		return this.size += +!this.has(e), i[e] = n && t === void 0 ? r : t, this;
	}
	t.exports = i;
})), Bb = /* @__PURE__ */ o(((e, t) => {
	var n = Fb(), r = Ib(), i = Lb(), a = Rb(), o = zb();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), Vb = /* @__PURE__ */ o(((e, t) => {
	var n = Bb(), r = Ob(), i = Nb();
	function a() {
		this.size = 0, this.__data__ = {
			hash: new n(),
			map: new (i || r)(),
			string: new n()
		};
	}
	t.exports = a;
})), Hb = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		var t = typeof e;
		return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
	}
	t.exports = n;
})), Ub = /* @__PURE__ */ o(((e, t) => {
	var n = Hb();
	function r(e, t) {
		var r = e.__data__;
		return n(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
	}
	t.exports = r;
})), Wb = /* @__PURE__ */ o(((e, t) => {
	var n = Ub();
	function r(e) {
		var t = n(this, e).delete(e);
		return this.size -= +!!t, t;
	}
	t.exports = r;
})), Gb = /* @__PURE__ */ o(((e, t) => {
	var n = Ub();
	function r(e) {
		return n(this, e).get(e);
	}
	t.exports = r;
})), Kb = /* @__PURE__ */ o(((e, t) => {
	var n = Ub();
	function r(e) {
		return n(this, e).has(e);
	}
	t.exports = r;
})), qb = /* @__PURE__ */ o(((e, t) => {
	var n = Ub();
	function r(e, t) {
		var r = n(this, e), i = r.size;
		return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
	}
	t.exports = r;
})), Jb = /* @__PURE__ */ o(((e, t) => {
	var n = Vb(), r = Wb(), i = Gb(), a = Kb(), o = qb();
	function s(e) {
		var t = -1, n = e == null ? 0 : e.length;
		for (this.clear(); ++t < n;) {
			var r = e[t];
			this.set(r[0], r[1]);
		}
	}
	s.prototype.clear = n, s.prototype.delete = r, s.prototype.get = i, s.prototype.has = a, s.prototype.set = o, t.exports = s;
})), Yb = /* @__PURE__ */ o(((e, t) => {
	var n = Ob(), r = Nb(), i = Jb(), a = 200;
	function o(e, t) {
		var o = this.__data__;
		if (o instanceof n) {
			var s = o.__data__;
			if (!r || s.length < a - 1) return s.push([e, t]), this.size = ++o.size, this;
			o = this.__data__ = new i(s);
		}
		return o.set(e, t), this.size = o.size, this;
	}
	t.exports = o;
})), Xb = /* @__PURE__ */ o(((e, t) => {
	var n = Ob(), r = kb(), i = Ab(), a = jb(), o = Mb(), s = Yb();
	function c(e) {
		var t = this.__data__ = new n(e);
		this.size = t.size;
	}
	c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = a, c.prototype.has = o, c.prototype.set = s, t.exports = c;
})), Zb = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return this.__data__.set(e, "__lodash_hash_undefined__"), this;
	}
	t.exports = n;
})), Qb = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return this.__data__.has(e);
	}
	t.exports = n;
})), $b = /* @__PURE__ */ o(((e, t) => {
	var n = Jb(), r = Zb(), i = Qb();
	function a(e) {
		var t = -1, r = e == null ? 0 : e.length;
		for (this.__data__ = new n(); ++t < r;) this.add(e[t]);
	}
	a.prototype.add = a.prototype.push = r, a.prototype.has = i, t.exports = a;
})), ex = /* @__PURE__ */ o(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
		return !1;
	}
	t.exports = n;
})), tx = /* @__PURE__ */ o(((e, t) => {
	function n(e, t) {
		return e.has(t);
	}
	t.exports = n;
})), nx = /* @__PURE__ */ o(((e, t) => {
	var n = $b(), r = ex(), i = tx(), a = 1, o = 2;
	function s(e, t, s, c, l, u) {
		var d = s & a, f = e.length, p = t.length;
		if (f != p && !(d && p > f)) return !1;
		var m = u.get(e), h = u.get(t);
		if (m && h) return m == t && h == e;
		var g = -1, _ = !0, v = s & o ? new n() : void 0;
		for (u.set(e, t), u.set(t, e); ++g < f;) {
			var y = e[g], b = t[g];
			if (c) var x = d ? c(b, y, g, t, e, u) : c(y, b, g, e, t, u);
			if (x !== void 0) {
				if (x) continue;
				_ = !1;
				break;
			}
			if (v) {
				if (!r(t, function(e, t) {
					if (!i(v, t) && (y === e || l(y, e, s, c, u))) return v.push(t);
				})) {
					_ = !1;
					break;
				}
			} else if (!(y === b || l(y, b, s, c, u))) {
				_ = !1;
				break;
			}
		}
		return u.delete(e), u.delete(t), _;
	}
	t.exports = s;
})), rx = /* @__PURE__ */ o(((e, t) => {
	t.exports = cg().Uint8Array;
})), ix = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e, r) {
			n[++t] = [r, e];
		}), n;
	}
	t.exports = n;
})), ax = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		var t = -1, n = Array(e.size);
		return e.forEach(function(e) {
			n[++t] = e;
		}), n;
	}
	t.exports = n;
})), ox = /* @__PURE__ */ o(((e, t) => {
	var n = lg(), r = rx(), i = Cg(), a = nx(), o = ix(), s = ax(), c = 1, l = 2, u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Map]", m = "[object Number]", h = "[object RegExp]", g = "[object Set]", _ = "[object String]", v = "[object Symbol]", y = "[object ArrayBuffer]", b = "[object DataView]", x = n ? n.prototype : void 0, S = x ? x.valueOf : void 0;
	function C(e, t, n, x, C, w, T) {
		switch (n) {
			case b:
				if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
				e = e.buffer, t = t.buffer;
			case y: return !(e.byteLength != t.byteLength || !w(new r(e), new r(t)));
			case u:
			case d:
			case m: return i(+e, +t);
			case f: return e.name == t.name && e.message == t.message;
			case h:
			case _: return e == t + "";
			case p: var E = o;
			case g:
				var D = x & c;
				if (E ||= s, e.size != t.size && !D) return !1;
				var O = T.get(e);
				if (O) return O == t;
				x |= l, T.set(e, t);
				var k = a(E(e), E(t), x, C, w, T);
				return T.delete(e), k;
			case v: if (S) return S.call(e) == S.call(t);
		}
		return !1;
	}
	t.exports = C;
})), sx = /* @__PURE__ */ o(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
		return e;
	}
	t.exports = n;
})), cx = /* @__PURE__ */ o(((e, t) => {
	var n = sx(), r = Ug();
	function i(e, t, i) {
		var a = t(e);
		return r(e) ? a : n(a, i(e));
	}
	t.exports = i;
})), lx = /* @__PURE__ */ o(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
			var o = e[n];
			t(o, n, e) && (a[i++] = o);
		}
		return a;
	}
	t.exports = n;
})), ux = /* @__PURE__ */ o(((e, t) => {
	function n() {
		return [];
	}
	t.exports = n;
})), dx = /* @__PURE__ */ o(((e, t) => {
	var n = lx(), r = ux(), i = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols;
	t.exports = a ? function(e) {
		return e == null ? [] : (e = Object(e), n(a(e), function(t) {
			return i.call(e, t);
		}));
	} : r;
})), fx = /* @__PURE__ */ o(((e, t) => {
	function n(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	t.exports = n;
})), px = /* @__PURE__ */ o(((e, t) => {
	t.exports = fx()(Object.keys, Object);
})), mx = /* @__PURE__ */ o(((e, t) => {
	var n = Zg(), r = px(), i = Object.prototype.hasOwnProperty;
	function a(e) {
		if (!n(e)) return r(e);
		var t = [];
		for (var a in Object(e)) i.call(e, a) && a != "constructor" && t.push(a);
		return t;
	}
	t.exports = a;
})), hx = /* @__PURE__ */ o(((e, t) => {
	var n = Xg(), r = mx(), i = Fg();
	function a(e) {
		return i(e) ? n(e) : r(e);
	}
	t.exports = a;
})), gx = /* @__PURE__ */ o(((e, t) => {
	var n = cx(), r = dx(), i = hx();
	function a(e) {
		return n(e, i, r);
	}
	t.exports = a;
})), _x = /* @__PURE__ */ o(((e, t) => {
	var n = gx(), r = 1, i = Object.prototype.hasOwnProperty;
	function a(e, t, a, o, s, c) {
		var l = a & r, u = n(e), d = u.length;
		if (d != n(t).length && !l) return !1;
		for (var f = d; f--;) {
			var p = u[f];
			if (!(l ? p in t : i.call(t, p))) return !1;
		}
		var m = c.get(e), h = c.get(t);
		if (m && h) return m == t && h == e;
		var g = !0;
		c.set(e, t), c.set(t, e);
		for (var _ = l; ++f < d;) {
			p = u[f];
			var v = e[p], y = t[p];
			if (o) var b = l ? o(y, v, p, t, e, c) : o(v, y, p, e, t, c);
			if (!(b === void 0 ? v === y || s(v, y, a, o, c) : b)) {
				g = !1;
				break;
			}
			_ ||= p == "constructor";
		}
		if (g && !_) {
			var x = e.constructor, S = t.constructor;
			x != S && "constructor" in e && "constructor" in t && !(typeof x == "function" && x instanceof x && typeof S == "function" && S instanceof S) && (g = !1);
		}
		return c.delete(e), c.delete(t), g;
	}
	t.exports = a;
})), vx = /* @__PURE__ */ o(((e, t) => {
	t.exports = bg()(cg(), "DataView");
})), yx = /* @__PURE__ */ o(((e, t) => {
	t.exports = bg()(cg(), "Promise");
})), bx = /* @__PURE__ */ o(((e, t) => {
	t.exports = bg()(cg(), "Set");
})), xx = /* @__PURE__ */ o(((e, t) => {
	t.exports = bg()(cg(), "WeakMap");
})), Sx = /* @__PURE__ */ o(((e, t) => {
	var n = vx(), r = Nb(), i = yx(), a = bx(), o = xx(), s = fg(), c = _g(), l = "[object Map]", u = "[object Object]", d = "[object Promise]", f = "[object Set]", p = "[object WeakMap]", m = "[object DataView]", h = c(n), g = c(r), _ = c(i), v = c(a), y = c(o), b = s;
	(n && b(new n(/* @__PURE__ */ new ArrayBuffer(1))) != m || r && b(new r()) != l || i && b(i.resolve()) != d || a && b(new a()) != f || o && b(new o()) != p) && (b = function(e) {
		var t = s(e), n = t == u ? e.constructor : void 0, r = n ? c(n) : "";
		if (r) switch (r) {
			case h: return m;
			case g: return l;
			case _: return d;
			case v: return f;
			case y: return p;
		}
		return t;
	}), t.exports = b;
})), Cx = /* @__PURE__ */ o(((e, t) => {
	var n = Xb(), r = nx(), i = ox(), a = _x(), o = Sx(), s = Ug(), c = Gg(), l = Yg(), u = 1, d = "[object Arguments]", f = "[object Array]", p = "[object Object]", m = Object.prototype.hasOwnProperty;
	function h(e, t, h, g, _, v) {
		var y = s(e), b = s(t), x = y ? f : o(e), S = b ? f : o(t);
		x = x == d ? p : x, S = S == d ? p : S;
		var C = x == p, w = S == p, T = x == S;
		if (T && c(e)) {
			if (!c(t)) return !1;
			y = !0, C = !1;
		}
		if (T && !C) return v ||= new n(), y || l(e) ? r(e, t, h, g, _, v) : i(e, t, x, h, g, _, v);
		if (!(h & u)) {
			var E = C && m.call(e, "__wrapped__"), D = w && m.call(t, "__wrapped__");
			if (E || D) {
				var O = E ? e.value() : e, k = D ? t.value() : t;
				return v ||= new n(), _(O, k, h, g, v);
			}
		}
		return T ? (v ||= new n(), a(e, t, h, g, _, v)) : !1;
	}
	t.exports = h;
})), wx = /* @__PURE__ */ o(((e, t) => {
	var n = Cx(), r = Bg();
	function i(e, t, a, o, s) {
		return e === t ? !0 : e == null || t == null || !r(e) && !r(t) ? e !== e && t !== t : n(e, t, a, o, i, s);
	}
	t.exports = i;
})), Tx = /* @__PURE__ */ o(((e, t) => {
	var n = Xb(), r = wx(), i = 1, a = 2;
	function o(e, t, o, s) {
		var c = o.length, l = c, u = !s;
		if (e == null) return !l;
		for (e = Object(e); c--;) {
			var d = o[c];
			if (u && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1;
		}
		for (; ++c < l;) {
			d = o[c];
			var f = d[0], p = e[f], m = d[1];
			if (u && d[2]) {
				if (p === void 0 && !(f in e)) return !1;
			} else {
				var h = new n();
				if (s) var g = s(p, m, f, e, t, h);
				if (!(g === void 0 ? r(m, p, i | a, s, h) : g)) return !1;
			}
		}
		return !0;
	}
	t.exports = o;
})), Ex = /* @__PURE__ */ o(((e, t) => {
	var n = pg();
	function r(e) {
		return e === e && !n(e);
	}
	t.exports = r;
})), Dx = /* @__PURE__ */ o(((e, t) => {
	var n = Ex(), r = hx();
	function i(e) {
		for (var t = r(e), i = t.length; i--;) {
			var a = t[i], o = e[a];
			t[i] = [
				a,
				o,
				n(o)
			];
		}
		return t;
	}
	t.exports = i;
})), Ox = /* @__PURE__ */ o(((e, t) => {
	function n(e, t) {
		return function(n) {
			return n != null && n[e] === t && (t !== void 0 || e in Object(n));
		};
	}
	t.exports = n;
})), kx = /* @__PURE__ */ o(((e, t) => {
	var n = Tx(), r = Dx(), i = Ox();
	function a(e) {
		var t = r(e);
		return t.length == 1 && t[0][2] ? i(t[0][0], t[0][1]) : function(r) {
			return r === e || n(r, e, t);
		};
	}
	t.exports = a;
})), Ax = /* @__PURE__ */ o(((e, t) => {
	var n = fg(), r = Bg(), i = "[object Symbol]";
	function a(e) {
		return typeof e == "symbol" || r(e) && n(e) == i;
	}
	t.exports = a;
})), jx = /* @__PURE__ */ o(((e, t) => {
	var n = Ug(), r = Ax(), i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
	function o(e, t) {
		if (n(e)) return !1;
		var o = typeof e;
		return o == "number" || o == "symbol" || o == "boolean" || e == null || r(e) ? !0 : a.test(e) || !i.test(e) || t != null && e in Object(t);
	}
	t.exports = o;
})), Mx = /* @__PURE__ */ o(((e, t) => {
	var n = Jb(), r = "Expected a function";
	function i(e, t) {
		if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(r);
		var a = function() {
			var n = arguments, r = t ? t.apply(this, n) : n[0], i = a.cache;
			if (i.has(r)) return i.get(r);
			var o = e.apply(this, n);
			return a.cache = i.set(r, o) || i, o;
		};
		return a.cache = new (i.Cache || n)(), a;
	}
	i.Cache = n, t.exports = i;
})), Nx = /* @__PURE__ */ o(((e, t) => {
	var n = Mx(), r = 500;
	function i(e) {
		var t = n(e, function(e) {
			return i.size === r && i.clear(), e;
		}), i = t.cache;
		return t;
	}
	t.exports = i;
})), Px = /* @__PURE__ */ o(((e, t) => {
	var n = Nx(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, i = /\\(\\)?/g;
	t.exports = n(function(e) {
		var t = [];
		return e.charCodeAt(0) === 46 && t.push(""), e.replace(r, function(e, n, r, a) {
			t.push(r ? a.replace(i, "$1") : n || e);
		}), t;
	});
})), Fx = /* @__PURE__ */ o(((e, t) => {
	function n(e, t) {
		for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
		return i;
	}
	t.exports = n;
})), Ix = /* @__PURE__ */ o(((e, t) => {
	var n = lg(), r = Fx(), i = Ug(), a = Ax(), o = 1 / 0, s = n ? n.prototype : void 0, c = s ? s.toString : void 0;
	function l(e) {
		if (typeof e == "string") return e;
		if (i(e)) return r(e, l) + "";
		if (a(e)) return c ? c.call(e) : "";
		var t = e + "";
		return t == "0" && 1 / e == -o ? "-0" : t;
	}
	t.exports = l;
})), Lx = /* @__PURE__ */ o(((e, t) => {
	var n = Ix();
	function r(e) {
		return e == null ? "" : n(e);
	}
	t.exports = r;
})), Rx = /* @__PURE__ */ o(((e, t) => {
	var n = Ug(), r = jx(), i = Px(), a = Lx();
	function o(e, t) {
		return n(e) ? e : r(e, t) ? [e] : i(a(e));
	}
	t.exports = o;
})), zx = /* @__PURE__ */ o(((e, t) => {
	var n = Ax(), r = 1 / 0;
	function i(e) {
		if (typeof e == "string" || n(e)) return e;
		var t = e + "";
		return t == "0" && 1 / e == -r ? "-0" : t;
	}
	t.exports = i;
})), Bx = /* @__PURE__ */ o(((e, t) => {
	var n = Rx(), r = zx();
	function i(e, t) {
		t = n(t, e);
		for (var i = 0, a = t.length; e != null && i < a;) e = e[r(t[i++])];
		return i && i == a ? e : void 0;
	}
	t.exports = i;
})), Vx = /* @__PURE__ */ o(((e, t) => {
	var n = Bx();
	function r(e, t, r) {
		var i = e == null ? void 0 : n(e, t);
		return i === void 0 ? r : i;
	}
	t.exports = r;
})), Hx = /* @__PURE__ */ o(((e, t) => {
	function n(e, t) {
		return e != null && t in Object(e);
	}
	t.exports = n;
})), Ux = /* @__PURE__ */ o(((e, t) => {
	var n = Rx(), r = Hg(), i = Ug(), a = Ig(), o = Pg(), s = zx();
	function c(e, t, c) {
		t = n(t, e);
		for (var l = -1, u = t.length, d = !1; ++l < u;) {
			var f = s(t[l]);
			if (!(d = e != null && c(e, f))) break;
			e = e[f];
		}
		return d || ++l != u ? d : (u = e == null ? 0 : e.length, !!u && o(u) && a(f, u) && (i(e) || r(e)));
	}
	t.exports = c;
})), Wx = /* @__PURE__ */ o(((e, t) => {
	var n = Hx(), r = Ux();
	function i(e, t) {
		return e != null && r(e, t, n);
	}
	t.exports = i;
})), Gx = /* @__PURE__ */ o(((e, t) => {
	var n = wx(), r = Vx(), i = Wx(), a = jx(), o = Ex(), s = Ox(), c = zx(), l = 1, u = 2;
	function d(e, t) {
		return a(e) && o(t) ? s(c(e), t) : function(a) {
			var o = r(a, e);
			return o === void 0 && o === t ? i(a, e) : n(t, o, l | u);
		};
	}
	t.exports = d;
})), Kx = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return function(t) {
			return t?.[e];
		};
	}
	t.exports = n;
})), qx = /* @__PURE__ */ o(((e, t) => {
	var n = Bx();
	function r(e) {
		return function(t) {
			return n(t, e);
		};
	}
	t.exports = r;
})), Jx = /* @__PURE__ */ o(((e, t) => {
	var n = Kx(), r = qx(), i = jx(), a = zx();
	function o(e) {
		return i(e) ? n(a(e)) : r(e);
	}
	t.exports = o;
})), Yx = /* @__PURE__ */ o(((e, t) => {
	var n = kx(), r = Gx(), i = Eg(), a = Ug(), o = Jx();
	function s(e) {
		return typeof e == "function" ? e : e == null ? i : typeof e == "object" ? a(e) ? r(e[0], e[1]) : n(e) : o(e);
	}
	t.exports = s;
})), Xx = /* @__PURE__ */ o(((e, t) => {
	var n = Yx(), r = Fg(), i = hx();
	function a(e) {
		return function(t, a, o) {
			var s = Object(t);
			if (!r(t)) {
				var c = n(a, 3);
				t = i(t), a = function(e) {
					return c(s[e], e, s);
				};
			}
			var l = e(t, a, o);
			return l > -1 ? s[c ? t[l] : l] : void 0;
		};
	}
	t.exports = a;
})), Zx = /* @__PURE__ */ o(((e, t) => {
	function n(e, t, n, r) {
		for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
		return -1;
	}
	t.exports = n;
})), Qx = /* @__PURE__ */ o(((e, t) => {
	var n = /\s/;
	function r(e) {
		for (var t = e.length; t-- && n.test(e.charAt(t)););
		return t;
	}
	t.exports = r;
})), $x = /* @__PURE__ */ o(((e, t) => {
	var n = Qx(), r = /^\s+/;
	function i(e) {
		return e && e.slice(0, n(e) + 1).replace(r, "");
	}
	t.exports = i;
})), eS = /* @__PURE__ */ o(((e, t) => {
	var n = $x(), r = pg(), i = Ax(), a = NaN, o = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, c = /^0o[0-7]+$/i, l = parseInt;
	function u(e) {
		if (typeof e == "number") return e;
		if (i(e)) return a;
		if (r(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = r(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = n(e);
		var u = s.test(e);
		return u || c.test(e) ? l(e.slice(2), u ? 2 : 8) : o.test(e) ? a : +e;
	}
	t.exports = u;
})), tS = /* @__PURE__ */ o(((e, t) => {
	var n = eS(), r = 1 / 0, i = 17976931348623157e292;
	function a(e) {
		return e ? (e = n(e), e === r || e === -r ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	t.exports = a;
})), nS = /* @__PURE__ */ o(((e, t) => {
	var n = tS();
	function r(e) {
		var t = n(e), r = t % 1;
		return t === t ? r ? t - r : t : 0;
	}
	t.exports = r;
})), rS = /* @__PURE__ */ o(((e, t) => {
	var n = Zx(), r = Yx(), i = nS(), a = Math.max;
	function o(e, t, o) {
		var s = e == null ? 0 : e.length;
		if (!s) return -1;
		var c = o == null ? 0 : i(o);
		return c < 0 && (c = a(s + c, 0)), n(e, r(t, 3), c);
	}
	t.exports = o;
})), iS = /* @__PURE__ */ o(((e, t) => {
	t.exports = Xx()(rS());
})), aS = /* @__PURE__ */ o(((e, t) => {
	function n(e, t, n) {
		var r;
		return n(e, function(e, n, i) {
			if (t(e, n, i)) return r = n, !1;
		}), r;
	}
	t.exports = n;
})), oS = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return function(t, n, r) {
			for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
				var c = o[e ? s : ++i];
				if (n(a[c], c, a) === !1) break;
			}
			return t;
		};
	}
	t.exports = n;
})), sS = /* @__PURE__ */ o(((e, t) => {
	t.exports = oS()();
})), cS = /* @__PURE__ */ o(((e, t) => {
	var n = sS(), r = hx();
	function i(e, t) {
		return e && n(e, t, r);
	}
	t.exports = i;
})), lS = /* @__PURE__ */ o(((e, t) => {
	var n = aS(), r = cS(), i = Yx();
	function a(e, t) {
		return n(e, i(t, 3), r);
	}
	t.exports = a;
})), uS = /* @__PURE__ */ o(((e, t) => {
	var n = cg();
	t.exports = function() {
		return n.Date.now();
	};
})), dS = /* @__PURE__ */ o(((e, t) => {
	var n = pg(), r = uS(), i = eS(), a = "Expected a function", o = Math.max, s = Math.min;
	function c(e, t, c) {
		var l, u, d, f, p, m, h = 0, g = !1, _ = !1, v = !0;
		if (typeof e != "function") throw TypeError(a);
		t = i(t) || 0, n(c) && (g = !!c.leading, _ = "maxWait" in c, d = _ ? o(i(c.maxWait) || 0, t) : d, v = "trailing" in c ? !!c.trailing : v);
		function y(t) {
			var n = l, r = u;
			return l = u = void 0, h = t, f = e.apply(r, n), f;
		}
		function b(e) {
			return h = e, p = setTimeout(C, t), g ? y(e) : f;
		}
		function x(e) {
			var n = e - m, r = e - h, i = t - n;
			return _ ? s(i, d - r) : i;
		}
		function S(e) {
			var n = e - m, r = e - h;
			return m === void 0 || n >= t || n < 0 || _ && r >= d;
		}
		function C() {
			var e = r();
			if (S(e)) return w(e);
			p = setTimeout(C, x(e));
		}
		function w(e) {
			return p = void 0, v && l ? y(e) : (l = u = void 0, f);
		}
		function T() {
			p !== void 0 && clearTimeout(p), h = 0, l = m = u = p = void 0;
		}
		function E() {
			return p === void 0 ? f : w(r());
		}
		function D() {
			var e = r(), n = S(e);
			if (l = arguments, u = this, m = e, n) {
				if (p === void 0) return b(m);
				if (_) return clearTimeout(p), p = setTimeout(C, t), y(m);
			}
			return p === void 0 && (p = setTimeout(C, t)), f;
		}
		return D.cancel = T, D.flush = E, D;
	}
	t.exports = c;
})), fS = {
	emits: ["do"],
	data() {
		return { listener: null };
	},
	mounted() {
		this.listener = (e) => {
			e.target === this.$el || this.$el.contains(e.target) || this.$emit("do");
		}, document.addEventListener("click", this.listener);
	},
	beforeUnmount() {
		document.removeEventListener("click", this.listener);
	},
	render() {
		let e = this.$slots.default?.() || [];
		return e.length === 1 ? e[0] : e;
	}
}, pS = /* @__PURE__ */ l(iS()), mS = /* @__PURE__ */ l(lS()), hS = /* @__PURE__ */ l(Vx()), gS = /* @__PURE__ */ l(dS()), _S = {
	components: {
		ValidationErrors: f_,
		OnClickOutside: fS
	},
	mixins: [i_, p_],
	emits: [
		"changed",
		"remoteError",
		"remoteSuccess",
		"update:modelValue"
	],
	props: {
		modelValue: {
			type: [String, Number],
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			default: null
		},
		label: {
			type: String,
			default: null
		},
		options: {
			type: Array,
			default: () => []
		},
		disabledOptions: {
			type: Array,
			default: () => []
		},
		optionsUrl: {
			type: String,
			default: null
		},
		responseDataPath: {
			type: String,
			default: null
		},
		lazyLoad: {
			type: Boolean,
			default: !1
		},
		optionKey: {
			type: String,
			required: !0
		},
		optionValue: {
			type: String,
			required: !0
		},
		searchKeys: {
			type: Array,
			required: !0,
			default: () => []
		},
		searchRemote: {
			type: Boolean,
			default: !1
		},
		allowEmpty: {
			type: Boolean,
			default: !0
		},
		placeholder: {
			type: String,
			required: !1,
			default: "&nbsp;"
		},
		autocomplete: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: ""
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		selectFirst: {
			type: Boolean,
			required: !1,
			default: !1
		},
		debounceTime: {
			type: Number,
			required: !1,
			default: 800
		}
	},
	data() {
		return {
			isOpen: !1,
			query: null,
			highlightedIndex: 0,
			remoteOptions: [],
			isLoading: !1
		};
	},
	computed: {
		optionsList() {
			return this.remoteOptions.length ? this.remoteOptions : this.options;
		},
		filteredOptionsList() {
			return this.query ? this.searchRemote ? this.remoteOptions : new Zv(this.optionsList, {
				threshold: .2,
				keys: this.searchKeys
			}).search(this.query).map((e) => e.item) : this.optionsList;
		},
		selectedOptionValue() {
			let e = this, t = (0, pS.default)(this.optionsList, function(t) {
				return t[e.optionKey] == e.modelValue;
			});
			return t ? t[this.optionValue] : "";
		},
		selectedOptionIndex() {
			let e = this;
			return (0, mS.default)(this.optionsList, function(t) {
				return t[e.optionKey] == e.modelValue;
			});
		}
	},
	watch: {
		filteredOptionsList() {
			this.popper !== void 0 && this.popper.scheduleUpdate();
		},
		optionsUrl() {
			this.getRemoteOptions(!0);
		},
		disabledOptions() {
			this.getRemoteOptions(!0);
		}
	},
	mounted() {
		this.optionsUrl && (!this.lazyLoad || this.modelValue) && this.getRemoteOptions();
	},
	beforeUnmount() {
		this.popper !== void 0 && this.popper.destroy();
	},
	methods: {
		select(e) {
			this.optionIsDisabled(e) || (this.$emit("update:modelValue", String(e[this.optionKey])), this.$emit("changed"), this.formDirty(this.name), this.close());
		},
		reset() {
			this.query = "";
		},
		selectHighlighted() {
			this.filteredOptionsList.length && this.select(this.filteredOptionsList[this.highlightedIndex]);
		},
		setupPopper() {
			this.popper === void 0 ? this.popper = new xb(this.$refs.selectinput, this.$refs.selectdropdown, { placement: "bottom" }) : this.popper.scheduleUpdate();
		},
		open() {
			this.isOpen || (this.lazyLoad && this.getRemoteOptions(), this.isOpen = !0, this.$nextTick(() => {
				this.setupPopper(), this.$refs.search.focus(), this.highlightedIndex = this.selectedOptionIndex ? Number(this.selectedOptionIndex) : 0, this.scrollToIndex(this.highlightedIndex);
			}));
		},
		close() {
			this.isOpen && (this.isOpen = !1, this.$nextTick(() => {
				this.$refs.selectinput.focus(), this.reset();
			}));
		},
		toggle() {
			this.disabled || this.readonly || (this.isOpen ? this.close() : this.open());
		},
		scrollToIndex(e) {
			let t = this.$refs.options?.children?.[e];
			t && t.scrollIntoView({
				block: "nearest",
				inline: "nearest"
			});
		},
		highlightNext() {
			this.highlightedIndex = this.highlightedIndex == this.filteredOptionsList.length - 1 ? this.filteredOptionsList.length - 1 : this.highlightedIndex + 1, this.scrollToIndex(this.highlightedIndex);
		},
		highlightPrevious() {
			this.highlightedIndex = this.highlightedIndex == 0 ? 0 : this.highlightedIndex - 1, this.scrollToIndex(this.highlightedIndex);
		},
		getRemoteOptions: (0, gS.default)(function(e) {
			if (!this.searchRemote && this.optionsList.length && !e || !this.optionsUrl) return;
			let t = "";
			this.query && (t = "?" + this.searchKeys[0] + "=" + this.query);
			let n = this;
			this.isLoading = !0, og({
				method: "get",
				url: this.optionsUrl + t,
				responseType: "json"
			}).then(function(e) {
				n.remoteOptions = n.responseDataPath ? (0, hS.default)(e.data, n.responseDataPath) : e.data, n.selectFirst && !n.selectedOptionValue && !n.lazyLoad && n.select(n.remoteOptions[0]), n.$emit("remoteSuccess", e);
			}).catch(function(e) {
				n.$emit("remoteError", e);
			}).then(function() {
				n.isLoading = !1, n.popper && n.popper.scheduleUpdate();
			});
		}, 800, {
			leading: !0,
			trailing: !0
		}),
		optionIsDisabled(e) {
			if (this.disabledOptions === null) return !1;
			if (this.disabledOptions.length && typeof this.disabledOptions[0] == "object") {
				let t = JSON.parse(JSON.stringify(this.disabledOptions));
				return (0, pS.default)(t, JSON.parse(JSON.stringify(e))) !== void 0;
			}
			return this.disabledOptions.includes(e[this.optionKey]);
		}
	}
}, vS = ["innerHTML"], yS = { class: "fvl-search-select-input-wrapper" }, bS = ["disabled", "innerHTML"], xS = {
	ref: "selectdropdown",
	class: "fvl-search-select-dropdown"
}, SS = {
	key: 0,
	ref: "options",
	class: "fvl-search-select-dropdown-options"
}, CS = ["onClick"], wS = {
	key: 1,
	class: "search-select-empty"
}, TS = ["textContent"], ES = {
	key: 2,
	class: "search-select-empty"
}, DS = ["textContent"];
function OS(e, t, n, r, i, a) {
	let o = B("validation-errors"), s = B("on-click-outside");
	return H(), Ho(s, { onDo: t[11] ||= (e) => a.close() }, {
		default: z(() => [W("div", { class: F([{
			"fvl-has-error": e.formHasErrors(n.name),
			"fvl-dropdown-is-open": i.isOpen
		}, "fvl-search-select-wrapper"]) }, [
			n.label ? (H(), U("label", {
				key: 0,
				class: F([n.labelClass, "fvl-select-label"]),
				onClick: t[0] ||= (e) => a.toggle()
			}, [W("span", { innerHTML: n.label }, null, 8, vS), V(e.$slots, "label_suffix")], 2)) : q("", !0),
			W("div", yS, [
				W("button", {
					ref: "selectinput",
					class: F([[{ "fvl-search-select-placeholder": !a.selectedOptionValue }, n.fieldClass], "fvl-search-select"]),
					disabled: n.disabled,
					type: "button",
					onClick: t[1] ||= Cl((e) => a.toggle(), ["prevent"]),
					onKeydown: [t[2] ||= Tl((e) => a.toggle(), ["space"]), t[3] ||= Tl((e) => a.close(), ["esc"])],
					innerHTML: a.selectedOptionValue ? a.selectedOptionValue : n.placeholder
				}, null, 42, bS),
				t[12] ||= W("div", { class: "fvl-search-select-carret" }, [W("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, [W("path", { d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" })])], -1),
				G(Xs, { name: "fvl-dropdown-transition" }, {
					default: z(() => [zr(W("div", xS, [
						zr(W("input", {
							ref: "search",
							"onUpdate:modelValue": t[4] ||= (e) => i.query = e,
							class: "fvl-search-select-dropdown-input",
							autocapitalize: "off",
							spellcheck: "false",
							onKeydown: [
								t[5] ||= Tl((e) => a.close(), ["esc"]),
								t[6] ||= Tl((e) => a.highlightNext(), ["down"]),
								t[7] ||= Tl((e) => a.highlightPrevious(), ["up"]),
								t[8] ||= Tl(Cl((e) => a.selectHighlighted(), ["prevent"]), ["enter"]),
								t[9] ||= Tl(Cl(() => {}, ["prevent"]), ["tab"])
							],
							onInput: t[10] ||= (e) => {
								i.highlightedIndex = 0, a.getRemoteOptions();
							}
						}, null, 544), [[ul, i.query]]),
						i.isLoading ? q("", !0) : (H(), U("ul", SS, [(H(!0), U(Mo, null, Wi(a.filteredOptionsList, (t, r) => (H(), U("li", {
							key: t[n.optionKey],
							class: F([{
								"fvl-search-select-dropdown-option-highlighted": r === i.highlightedIndex,
								"fvl-search-dropdown-option-disabled": a.optionIsDisabled(t)
							}, "fvl-search-select-dropdown-option"]),
							onClick: (e) => a.select(t)
						}, [V(e.$slots, "option", {
							option: t,
							disabled: a.optionIsDisabled(t)
						}, () => [K(I(t[n.optionValue]), 1)])], 10, CS))), 128))], 512)),
						!a.filteredOptionsList.length && !i.isLoading ? (H(), U("div", wS, [V(e.$slots, "no-results", {}, () => [W("span", { textContent: I(e.getConfig("noResultsText", "No results found!")) }, null, 8, TS)])])) : q("", !0),
						i.isLoading ? (H(), U("div", ES, [V(e.$slots, "loading", {}, () => [W("span", { textContent: I(e.getConfig("pleaseWaitText", "Please wait...")) }, null, 8, DS)])])) : q("", !0)
					], 512), [[mc, i.isOpen]])]),
					_: 3
				})
			]),
			V(e.$slots, "hint"),
			V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(o, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
		], 2)]),
		_: 3
	});
}
var kS = /*#__PURE__*/ Y(_S, [["render", OS]]), AS = /* @__PURE__ */ o(((e, t) => {
	var n = Fg();
	function r(e, t) {
		return function(r, i) {
			if (r == null) return r;
			if (!n(r)) return e(r, i);
			for (var a = r.length, o = t ? a : -1, s = Object(r); (t ? o-- : ++o < a) && i(s[o], o, s) !== !1;);
			return r;
		};
	}
	t.exports = r;
})), jS = /* @__PURE__ */ o(((e, t) => {
	var n = cS();
	t.exports = AS()(n);
})), MS = /* @__PURE__ */ o(((e, t) => {
	var n = jS();
	function r(e, t) {
		var r = [];
		return n(e, function(e, n, i) {
			t(e, n, i) && r.push(e);
		}), r;
	}
	t.exports = r;
})), NS = /* @__PURE__ */ o(((e, t) => {
	var n = lx(), r = MS(), i = Yx(), a = Ug();
	function o(e, t) {
		return (a(e) ? n : r)(e, i(t, 3));
	}
	t.exports = o;
}));
//#endregion
//#region src/components/utilities/parseEmailAddresses.js
function PS(e) {
	if (!e || typeof e != "string") return [];
	let t = e.match(/[\w.!#$%&'*+/=?^`{|}~-]+@[\w-]+(?:\.[\w-]+)+/g) || [], n = /* @__PURE__ */ new Set();
	return t.filter((e) => {
		let t = e.toLowerCase();
		return !n.has(t) && (n.add(t), !0);
	});
}
//#endregion
//#region src/components/FvlTagSelect.vue
var FS = /* @__PURE__ */ l(NS()), IS = {
	components: {
		ValidationErrors: f_,
		OnClickOutside: fS
	},
	mixins: [i_, p_],
	emits: [
		"changed",
		"remoteError",
		"remoteSuccess",
		"update:modelValue"
	],
	props: {
		modelValue: {
			type: Array,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			default: null
		},
		label: {
			type: String,
			default: null
		},
		options: {
			type: Array,
			default: () => []
		},
		disabledOptions: {
			type: Array,
			default: () => []
		},
		optionsUrl: {
			type: String,
			default: null
		},
		responseDataPath: {
			type: String,
			default: null
		},
		lazyLoad: {
			type: Boolean,
			default: !1
		},
		optionKey: {
			type: String,
			required: !0
		},
		optionValue: {
			type: String,
			required: !0
		},
		searchKeys: {
			type: Array,
			required: !0,
			default: () => []
		},
		searchRemote: {
			type: Boolean,
			default: !1
		},
		allowEmpty: {
			type: Boolean,
			default: !0
		},
		allowNew: {
			type: Boolean,
			default: !1
		},
		max: {
			type: Number,
			default: null
		},
		min: {
			type: Number,
			default: null
		},
		type: {
			type: String,
			default: "text"
		},
		placeholder: {
			type: String,
			required: !1,
			default: "&nbsp;"
		},
		openOnClick: {
			type: Boolean,
			required: !1,
			default: !1
		},
		autocomplete: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: ""
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		debounceTime: {
			type: Number,
			required: !1,
			default: 800
		}
	},
	data() {
		return {
			isOpen: !1,
			query: null,
			highlightedIndex: 0,
			remoteOptions: [],
			isLoading: !1
		};
	},
	computed: {
		optionsList() {
			return this.remoteOptions.length ? this.remoteOptions : this.options;
		},
		filteredOptionsList() {
			let e = this, t = this.searchRemote ? this.remoteOptions : this.optionsList;
			return this.modelValue && (t = (0, FS.default)(t, function(t) {
				return e.modelValue.indexOf(t[e.optionKey]) === -1;
			})), !this.query || this.searchRemote ? t : new Zv(t, {
				threshold: .2,
				keys: this.searchKeys
			}).search(this.query).map((e) => e.item);
		},
		selectedOptionValues() {
			let e = this, t = [];
			return this.modelValue && this.modelValue.forEach(function(n) {
				let r = (0, pS.default)(e.optionsList, function(t) {
					return t[e.optionKey] == n;
				});
				r && t.push(r[e.optionValue]), !r && e.allowNew && t.push(n);
			}), t;
		},
		selectedOptionIndex() {
			let e = this;
			return (0, mS.default)(this.optionsList, function(t) {
				return t[e.optionKey] == e.modelValue;
			});
		}
	},
	watch: {
		optionsUrl() {
			this.getRemoteOptions(!0);
		},
		disabledOptions() {
			this.getRemoteOptions(!0);
		},
		filteredOptionsList() {
			this.popper !== void 0 && this.popper.scheduleUpdate();
		}
	},
	mounted() {
		this.optionsUrl && (!this.lazyLoad || this.modelValue) && this.getRemoteOptions();
	},
	beforeUnmount() {
		this.popper !== void 0 && this.popper.destroy();
	},
	methods: {
		getErrors(e) {
			let t = [];
			return (!this.modelValue || !this.modelValue.length) && this.formGetErrors(e).length && t.push(...this.formGetErrors(e)), this.modelValue?.forEach((n, r) => {
				this.formGetErrors(e + "." + r).length && t.push(...this.formGetErrors(e + "." + r));
			}), t;
		},
		hasErrors(e) {
			let t = [];
			return (!this.modelValue || !this.modelValue.length) && this.formGetErrors(e).length ? !0 : (this.modelValue?.forEach((n, r) => {
				this.formGetErrors(e + "." + r).length && t.push(...this.formGetErrors(e + "." + r));
			}), t.length);
		},
		select(e) {
			if (this.optionIsDisabled(e)) return;
			let t = this, n = this.modelValue === null ? [] : [...this.modelValue];
			this.max !== null && n.length >= this.max || (e = typeof e == "object" ? e[t.optionKey] : e, !((0, pS.default)(n, function(t) {
				return t == e;
			}) || !e && !this.filteredOptionsList.length) && (n.push(e), this.$emit("update:modelValue", n), this.$emit("changed"), this.formDirty(this.name), this.allowNew && (this.focusInlineInput(), this.close()), this.max !== null && this.selectedOptionValues.length == this.max && this.close(), this.reset()));
		},
		unselect(e) {
			let t = this.modelValue === null ? [] : [...this.modelValue];
			t.splice(this.selectedOptionValues.findIndex((t) => t == e || t == e[this.optionKey]), 1), this.$emit("update:modelValue", t), this.$emit("changed"), this.formDirty(this.name), this.$nextTick(() => {
				this.allowNew && this.focusInlineInput();
			});
		},
		removeTag(e) {
			let t = this.modelValue === null ? [] : [...this.modelValue];
			if (t && !this.query) {
				let n = t[t.length - 1];
				this.unselect(n), this.allowNew && (e.preventDefault(), this.query = n), this.close();
			}
			this.query && this.query.length == 1 && this.close();
		},
		reset() {
			this.query = "";
		},
		selectHighlighted() {
			if (!(!this.allowNew && !this.filteredOptionsList.length)) {
				if ((this.highlightedIndex === null || this.highlightedIndex < 0 || this.highlightedIndex > this.filteredOptionsList.length - 1) && this.allowNew && this.query !== null && this.query.trimLeft() != "") {
					this.select(this.query);
					return;
				}
				this.select(this.filteredOptionsList[this.highlightedIndex]), this.highlightedIndex = -1;
			}
		},
		setupPopper() {
			this.popper === void 0 ? this.popper = new xb(this.$refs.selectinput, this.$refs.selectdropdown, { placement: "bottom" }) : this.popper.scheduleUpdate();
		},
		open() {
			this.isOpen || (this.lazyLoad && this.getRemoteOptions(), !(this.max !== null && this.modelValue !== null && this.modelValue.length >= this.max) && (this.isOpen = !0, this.$nextTick(() => {
				this.setupPopper(), this.allowNew ? this.focusInlineInput() : this.focusSearch(), this.highlightedIndex = this.selectedOptionIndex ? Number(this.selectedOptionIndex) : null, this.scrollToIndex(this.highlightedIndex);
			})));
		},
		close(e) {
			e = e !== void 0 && e, this.isOpen && (this.isOpen = !1, this.$nextTick(() => {
				this.allowNew || this.focusSelectInput(), e && this.reset();
			}));
		},
		focusInlineInput() {
			this.$refs.inlineinput !== void 0 && this.$refs.inlineinput.focus();
		},
		focusSelectInput() {
			this.$refs.selectinput !== void 0 && this.$refs.selectinput.focus();
		},
		focusSearch() {
			this.$refs.search !== void 0 && this.$refs.search.focus();
		},
		preventNative(e) {
			let t = this.modelValue === null ? [] : this.modelValue;
			this.max !== null && t.length < this.max && e.keyCode == 9 && e.preventDefault();
		},
		openOnKeyDown(e) {
			[
				9,
				13,
				27,
				16,
				91,
				18,
				17,
				20,
				8,
				38,
				40,
				37,
				39
			].includes(e.keyCode) || this.open();
		},
		toggle() {
			this.disabled || this.readonly || (this.isOpen ? this.close() : this.open());
		},
		scrollToIndex(e) {
			let t = this.$refs.options?.children?.[e];
			t && t.scrollIntoView({
				block: "nearest",
				inline: "nearest"
			});
		},
		highlightNext() {
			this.highlightedIndex = this.highlightedIndex >= this.filteredOptionsList.length - 1 ? this.filteredOptionsList.length - 1 : this.highlightedIndex + 1, this.scrollToIndex(this.highlightedIndex);
		},
		highlightPrevious() {
			this.highlightedIndex = this.highlightedIndex <= 0 ? 0 : this.highlightedIndex - 1, this.scrollToIndex(this.highlightedIndex);
		},
		checkValidity(e) {
			if (e.clipboardData) {
				let t = e.clipboardData.getData("text");
				if (this.type === "email" && this.allowNew) return this.addPastedEmails(t, e);
				this.query = t, e.target.value = this.query;
			}
			return this.highlightedIndex !== null && this.highlightedIndex !== -1 || e.target.checkValidity() ? (this.selectHighlighted(), !0) : (e.target.reportValidity(), !1);
		},
		addPastedEmails(e, t) {
			let n = t.target, r = PS(e), i = this.modelValue === null ? [] : [...this.modelValue], a = !1;
			for (let e of r) {
				if (this.max !== null && i.length >= this.max) break;
				n.value = e, n.checkValidity() && (i.some((t) => String(t).toLowerCase() === e.toLowerCase()) || (i.push(e), a = !0));
			}
			return a ? (this.$emit("update:modelValue", i), this.$emit("changed"), this.formDirty(this.name), this.reset(), !0) : (n.value = e, n.reportValidity(), !1);
		},
		getRemoteOptions: (0, gS.default)(function(e) {
			if (!this.searchRemote && this.optionsList.length && !e || !this.optionsUrl) return;
			let t = "";
			this.query && (t = "?" + this.searchKeys[0] + "=" + this.query);
			let n = this;
			this.isLoading = !0, og({
				method: "get",
				url: this.optionsUrl + t,
				responseType: "json"
			}).then(function(e) {
				n.remoteOptions = n.responseDataPath ? (0, hS.default)(e.data, n.responseDataPath) : e.data, n.$emit("remoteSuccess", e);
			}).catch(function(e) {
				n.$emit("remoteError", e);
			}).then(function() {
				n.isLoading = !1, n.popper && n.popper.scheduleUpdate();
			});
		}, 800, {
			leading: !0,
			trailing: !0
		}),
		optionIsDisabled(e) {
			if (this.disabledOptions === null) return !1;
			if (this.disabledOptions.length && typeof this.disabledOptions[0] == "object") {
				let t = JSON.parse(JSON.stringify(this.disabledOptions));
				return (0, pS.default)(t, JSON.parse(JSON.stringify(e))) !== void 0;
			}
			return this.disabledOptions.includes(e[this.optionKey]);
		}
	}
}, LS = ["innerHTML"], RS = ["disabled"], zS = ["textContent"], BS = ["onClick"], VS = [
	"placeholder",
	"autocomplete",
	"type"
], HS = {
	key: 0,
	class: "fvl-search-select-carret"
}, US = {
	ref: "selectdropdown",
	class: "fvl-search-select-dropdown"
}, WS = {
	key: 1,
	ref: "options",
	class: "fvl-search-select-dropdown-options"
}, GS = ["onClick"], KS = {
	key: 2,
	class: "search-select-empty"
}, qS = ["textContent"], JS = {
	key: 3,
	class: "search-select-empty"
}, YS = ["textContent"];
function XS(e, t, n, r, i, a) {
	let o = B("validation-errors"), s = B("on-click-outside");
	return H(), Ho(s, { onDo: t[22] ||= (e) => a.close() }, {
		default: z(() => [W("div", { class: F([{
			"fvl-has-error": a.hasErrors(n.name),
			"fvl-dropdown-is-open": i.isOpen
		}, "fvl-tag-select-wrapper"]) }, [
			n.label ? (H(), U("label", {
				key: 0,
				class: F([n.labelClass, "fvl-select-label"]),
				onClick: t[0] ||= (e) => a.toggle()
			}, [W("span", { innerHTML: n.label }, null, 8, LS), V(e.$slots, "label_suffix")], 2)) : q("", !0),
			W("div", { class: F([{ "fvl-tag-select-input-inline": n.allowNew }, "fvl-tag-select-input-wrapper"]) }, [
				W("button", {
					ref: "selectinput",
					class: F([[{ "fvl-tag-select-placeholder": !a.selectedOptionValues.length }, n.fieldClass], "fvl-tag-select"]),
					disabled: n.disabled,
					type: "button",
					tabindex: "-1",
					onClick: t[13] ||= Cl((e) => (n.allowNew ? a.focusInlineInput() : a.toggle(), n.allowNew && n.openOnClick ? a.open() : ""), ["prevent"]),
					onKeydown: t[14] ||= Tl((e) => a.toggle(), ["space"])
				}, [
					zr(W("span", { textContent: I(n.placeholder) }, null, 8, zS), [[mc, !a.selectedOptionValues.length && n.placeholder && !n.allowNew]]),
					(H(!0), U(Mo, null, Wi(a.selectedOptionValues, (e, r) => (H(), U("span", {
						key: e + r,
						class: F(["fvl-tag-select-item", a.getErrors(n.name) && a.getErrors(n.name)[r] ? "fvl-tag-select-item-has-error" : ""]),
						onClick: t[1] ||= Cl((e) => n.max == 1 ? a.removeTag(e) : "", ["prevent", "stop"])
					}, [K(I(e) + " ", 1), (H(), U("svg", {
						class: "fvl-tag-select-item-remove",
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						fill: "none",
						"stroke-width": "2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						onClick: Cl((t) => a.unselect(e), ["prevent", "stop"])
					}, [...t[23] ||= [W("line", {
						x1: "18",
						y1: "6",
						x2: "6",
						y2: "18"
					}, null, -1), W("line", {
						x1: "6",
						y1: "6",
						x2: "18",
						y2: "18"
					}, null, -1)]], 8, BS))], 2))), 128)),
					n.allowNew && !(n.max !== null && n.modelValue !== null && n.modelValue.length >= n.max) ? zr((H(), U("input", {
						key: 0,
						ref: "inlineinput",
						"onUpdate:modelValue": t[2] ||= (e) => i.query = e,
						autocapitalize: "off",
						spellcheck: "false",
						style: ge({
							width: String(i.query).length * 18 + "px",
							maxWidth: "100%",
							minWidth: a.selectedOptionValues.length ? "80px" : String(n.placeholder).length * 18 + "px"
						}),
						class: F([{ "p-1": a.selectedOptionValues.length }, "fvl-tag-inline-input"]),
						placeholder: a.selectedOptionValues.length ? "" : n.placeholder,
						autocomplete: "new-" + n.name,
						type: n.type,
						onKeydown: [
							t[3] ||= Tl((e) => a.close(), ["esc"]),
							t[4] ||= (e) => a.openOnKeyDown(e),
							t[5] ||= Tl((e) => a.highlightNext(), ["down"]),
							t[6] ||= Tl((e) => a.highlightPrevious(), ["up"]),
							t[7] ||= Tl(Cl((e) => a.checkValidity(e), ["prevent"]), ["enter"]),
							t[10] ||= Tl((e) => (a.checkValidity(e), a.close()), ["tab"]),
							t[12] ||= Tl((e) => a.removeTag(e), ["backspace"])
						],
						onBlur: t[8] ||= (e) => i.query && !a.filteredOptionsList.length ? a.checkValidity(e) : "",
						onPaste: t[9] ||= Cl((e) => a.checkValidity(e), ["prevent"]),
						onInput: t[11] ||= (e) => {
							i.highlightedIndex = -1, a.getRemoteOptions();
						}
					}, null, 46, VS)), [[vl, i.query]]) : q("", !0)
				], 42, RS),
				!n.allowNew || n.allowNew && n.openOnClick ? (H(), U("div", HS, [...t[24] ||= [W("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, [W("path", { d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" })], -1)]])) : q("", !0),
				G(Xs, { name: "fvl-dropdown-transition" }, {
					default: z(() => [zr(W("div", US, [
						n.allowNew ? q("", !0) : zr((H(), U("input", {
							key: 0,
							ref: "search",
							"onUpdate:modelValue": t[15] ||= (e) => i.query = e,
							type: "text",
							class: "fvl-search-select-dropdown-input",
							onKeydown: [
								t[16] ||= Tl((e) => a.close(), ["esc"]),
								t[17] ||= Tl((e) => a.highlightNext(), ["down"]),
								t[18] ||= Tl((e) => a.highlightPrevious(), ["up"]),
								t[19] ||= Tl(Cl((e) => a.selectHighlighted(), ["prevent"]), ["enter"]),
								t[20] ||= Tl(Cl(() => {}, ["prevent"]), ["tab"])
							],
							onInput: t[21] ||= (e) => {
								i.highlightedIndex = 0, a.getRemoteOptions();
							}
						}, null, 544)), [[ul, i.query]]),
						i.isLoading ? q("", !0) : (H(), U("ul", WS, [(H(!0), U(Mo, null, Wi(a.filteredOptionsList, (t, r) => (H(), U("li", {
							key: t[n.optionKey] + "-" + r,
							class: F([{
								"fvl-search-select-dropdown-option-highlighted": r === i.highlightedIndex,
								"fvl-search-dropdown-option-disabled": a.optionIsDisabled(t)
							}, "fvl-search-select-dropdown-option"]),
							onClick: (e) => a.select(t)
						}, [V(e.$slots, "option", {
							option: t,
							disabled: a.optionIsDisabled(t)
						}, () => [K(I(t[n.optionValue]), 1)])], 10, GS))), 128))], 512)),
						!a.filteredOptionsList.length && !i.isLoading ? (H(), U("div", KS, [V(e.$slots, "no-results", {}, () => [n.allowNew ? q("", !0) : (H(), U("span", {
							key: 0,
							textContent: I(e.getConfig("noResultsText", "No results found!"))
						}, null, 8, qS))])])) : q("", !0),
						i.isLoading ? (H(), U("div", JS, [V(e.$slots, "loading", {}, () => [W("span", { textContent: I(e.getConfig("pleaseWaitText", "Please wait...")) }, null, 8, YS)])])) : q("", !0)
					], 512), [[mc, i.isOpen && !n.allowNew || i.isOpen && n.allowNew && a.filteredOptionsList.length]])]),
					_: 3
				})
			], 2),
			V(e.$slots, "hint"),
			V(e.$slots, "errors", { errors: a.getErrors(n.name) }, () => [G(o, { errors: a.getErrors(n.name) }, null, 8, ["errors"])])
		], 2)]),
		_: 3
	});
}
var ZS = /*#__PURE__*/ Y(IS, [["render", XS]]), QS = {
	components: { ValidationErrors: f_ },
	mixins: [p_],
	emits: ["changed", "update:modelValue"],
	props: {
		modelValue: {
			type: [String, Number],
			default: ""
		},
		name: {
			type: String,
			required: !0
		},
		label: {
			type: String,
			default: null
		},
		options: {
			type: Object,
			required: !0,
			default: () => {}
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	methods: { handleChange(e) {
		this.$emit("update:modelValue", e.target.value), this.$emit("changed"), this.formDirty(this.name);
	} }
}, $S = { class: "fvl-radio-group-label" }, eC = ["innerHTML"], tC = { class: "fvl-radio-group-wrapper" }, nC = [
	"id",
	"name",
	"value",
	"checked",
	"required",
	"readonly",
	"disabled"
], rC = ["for"], iC = { class: "fvl-radio-toggle-text" };
function aC(e, t, n, r, i, a) {
	let o = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-radio-wrapper"]) }, [
		W("span", $S, [W("span", { innerHTML: n.label }, null, 8, eC), V(e.$slots, "label_suffix")]),
		W("div", tC, [(H(!0), U(Mo, null, Wi(n.options, (e, r) => (H(), U("div", {
			key: r,
			class: "fvl-radio-group"
		}, [W("input", {
			id: n.name + r,
			name: n.name,
			value: r,
			checked: n.modelValue == r,
			class: F([n.fieldClass, "fvl-radio"]),
			required: n.required,
			readonly: n.readonly,
			disabled: n.disabled,
			type: "radio",
			onChange: t[0] ||= (...e) => a.handleChange && a.handleChange(...e)
		}, null, 42, nC), W("label", {
			class: F([n.labelClass, "fvl-radio-label"]),
			for: n.name + r
		}, [t[1] ||= W("span", { class: "fvl-radio-toggle" }, null, -1), W("span", iC, I(e), 1)], 10, rC)]))), 128))]),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(o, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var oC = /*#__PURE__*/ Y(QS, [["render", aC]]), sC = {
	components: { ValidationErrors: f_ },
	mixins: [p_],
	emits: ["changed", "update:modelValue"],
	props: {
		label: {
			type: String,
			required: !1,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			required: !1,
			default: null
		},
		modelValue: {
			type: Boolean,
			default: !1
		},
		value: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	methods: { handleChange(e) {
		this.$emit("update:modelValue", e.target.checked), this.$emit("changed"), this.formDirty(this.name);
	} }
}, cC = [
	"id",
	"name",
	"required",
	"readonly",
	"disabled",
	"checked",
	"value"
], lC = ["for"], uC = ["innerHTML"];
function dC(e, t, n, r, i, a) {
	let o = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-checkbox-wrapper"]) }, [
		W("input", {
			id: n.id ? n.id : n.name,
			name: n.name,
			class: F([[{ checked: n.modelValue }, n.fieldClass], "fvl-checkbox"]),
			required: n.required,
			readonly: n.readonly,
			disabled: n.disabled,
			checked: n.modelValue,
			value: n.value,
			type: "checkbox",
			onChange: t[0] ||= (...e) => a.handleChange && a.handleChange(...e)
		}, null, 42, cC),
		n.label ? (H(), U("label", {
			key: 0,
			class: F([n.labelClass, "fvl-checkbox-label"]),
			for: n.id ? n.id : n.name
		}, [
			t[1] ||= W("span", { class: "fvl-checkbox-outer" }, null, -1),
			V(e.$slots, "label_prefix"),
			W("span", { innerHTML: n.label }, null, 8, uC),
			V(e.$slots, "label_suffix")
		], 10, lC)) : q("", !0),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(o, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var fC = /*#__PURE__*/ Y(sC, [["render", dC]]), pC = {
	components: { ValidationErrors: f_ },
	mixins: [p_],
	emits: ["changed", "update:modelValue"],
	props: {
		label: {
			type: String,
			required: !1,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			required: !1,
			default: null
		},
		modelValue: {
			default: !1,
			validator: function(e) {
				return [
					0,
					1,
					!1,
					!0,
					"0",
					"1"
				].indexOf(e) !== -1;
			}
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	methods: { handleChange(e) {
		this.$emit("update:modelValue", e.target.checked), this.$emit("changed"), this.formDirty(this.name);
	} }
}, mC = [
	"id",
	"name",
	"required",
	"readonly",
	"disabled",
	"checked"
], hC = ["for"], gC = ["innerHTML"];
function _C(e, t, n, r, i, a) {
	let o = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-switch-wrapper"]) }, [
		W("input", {
			id: n.id ? n.id : n.name,
			name: n.name,
			class: F([[{ checked: !!n.modelValue }, n.fieldClass], "fvl-switch hidden"]),
			required: n.required,
			readonly: n.readonly,
			disabled: n.disabled,
			checked: !!n.modelValue,
			type: "checkbox",
			onChange: t[0] ||= (...e) => a.handleChange && a.handleChange(...e)
		}, null, 42, mC),
		n.label ? (H(), U("label", {
			key: 0,
			class: F([n.labelClass, "fvl-switch-label"]),
			for: n.id ? n.id : n.name
		}, [
			t[1] ||= W("span", { class: "fvl-switch-toggle" }, null, -1),
			W("div", {
				class: "fvl-switch-text",
				innerHTML: n.label
			}, null, 8, gC),
			V(e.$slots, "label_suffix")
		], 10, hC)) : q("", !0),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(o, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var vC = /*#__PURE__*/ Y(pC, [["render", _C]]), yC = {
	components: { ValidationErrors: f_ },
	mixins: [p_],
	emits: ["changed", "update:modelValue"],
	props: {
		options: {
			type: Array,
			required: !0,
			default: () => ["Off", "On"]
		},
		label: {
			type: String,
			required: !1,
			default: ""
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			required: !1,
			default: null
		},
		modelValue: {
			default: !1,
			validator: function(e) {
				return [
					0,
					1,
					!1,
					!0,
					"0",
					"1"
				].indexOf(e) !== -1;
			}
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	methods: { handleChange(e) {
		this.$emit("update:modelValue", e.target.checked), this.$emit("changed"), this.formDirty(this.name);
	} }
}, bC = [
	"id",
	"name",
	"required",
	"readonly",
	"disabled",
	"checked"
], xC = {
	key: 0,
	class: "fvl-text-switch-label"
}, SC = ["innerHTML"], CC = { class: "inline-block relative normal-case cursor-pointer" }, wC = ["innerHTML"], TC = ["innerHTML"];
function EC(e, t, n, r, i, a) {
	let o = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-text-switch-wrapper"]) }, [
		W("input", {
			id: n.id ? n.id : n.name,
			ref: "checkbox",
			name: n.name,
			class: F([[{ checked: !!n.modelValue }, n.fieldClass], "fvl-text-switch hidden"]),
			required: n.required,
			readonly: n.readonly,
			disabled: n.disabled,
			checked: !!n.modelValue,
			type: "checkbox",
			onChange: t[0] ||= (...e) => a.handleChange && a.handleChange(...e)
		}, null, 42, bC),
		n.label ? (H(), U("label", xC, [W("span", { innerHTML: n.label }, null, 8, SC), V(e.$slots, "label_suffix")])) : q("", !0),
		W("span", CC, [W("button", {
			type: "button",
			class: "fvl-text-switch-options-wrapper",
			onClick: t[1] ||= (t) => e.$refs.checkbox.click()
		}, [W("div", {
			class: F(["fvl-text-switch-option-1", n.modelValue ? "" : "active"]),
			innerHTML: n.options[0]
		}, null, 10, wC), W("div", {
			class: F(["fvl-text-switch-option-2", { "active text-white": n.modelValue }]),
			innerHTML: n.options[1]
		}, null, 10, TC)]), W("div", { class: F(["fvl-text-switch-bg", { "fvl-text-switch-bg-selected": n.modelValue }]) }, null, 2)]),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(o, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var DC = /*#__PURE__*/ Y(yC, [["render", EC]]), OC = {
	components: { ValidationErrors: f_ },
	mixins: [p_],
	emits: ["changed", "update:modelValue"],
	props: {
		label: {
			type: String,
			required: !1,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			default: null
		},
		valuePosition: {
			type: String,
			default: "left",
			validator: function(e) {
				return [
					"left",
					"right",
					"top",
					"bottom"
				].indexOf(e) !== -1;
			}
		},
		modelValue: {
			validator: (e) => typeof e == "string" || typeof e == "number" || e === null,
			default: "0"
		},
		min: {
			type: Number,
			required: !1,
			default: null
		},
		max: {
			type: Number,
			required: !1,
			default: null
		},
		placeholder: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	methods: { handleChange() {
		this.formDirty(this.name), this.$emit("changed");
	} }
}, kC = ["for"], AC = ["innerHTML"], jC = { class: "fvl-slider-group" }, MC = {
	key: 0,
	class: "fvl-slider-value fvl-slider-value-left"
}, NC = { class: "fvl-slider-container" }, PC = [
	"id",
	"value",
	"name",
	"min",
	"max",
	"required",
	"readonly",
	"disabled"
], FC = {
	key: 0,
	class: "fvl-slider-value fvl-slider-value-right"
};
function IC(e, t, n, r, i, a) {
	let o = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-slider-wrapper"]) }, [
		n.label ? (H(), U("label", {
			key: 0,
			class: F([n.labelClass, "fvl-slider-label"]),
			for: n.name
		}, [W("span", { innerHTML: n.label }, null, 8, AC), V(e.$slots, "label_suffix")], 10, kC)) : q("", !0),
		W("div", jC, [
			V(e.$slots, "prefix", { value: n.modelValue }, () => [n.valuePosition == "left" ? (H(), U("span", MC, I(n.modelValue), 1)) : q("", !0)]),
			W("div", NC, [W("input", {
				id: n.id,
				value: n.modelValue,
				name: n.name,
				class: F([n.fieldClass, "fvl-slider"]),
				min: n.min,
				max: n.max,
				required: n.required,
				readonly: n.readonly,
				disabled: n.disabled,
				type: "range",
				onChange: t[0] ||= (...e) => a.handleChange && a.handleChange(...e),
				onInput: t[1] ||= (t) => e.$emit("update:modelValue", t.target.value)
			}, null, 42, PC)]),
			V(e.$slots, "suffix", { value: n.modelValue }, () => [n.valuePosition == "right" ? (H(), U("span", FC, I(n.modelValue), 1)) : q("", !0)])
		]),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(o, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var LC = /*#__PURE__*/ Y(OC, [["render", IC]]);
//#endregion
//#region node_modules/vue-color/dist/vue-color.js
function RC(e) {
	"@babel/helpers - typeof";
	return RC = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, RC(e);
}
var zC = /^\s+/, BC = /\s+$/;
function $(e, t) {
	if (e ||= "", t ||= {}, e instanceof $) return e;
	if (!(this instanceof $)) return new $(e, t);
	var n = VC(e);
	this._originalInput = e, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = Math.round(100 * this._a) / 100, this._format = t.format || n.format, this._gradientType = t.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = n.ok;
}
$.prototype = {
	isDark: function() {
		return this.getBrightness() < 128;
	},
	isLight: function() {
		return !this.isDark();
	},
	isValid: function() {
		return this._ok;
	},
	getOriginalInput: function() {
		return this._originalInput;
	},
	getFormat: function() {
		return this._format;
	},
	getAlpha: function() {
		return this._a;
	},
	getBrightness: function() {
		var e = this.toRgb();
		return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
	},
	getLuminance: function() {
		var e = this.toRgb(), t, n, r, i, a, o;
		return t = e.r / 255, n = e.g / 255, r = e.b / 255, i = t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4, a = n <= .03928 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4, o = r <= .03928 ? r / 12.92 : ((r + .055) / 1.055) ** 2.4, .2126 * i + .7152 * a + .0722 * o;
	},
	setAlpha: function(e) {
		return this._a = dw(e), this._roundA = Math.round(100 * this._a) / 100, this;
	},
	toHsv: function() {
		var e = GC(this._r, this._g, this._b);
		return {
			h: e.h * 360,
			s: e.s,
			v: e.v,
			a: this._a
		};
	},
	toHsvString: function() {
		var e = GC(this._r, this._g, this._b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.v * 100);
		return this._a == 1 ? "hsv(" + t + ", " + n + "%, " + r + "%)" : "hsva(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")";
	},
	toHsl: function() {
		var e = UC(this._r, this._g, this._b);
		return {
			h: e.h * 360,
			s: e.s,
			l: e.l,
			a: this._a
		};
	},
	toHslString: function() {
		var e = UC(this._r, this._g, this._b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.l * 100);
		return this._a == 1 ? "hsl(" + t + ", " + n + "%, " + r + "%)" : "hsla(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")";
	},
	toHex: function(e) {
		return qC(this._r, this._g, this._b, e);
	},
	toHexString: function(e) {
		return "#" + this.toHex(e);
	},
	toHex8: function(e) {
		return JC(this._r, this._g, this._b, this._a, e);
	},
	toHex8String: function(e) {
		return "#" + this.toHex8(e);
	},
	toRgb: function() {
		return {
			r: Math.round(this._r),
			g: Math.round(this._g),
			b: Math.round(this._b),
			a: this._a
		};
	},
	toRgbString: function() {
		return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
	},
	toPercentageRgb: function() {
		return {
			r: Math.round(fw(this._r, 255) * 100) + "%",
			g: Math.round(fw(this._g, 255) * 100) + "%",
			b: Math.round(fw(this._b, 255) * 100) + "%",
			a: this._a
		};
	},
	toPercentageRgbString: function() {
		return this._a == 1 ? "rgb(" + Math.round(fw(this._r, 255) * 100) + "%, " + Math.round(fw(this._g, 255) * 100) + "%, " + Math.round(fw(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(fw(this._r, 255) * 100) + "%, " + Math.round(fw(this._g, 255) * 100) + "%, " + Math.round(fw(this._b, 255) * 100) + "%, " + this._roundA + ")";
	},
	toName: function() {
		return this._a === 0 ? "transparent" : this._a < 1 ? !1 : lw[qC(this._r, this._g, this._b, !0)] || !1;
	},
	toFilter: function(e) {
		var t = "#" + YC(this._r, this._g, this._b, this._a), n = t, r = this._gradientType ? "GradientType = 1, " : "";
		if (e) {
			var i = $(e);
			n = "#" + YC(i._r, i._g, i._b, i._a);
		}
		return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + t + ",endColorstr=" + n + ")";
	},
	toString: function(e) {
		var t = !!e;
		e ||= this._format;
		var n = !1, r = this._a < 1 && this._a >= 0;
		return !t && r && (e === "hex" || e === "hex6" || e === "hex3" || e === "hex4" || e === "hex8" || e === "name") ? e === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (n = this.toRgbString()), e === "prgb" && (n = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (n = this.toHexString()), e === "hex3" && (n = this.toHexString(!0)), e === "hex4" && (n = this.toHex8String(!0)), e === "hex8" && (n = this.toHex8String()), e === "name" && (n = this.toName()), e === "hsl" && (n = this.toHslString()), e === "hsv" && (n = this.toHsvString()), n || this.toHexString());
	},
	clone: function() {
		return $(this.toString());
	},
	_applyModification: function(e, t) {
		var n = e.apply(null, [this].concat([].slice.call(t)));
		return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this;
	},
	lighten: function() {
		return this._applyModification($C, arguments);
	},
	brighten: function() {
		return this._applyModification(ew, arguments);
	},
	darken: function() {
		return this._applyModification(tw, arguments);
	},
	desaturate: function() {
		return this._applyModification(XC, arguments);
	},
	saturate: function() {
		return this._applyModification(ZC, arguments);
	},
	greyscale: function() {
		return this._applyModification(QC, arguments);
	},
	spin: function() {
		return this._applyModification(nw, arguments);
	},
	_applyCombination: function(e, t) {
		return e.apply(null, [this].concat([].slice.call(t)));
	},
	analogous: function() {
		return this._applyCombination(ow, arguments);
	},
	complement: function() {
		return this._applyCombination(rw, arguments);
	},
	monochromatic: function() {
		return this._applyCombination(sw, arguments);
	},
	splitcomplement: function() {
		return this._applyCombination(aw, arguments);
	},
	triad: function() {
		return this._applyCombination(iw, [3]);
	},
	tetrad: function() {
		return this._applyCombination(iw, [4]);
	}
}, $.fromRatio = function(e, t) {
	if (RC(e) == "object") {
		var n = {};
		for (var r in e) e.hasOwnProperty(r) && (n[r] = r === "a" ? e[r] : vw(e[r]));
		e = n;
	}
	return $(e, t);
};
function VC(e) {
	var t = {
		r: 0,
		g: 0,
		b: 0
	}, n = 1, r = null, i = null, a = null, o = !1, s = !1;
	return typeof e == "string" && (e = Cw(e)), RC(e) == "object" && (Sw(e.r) && Sw(e.g) && Sw(e.b) ? (t = HC(e.r, e.g, e.b), o = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Sw(e.h) && Sw(e.s) && Sw(e.v) ? (r = vw(e.s), i = vw(e.v), t = KC(e.h, r, i), o = !0, s = "hsv") : Sw(e.h) && Sw(e.s) && Sw(e.l) && (r = vw(e.s), a = vw(e.l), t = WC(e.h, r, a), o = !0, s = "hsl"), e.hasOwnProperty("a") && (n = e.a)), n = dw(n), {
		ok: o,
		format: e.format || s,
		r: Math.min(255, Math.max(t.r, 0)),
		g: Math.min(255, Math.max(t.g, 0)),
		b: Math.min(255, Math.max(t.b, 0)),
		a: n
	};
}
function HC(e, t, n) {
	return {
		r: fw(e, 255) * 255,
		g: fw(t, 255) * 255,
		b: fw(n, 255) * 255
	};
}
function UC(e, t, n) {
	e = fw(e, 255), t = fw(t, 255), n = fw(n, 255);
	var r = Math.max(e, t, n), i = Math.min(e, t, n), a, o, s = (r + i) / 2;
	if (r == i) a = o = 0;
	else {
		var c = r - i;
		switch (o = s > .5 ? c / (2 - r - i) : c / (r + i), r) {
			case e:
				a = (t - n) / c + (t < n ? 6 : 0);
				break;
			case t:
				a = (n - e) / c + 2;
				break;
			case n: a = (e - t) / c + 4;
		}
		a /= 6;
	}
	return {
		h: a,
		s: o,
		l: s
	};
}
function WC(e, t, n) {
	var r, i, a;
	e = fw(e, 360), t = fw(t, 100), n = fw(n, 100);
	function o(e, t, n) {
		return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
	}
	if (t === 0) r = i = a = n;
	else {
		var s = n < .5 ? n * (1 + t) : n + t - n * t, c = 2 * n - s;
		r = o(c, s, e + 1 / 3), i = o(c, s, e), a = o(c, s, e - 1 / 3);
	}
	return {
		r: r * 255,
		g: i * 255,
		b: a * 255
	};
}
function GC(e, t, n) {
	e = fw(e, 255), t = fw(t, 255), n = fw(n, 255);
	var r = Math.max(e, t, n), i = Math.min(e, t, n), a, o, s = r, c = r - i;
	if (o = r === 0 ? 0 : c / r, r == i) a = 0;
	else {
		switch (r) {
			case e:
				a = (t - n) / c + (t < n ? 6 : 0);
				break;
			case t:
				a = (n - e) / c + 2;
				break;
			case n: a = (e - t) / c + 4;
		}
		a /= 6;
	}
	return {
		h: a,
		s: o,
		v: s
	};
}
function KC(e, t, n) {
	e = fw(e, 360) * 6, t = fw(t, 100), n = fw(n, 100);
	var r = Math.floor(e), i = e - r, a = n * (1 - t), o = n * (1 - i * t), s = n * (1 - (1 - i) * t), c = r % 6, l = [
		n,
		o,
		a,
		a,
		s,
		n
	][c], u = [
		s,
		n,
		n,
		o,
		a,
		a
	][c], d = [
		a,
		a,
		s,
		n,
		n,
		o
	][c];
	return {
		r: l * 255,
		g: u * 255,
		b: d * 255
	};
}
function qC(e, t, n, r) {
	var i = [
		_w(Math.round(e).toString(16)),
		_w(Math.round(t).toString(16)),
		_w(Math.round(n).toString(16))
	];
	return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function JC(e, t, n, r, i) {
	var a = [
		_w(Math.round(e).toString(16)),
		_w(Math.round(t).toString(16)),
		_w(Math.round(n).toString(16)),
		_w(yw(r))
	];
	return i && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function YC(e, t, n, r) {
	return [
		_w(yw(r)),
		_w(Math.round(e).toString(16)),
		_w(Math.round(t).toString(16)),
		_w(Math.round(n).toString(16))
	].join("");
}
$.equals = function(e, t) {
	return !e || !t ? !1 : $(e).toRgbString() == $(t).toRgbString();
}, $.random = function() {
	return $.fromRatio({
		r: Math.random(),
		g: Math.random(),
		b: Math.random()
	});
};
function XC(e, t) {
	t = t === 0 ? 0 : t || 10;
	var n = $(e).toHsl();
	return n.s -= t / 100, n.s = pw(n.s), $(n);
}
function ZC(e, t) {
	t = t === 0 ? 0 : t || 10;
	var n = $(e).toHsl();
	return n.s += t / 100, n.s = pw(n.s), $(n);
}
function QC(e) {
	return $(e).desaturate(100);
}
function $C(e, t) {
	t = t === 0 ? 0 : t || 10;
	var n = $(e).toHsl();
	return n.l += t / 100, n.l = pw(n.l), $(n);
}
function ew(e, t) {
	t = t === 0 ? 0 : t || 10;
	var n = $(e).toRgb();
	return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), $(n);
}
function tw(e, t) {
	t = t === 0 ? 0 : t || 10;
	var n = $(e).toHsl();
	return n.l -= t / 100, n.l = pw(n.l), $(n);
}
function nw(e, t) {
	var n = $(e).toHsl(), r = (n.h + t) % 360;
	return n.h = r < 0 ? 360 + r : r, $(n);
}
function rw(e) {
	var t = $(e).toHsl();
	return t.h = (t.h + 180) % 360, $(t);
}
function iw(e, t) {
	if (isNaN(t) || t <= 0) throw Error("Argument to polyad must be a positive number");
	for (var n = $(e).toHsl(), r = [$(e)], i = 360 / t, a = 1; a < t; a++) r.push($({
		h: (n.h + a * i) % 360,
		s: n.s,
		l: n.l
	}));
	return r;
}
function aw(e) {
	var t = $(e).toHsl(), n = t.h;
	return [
		$(e),
		$({
			h: (n + 72) % 360,
			s: t.s,
			l: t.l
		}),
		$({
			h: (n + 216) % 360,
			s: t.s,
			l: t.l
		})
	];
}
function ow(e, t, n) {
	t ||= 6, n ||= 30;
	var r = $(e).toHsl(), i = 360 / n, a = [$(e)];
	for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t;) r.h = (r.h + i) % 360, a.push($(r));
	return a;
}
function sw(e, t) {
	t ||= 6;
	for (var n = $(e).toHsv(), r = n.h, i = n.s, a = n.v, o = [], s = 1 / t; t--;) o.push($({
		h: r,
		s: i,
		v: a
	})), a = (a + s) % 1;
	return o;
}
$.mix = function(e, t, n) {
	n = n === 0 ? 0 : n || 50;
	var r = $(e).toRgb(), i = $(t).toRgb(), a = n / 100;
	return $({
		r: (i.r - r.r) * a + r.r,
		g: (i.g - r.g) * a + r.g,
		b: (i.b - r.b) * a + r.b,
		a: (i.a - r.a) * a + r.a
	});
}, $.readability = function(e, t) {
	var n = $(e), r = $(t);
	return (Math.max(n.getLuminance(), r.getLuminance()) + .05) / (Math.min(n.getLuminance(), r.getLuminance()) + .05);
}, $.isReadable = function(e, t, n) {
	var r = $.readability(e, t), i, a;
	switch (a = !1, i = ww(n), i.level + i.size) {
		case "AAsmall":
		case "AAAlarge":
			a = r >= 4.5;
			break;
		case "AAlarge":
			a = r >= 3;
			break;
		case "AAAsmall": a = r >= 7;
	}
	return a;
}, $.mostReadable = function(e, t, n) {
	var r = null, i = 0, a, o, s, c;
	n ||= {}, o = n.includeFallbackColors, s = n.level, c = n.size;
	for (var l = 0; l < t.length; l++) a = $.readability(e, t[l]), a > i && (i = a, r = $(t[l]));
	return $.isReadable(e, r, {
		level: s,
		size: c
	}) || !o ? r : (n.includeFallbackColors = !1, $.mostReadable(e, ["#fff", "#000"], n));
};
var cw = $.names = {
	aliceblue: "f0f8ff",
	antiquewhite: "faebd7",
	aqua: "0ff",
	aquamarine: "7fffd4",
	azure: "f0ffff",
	beige: "f5f5dc",
	bisque: "ffe4c4",
	black: "000",
	blanchedalmond: "ffebcd",
	blue: "00f",
	blueviolet: "8a2be2",
	brown: "a52a2a",
	burlywood: "deb887",
	burntsienna: "ea7e5d",
	cadetblue: "5f9ea0",
	chartreuse: "7fff00",
	chocolate: "d2691e",
	coral: "ff7f50",
	cornflowerblue: "6495ed",
	cornsilk: "fff8dc",
	crimson: "dc143c",
	cyan: "0ff",
	darkblue: "00008b",
	darkcyan: "008b8b",
	darkgoldenrod: "b8860b",
	darkgray: "a9a9a9",
	darkgreen: "006400",
	darkgrey: "a9a9a9",
	darkkhaki: "bdb76b",
	darkmagenta: "8b008b",
	darkolivegreen: "556b2f",
	darkorange: "ff8c00",
	darkorchid: "9932cc",
	darkred: "8b0000",
	darksalmon: "e9967a",
	darkseagreen: "8fbc8f",
	darkslateblue: "483d8b",
	darkslategray: "2f4f4f",
	darkslategrey: "2f4f4f",
	darkturquoise: "00ced1",
	darkviolet: "9400d3",
	deeppink: "ff1493",
	deepskyblue: "00bfff",
	dimgray: "696969",
	dimgrey: "696969",
	dodgerblue: "1e90ff",
	firebrick: "b22222",
	floralwhite: "fffaf0",
	forestgreen: "228b22",
	fuchsia: "f0f",
	gainsboro: "dcdcdc",
	ghostwhite: "f8f8ff",
	gold: "ffd700",
	goldenrod: "daa520",
	gray: "808080",
	green: "008000",
	greenyellow: "adff2f",
	grey: "808080",
	honeydew: "f0fff0",
	hotpink: "ff69b4",
	indianred: "cd5c5c",
	indigo: "4b0082",
	ivory: "fffff0",
	khaki: "f0e68c",
	lavender: "e6e6fa",
	lavenderblush: "fff0f5",
	lawngreen: "7cfc00",
	lemonchiffon: "fffacd",
	lightblue: "add8e6",
	lightcoral: "f08080",
	lightcyan: "e0ffff",
	lightgoldenrodyellow: "fafad2",
	lightgray: "d3d3d3",
	lightgreen: "90ee90",
	lightgrey: "d3d3d3",
	lightpink: "ffb6c1",
	lightsalmon: "ffa07a",
	lightseagreen: "20b2aa",
	lightskyblue: "87cefa",
	lightslategray: "789",
	lightslategrey: "789",
	lightsteelblue: "b0c4de",
	lightyellow: "ffffe0",
	lime: "0f0",
	limegreen: "32cd32",
	linen: "faf0e6",
	magenta: "f0f",
	maroon: "800000",
	mediumaquamarine: "66cdaa",
	mediumblue: "0000cd",
	mediumorchid: "ba55d3",
	mediumpurple: "9370db",
	mediumseagreen: "3cb371",
	mediumslateblue: "7b68ee",
	mediumspringgreen: "00fa9a",
	mediumturquoise: "48d1cc",
	mediumvioletred: "c71585",
	midnightblue: "191970",
	mintcream: "f5fffa",
	mistyrose: "ffe4e1",
	moccasin: "ffe4b5",
	navajowhite: "ffdead",
	navy: "000080",
	oldlace: "fdf5e6",
	olive: "808000",
	olivedrab: "6b8e23",
	orange: "ffa500",
	orangered: "ff4500",
	orchid: "da70d6",
	palegoldenrod: "eee8aa",
	palegreen: "98fb98",
	paleturquoise: "afeeee",
	palevioletred: "db7093",
	papayawhip: "ffefd5",
	peachpuff: "ffdab9",
	peru: "cd853f",
	pink: "ffc0cb",
	plum: "dda0dd",
	powderblue: "b0e0e6",
	purple: "800080",
	rebeccapurple: "663399",
	red: "f00",
	rosybrown: "bc8f8f",
	royalblue: "4169e1",
	saddlebrown: "8b4513",
	salmon: "fa8072",
	sandybrown: "f4a460",
	seagreen: "2e8b57",
	seashell: "fff5ee",
	sienna: "a0522d",
	silver: "c0c0c0",
	skyblue: "87ceeb",
	slateblue: "6a5acd",
	slategray: "708090",
	slategrey: "708090",
	snow: "fffafa",
	springgreen: "00ff7f",
	steelblue: "4682b4",
	tan: "d2b48c",
	teal: "008080",
	thistle: "d8bfd8",
	tomato: "ff6347",
	turquoise: "40e0d0",
	violet: "ee82ee",
	wheat: "f5deb3",
	white: "fff",
	whitesmoke: "f5f5f5",
	yellow: "ff0",
	yellowgreen: "9acd32"
}, lw = $.hexNames = uw(cw);
function uw(e) {
	var t = {};
	for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
	return t;
}
function dw(e) {
	return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function fw(e, t) {
	hw(e) && (e = "100%");
	var n = gw(e);
	return e = Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
}
function pw(e) {
	return Math.min(1, Math.max(0, e));
}
function mw(e) {
	return parseInt(e, 16);
}
function hw(e) {
	return typeof e == "string" && e.indexOf(".") != -1 && parseFloat(e) === 1;
}
function gw(e) {
	return typeof e == "string" && e.indexOf("%") != -1;
}
function _w(e) {
	return e.length == 1 ? "0" + e : "" + e;
}
function vw(e) {
	return e <= 1 && (e = e * 100 + "%"), e;
}
function yw(e) {
	return Math.round(parseFloat(e) * 255).toString(16);
}
function bw(e) {
	return mw(e) / 255;
}
var xw = function() {
	var e = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)", t = "[\\s|\\(]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")\\s*\\)?", n = "[\\s|\\(]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")\\s*\\)?";
	return {
		CSS_UNIT: new RegExp(e),
		rgb: RegExp("rgb" + t),
		rgba: RegExp("rgba" + n),
		hsl: RegExp("hsl" + t),
		hsla: RegExp("hsla" + n),
		hsv: RegExp("hsv" + t),
		hsva: RegExp("hsva" + n),
		hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
		hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
	};
}();
function Sw(e) {
	return !!xw.CSS_UNIT.exec(e);
}
function Cw(e) {
	e = e.replace(zC, "").replace(BC, "").toLowerCase();
	var t = !1;
	if (cw[e]) e = cw[e], t = !0;
	else if (e == "transparent") return {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
		format: "name"
	};
	var n;
	return (n = xw.rgb.exec(e)) ? {
		r: n[1],
		g: n[2],
		b: n[3]
	} : (n = xw.rgba.exec(e)) ? {
		r: n[1],
		g: n[2],
		b: n[3],
		a: n[4]
	} : (n = xw.hsl.exec(e)) ? {
		h: n[1],
		s: n[2],
		l: n[3]
	} : (n = xw.hsla.exec(e)) ? {
		h: n[1],
		s: n[2],
		l: n[3],
		a: n[4]
	} : (n = xw.hsv.exec(e)) ? {
		h: n[1],
		s: n[2],
		v: n[3]
	} : (n = xw.hsva.exec(e)) ? {
		h: n[1],
		s: n[2],
		v: n[3],
		a: n[4]
	} : (n = xw.hex8.exec(e)) ? {
		r: mw(n[1]),
		g: mw(n[2]),
		b: mw(n[3]),
		a: bw(n[4]),
		format: t ? "name" : "hex8"
	} : (n = xw.hex6.exec(e)) ? {
		r: mw(n[1]),
		g: mw(n[2]),
		b: mw(n[3]),
		format: t ? "name" : "hex"
	} : (n = xw.hex4.exec(e)) ? {
		r: mw(n[1] + "" + n[1]),
		g: mw(n[2] + "" + n[2]),
		b: mw(n[3] + "" + n[3]),
		a: bw(n[4] + "" + n[4]),
		format: t ? "name" : "hex8"
	} : (n = xw.hex3.exec(e)) ? {
		r: mw(n[1] + "" + n[1]),
		g: mw(n[2] + "" + n[2]),
		b: mw(n[3] + "" + n[3]),
		format: t ? "name" : "hex"
	} : !1;
}
function ww(e) {
	var t, n;
	return e ||= {
		level: "AA",
		size: "small"
	}, t = (e.level || "AA").toUpperCase(), n = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), n !== "small" && n !== "large" && (n = "small"), {
		level: t,
		size: n
	};
}
var Tw = (e, t, n = !1) => {
	if (n) switch (t) {
		case "rgb": return e.toRgb();
		case "prgb": return e.toPercentageRgb();
		case "hsl": return e.toHsl();
		case "hsv": return e.toHsv();
		default: return null;
	}
	else {
		let n = t;
		t === "hex" && e.getAlpha() < 1 && (n = "hex8");
		let r = e.toString(n);
		try {
			r = JSON.parse(r);
		} catch {}
		return r;
	}
}, Ew = (e, t) => !!(Object.prototype.hasOwnProperty.call(e, t) && typeof e[t] < "u"), Dw = (e) => typeof e > "u", Ow = [
	"update:tinyColor",
	"update:modelValue",
	"input"
];
function kw(e, t, n) {
	let r, i, a = Ms({
		get: () => {
			let { modelValue: t, tinyColor: n, value: a } = e, o = n ?? t ?? a;
			return Dw(i) && (Dw(a) || (i = $(a).getFormat()), Dw(t) || (i = $(t).getFormat())), Dw(r) && (typeof a == "object" && !(a instanceof $) && (r = !0), typeof t == "object" && (r = !0)), $(o);
		},
		set: (e) => {
			o(e);
		}
	}), o = (n) => {
		let a = $(n);
		Ew(e, "tinyColor") && t("update:tinyColor", a), Ew(e, "modelValue") && t("update:modelValue", Tw(a, i, r)), Ew(e, "value") && t("input", Tw(a, i, r));
	};
	return a;
}
var Aw = (e) => {
	let t = {
		x: 0,
		y: 0
	};
	return e instanceof MouseEvent && (t.x = e.pageX, t.y = e.pageY), typeof TouchEvent < "u" && e instanceof TouchEvent && (t.x = e.touches?.[0] ? e.touches[0].pageX : e.changedTouches?.[0] ? e.changedTouches[0].pageX : 0, t.y = e.touches?.[0] ? e.touches[0].pageY : e.changedTouches?.[0] ? e.changedTouches[0].pageY : 0), t;
}, jw = () => ({
	x: window.scrollX || window.pageXOffset || document.documentElement.scrollLeft || 0,
	y: window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0
}), Mw = (e) => {
	let { x: t, y: n } = jw(), r = e.getBoundingClientRect();
	return {
		x: r.left + t,
		y: r.top + n
	};
}, Nw = (e) => e.code === "ArrowUp" || e.keyCode === 38 ? "up" : e.code === "ArrowDown" || e.keyCode === 40 ? "down" : e.code === "ArrowLeft" || e.keyCode === 37 ? "left" : e.code === "ArrowRight" || e.keyCode === 39 ? "right" : null;
function Pw(e) {
	let t = e.toString();
	return t.indexOf(".") === -1 ? 0 : t.split(".")[1].length;
}
function Fw(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
var Iw = (e, t = 20) => {
	let n, r, i;
	return (...a) => {
		n ? (clearTimeout(r), r = setTimeout(() => {
			Date.now() - i >= t && (e(...a), i = Date.now());
		}, Math.max(t - (Date.now() - i), 0))) : (e(...a), i = Date.now(), n = !0);
	};
}, Lw = ["aria-valuetext"], Rw = /* @__PURE__ */ pi({
	__name: "SaturationSlider",
	props: {
		hue: {},
		tinyColor: {},
		modelValue: {},
		value: {}
	},
	emits: ["change"].concat(Ow),
	setup(e, { emit: t }) {
		let n = t, r = e, i = /* @__PURE__ */ pn(0), a = kw(r, n), o = Ms(() => a.value.toHsv()), s = Ms(() => r.hue ?? o.value.h), c = Ms(() => `hsl(${s.value}, 100%, 50%)`), l = Ms(() => -(o.value.v * 100) + 1 + 100 + "%"), u = Ms(() => o.value.v <= .01 ? i.value * 100 + "%" : o.value.s * 100 + "%"), d = /* @__PURE__ */ pn(null);
		function f(e) {
			let t = d.value;
			if (!t) return;
			let n = t.clientWidth, r = t.clientHeight, { x: a, y: c } = Mw(t), { x: l, y: u } = Aw(e), f = Fw(l - a, 0, n), m = Fw(u - c, 0, r), h = f / n, g = Fw(1 - m / r, 0, 1);
			i.value = h;
			let _ = Math.round(h * 100), v = Math.round(g * 100);
			_ === 1 && (_ = .01), v === 1 && (v = .01), p({
				h: s.value,
				s: _,
				v,
				a: o.value.a
			});
		}
		function p(e) {
			a.value = e;
		}
		let m = Iw(f, 20);
		function h(e) {
			e.preventDefault(), e.type.startsWith("mouse") ? (window.addEventListener("mousemove", m), window.addEventListener("mouseup", m), window.addEventListener("mouseup", g)) : e.type.startsWith("touch") && (window.addEventListener("touchmove", m), window.addEventListener("touchend", m), window.addEventListener("touchend", g));
		}
		function g() {
			_();
		}
		function _() {
			window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", m), window.removeEventListener("mouseup", g), window.removeEventListener("touchmove", m), window.removeEventListener("touchend", m), window.removeEventListener("touchend", g);
		}
		function v(e) {
			switch (e.preventDefault(), Nw(e)) {
				case "left": {
					let e = o.value.s - .01;
					p({
						...o.value,
						s: e >= 0 ? e : 0
					});
					break;
				}
				case "right": {
					let e = o.value.s + .01;
					p({
						...o.value,
						s: e > 1 ? 1 : e
					});
					break;
				}
				case "up": {
					let e = o.value.v + .01;
					p({
						...o.value,
						v: e > 1 ? 1 : e
					});
					break;
				}
				case "down": {
					let e = o.value.v - .01;
					p({
						...o.value,
						v: e < 0 ? 0 : e
					});
					break;
				}
			}
		}
		return Ni(() => {
			_();
		}), (e, t) => (H(), U("div", {
			class: "vc-saturation-slider bg",
			style: ge({ background: c.value }),
			ref_key: "containerRef",
			ref: d,
			onMousedown: h,
			onTouchstart: h,
			role: "application",
			"aria-label": "Saturation and brightness picker"
		}, [
			t[1] ||= W("div", { class: "bg white" }, null, -1),
			t[2] ||= W("div", { class: "bg black" }, null, -1),
			W("div", {
				class: "picker-wrap",
				style: ge({
					top: l.value,
					left: u.value
				}),
				role: "slider",
				tabindex: "0",
				"aria-valuemin": "0",
				"aria-valuemax": "1",
				"aria-label": "press arrow to change saturation or brightness",
				"aria-valuenow": "?",
				"aria-valuetext": `saturation: ${o.value.s.toFixed(0)}%, brightness: ${o.value.v.toFixed(0)}%`,
				onKeydown: v
			}, t[0] ||= [W("div", { class: "picker" }, null, -1)], 44, Lw)
		], 36));
	}
}), zw = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Bw = /* @__PURE__ */ zw(Rw, [["__scopeId", "data-v-4d048d6e"]]), Vw = (e) => typeof e < "u", Hw = { class: "vc-base-slider" }, Uw = {
	key: 0,
	class: "background"
}, Ww = [
	"aria-label",
	"aria-valuemax",
	"aria-valuenow"
], Gw = /* @__PURE__ */ zw(/* @__PURE__ */ pi({
	__name: "BaseSlider",
	props: {
		direction: { default: "horizontal" },
		modelValue: { default: 0 },
		value: { default: 0 },
		max: { default: 100 },
		step: {},
		ariaLabel: { default: "slider" }
	},
	emits: ["input", "update:modelValue"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = Ms(() => n.modelValue ?? n.value), a = Ms(() => {
			let e = i.value / n.max;
			return n.direction === "vertical" && (e = 1 - e), 100 * e + "%";
		}), o = /* @__PURE__ */ pn(null);
		function s(e) {
			Vw(e) && (r("input", e), r("update:modelValue", e));
		}
		function c(e) {
			let { direction: t, max: r } = n, i = o.value;
			if (!i) return;
			let a = i.clientWidth, c = i.clientHeight, { x: l, y: u } = Mw(i), { x: d, y: f } = Aw(e), p = d - l, m = f - u, h;
			h = t === "vertical" ? m < 0 ? r : m > c ? 0 : (1 - m / c) * r : p < 0 ? 0 : p > a ? r : p / a * r, s(h);
		}
		let l = Iw(c);
		function u(e) {
			c(e), e.type.startsWith("mouse") ? (window.addEventListener("mousemove", l), window.addEventListener("mouseup", d)) : (window.addEventListener("touchmove", l), window.addEventListener("touchend", d));
		}
		function d() {
			f();
		}
		function f() {
			window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", d), window.removeEventListener("touchmove", l), window.removeEventListener("touchend", d);
		}
		function p(e) {
			e.preventDefault();
			let { direction: t, max: r } = n, a = Nw(e), o = n.step ?? r / 100, c = i.value, l;
			switch (a) {
				case "left":
					if (t !== "horizontal") return;
					l = c - o < 0 ? 0 : c - o;
					break;
				case "right":
					if (t !== "horizontal") return;
					l = c + o > r ? r : c + o;
					break;
				case "down":
					if (t !== "vertical") return;
					l = c - o < 0 ? 0 : c - o;
					break;
				case "up":
					if (t !== "vertical") return;
					l = c + o > r ? r : c + o;
			}
			s(l);
		}
		return Ni(() => {
			f();
		}), (e, t) => (H(), U("div", Hw, [e.$slots.background ? (H(), U("div", Uw, [V(e.$slots, "background", {}, void 0, !0)])) : q("", !0), W("div", {
			class: F({
				slider: !0,
				horizontal: e.direction === "horizontal",
				vertical: e.direction === "vertical"
			}),
			ref_key: "containerRef",
			ref: o,
			onMousedown: u,
			onTouchstart: u,
			role: "slider",
			"aria-label": e.ariaLabel,
			"aria-valuemax": e.max,
			"aria-valuemin": "0",
			"aria-valuenow": i.value.toFixed(1),
			tabindex: "0",
			onKeydown: p
		}, [W("div", {
			class: "picker-wrap",
			style: ge({
				left: e.direction === "horizontal" ? a.value : 0,
				top: e.direction === "vertical" ? a.value : 0
			}),
			role: "presentation"
		}, [V(e.$slots, "picker", {}, () => [t[0] ||= W("div", { class: "picker" }, null, -1)], !0)], 4)], 42, Ww)]));
	}
}), [["__scopeId", "data-v-972b0fad"]]), Kw = /* @__PURE__ */ zw(/* @__PURE__ */ pi({
	__name: "HueSlider",
	props: {
		direction: { default: "horizontal" },
		modelValue: { default: 0 }
	},
	emits: ["update:modelValue"],
	setup(e, { emit: t }) {
		_c((e) => ({ "2f44f39d": i.value }));
		let n = e, r = t, i = Ms(() => `linear-gradient(to ${n.direction === "horizontal" ? "right" : "top"}, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)`), a = Ms(() => {
			let e = Number(n.modelValue);
			return Number.isNaN(e) ? 0 : e;
		}), o = /* @__PURE__ */ pn();
		Kr(a, (e, t) => {
			e !== 0 && e - t > 0 && (o.value = "right"), e !== 0 && e - t < 0 && (o.value = "left");
		});
		let s = Ms(() => n.direction === "vertical" ? a.value === 0 && o.value === "right" ? 0 : a.value : n.direction === "horizontal" ? a.value === 0 && o.value === "right" ? 360 : a.value : 0);
		function c(e) {
			l(Math.round(e));
		}
		function l(e) {
			r("update:modelValue", e);
		}
		return (e, t) => (H(), Ho(Gw, {
			class: "vc-hue-slider",
			max: 360,
			step: 1,
			modelValue: s.value,
			direction: e.direction,
			"onUpdate:modelValue": c,
			"aria-label": "Hue"
		}, {
			background: z(() => t[0] ||= [W("div", { class: "gradient" }, null, -1)]),
			picker: z(() => [V(e.$slots, "default", {}, void 0, !0)]),
			_: 3
		}, 8, ["modelValue", "direction"]));
	}
}), [["__scopeId", "data-v-5367c985"]]), qw = /* @__PURE__ */ zw(/* @__PURE__ */ pi({
	__name: "CheckerboardBG",
	props: {
		size: { default: 8 },
		white: { default: "#fff" },
		grey: { default: "#e6e6e6" }
	},
	setup(e) {
		let t = e;
		function n(e, t, n) {
			if (typeof document > "u") return null;
			var r = document.createElement("canvas");
			r.width = r.height = n * 2;
			var i = r.getContext("2d");
			return i ? (i.fillStyle = e, i.fillRect(0, 0, r.width, r.height), i.fillStyle = t, i.fillRect(0, 0, n, n), i.translate(n, n), i.fillRect(0, 0, n, n), r.toDataURL()) : null;
		}
		function r(e, t, r) {
			return n(e, t, r);
		}
		let i = Ms(() => `url(${r(t.white, t.grey, t.size)})`);
		return (e, t) => (H(), U("div", {
			class: "vc-checkerboard",
			style: ge({ backgroundImage: i.value })
		}, null, 4));
	}
}), [["__scopeId", "data-v-37d61ccd"]]), Jw = /* @__PURE__ */ zw(/* @__PURE__ */ pi({
	__name: "AlphaSlider",
	props: {
		tinyColor: {},
		modelValue: {},
		value: {}
	},
	emits: Ow,
	setup(e, { emit: t }) {
		let n = kw(e, t), r = Ms(() => {
			let e = n.value.toRgb(), t = [
				e.r,
				e.g,
				e.b
			].join(",");
			return "linear-gradient(to right, rgba(" + t + ", 0) 0%, rgba(" + t + ", 1) 100%)";
		}), i = Ms(() => n.value.getAlpha());
		function a(e) {
			n.value = n.value.setAlpha(e).clone();
		}
		return (e, t) => (H(), Ho(Gw, {
			class: "vc-alpha-slider",
			modelValue: i.value,
			max: 1,
			"aria-label": "Transparency",
			"onUpdate:modelValue": a
		}, {
			background: z(() => [G(qw), W("div", {
				class: "gradient",
				style: ge({ background: r.value })
			}, null, 4)]),
			_: 1
		}, 8, ["modelValue"]));
	}
}), [["__scopeId", "data-v-07dd346b"]]), Yw = { class: "vc-editable-input" }, Xw = ["value", "aria-label"], Zw = {
	key: 0,
	class: "vc-input-desc",
	"aria-hidden": "true"
}, Qw = /* @__PURE__ */ zw(/* @__PURE__ */ pi({
	__name: "EditableInput",
	props: {
		value: {},
		label: {},
		desc: {},
		max: {},
		min: {},
		step: { default: 1 },
		a11y: {}
	},
	emits: ["change", "blur"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = n.a11y?.label ?? n.label, a = `input__label__${i}__${Math.random().toString().slice(2, 5)}`;
		function o(e) {
			let { min: t, max: i } = n;
			if (Vw(i) && +e > i) {
				r("change", i);
				return;
			}
			if (Vw(t) && +e < t) {
				r("change", t);
				return;
			}
			r("change", e);
		}
		function s(e) {
			o(e.target?.value);
		}
		function c(e) {
			r("blur", e);
		}
		function l(e) {
			let t = Number(n.value);
			if (!isNaN(t)) {
				let r = n.step, i = Pw(r), a = Nw(e);
				a === "up" && (o((t + r).toFixed(i)), e.preventDefault()), a === "down" && (o((t - r).toFixed(i)), e.preventDefault());
			}
		}
		return (e, t) => (H(), U("div", Yw, [
			W("input", {
				class: "vc-input-input",
				value: n.value,
				onKeydown: l,
				onInput: s,
				onBlur: c,
				"aria-label": _n(i),
				id: a
			}, null, 40, Xw),
			W("label", {
				for: a,
				class: "vc-input-label",
				"aria-hidden": "true"
			}, I(n.label), 1),
			e.desc ? (H(), U("span", Zw, I(e.desc), 1)) : q("", !0)
		]));
	}
}), [["__scopeId", "data-v-9c267b2b"]]), $w = (e) => $(e).isValid(), eT = /* @__PURE__ */ pi({
	__name: "HexInput",
	props: {
		value: {},
		label: {},
		desc: {},
		a11y: {},
		type: { default: "hex" },
		withHash: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["change"],
	setup(e, { emit: t }) {
		let n = e, r = t, i = {
			label: n.type === "hex" ? "Hex" : "Hex with transparency",
			...n.a11y
		}, a = (e, t = "hex") => {
			let r = "";
			return t === "hex" && (r = $(e).toHexString()), t === "hex8" && (r = $(e).toHex8String()), n.withHash !== !0 && (r = r.replace("#", "")), r;
		}, o = /* @__PURE__ */ pn(a(n.value, n.type));
		Kr(() => n.value, (e) => {
			$.equals(e, o.value) || (o.value = a(e, n.type));
		});
		let s = (e) => {
			if (!e) return;
			o.value = e;
			let t = e.length;
			e[0] === "#" && --t, (n.type !== "hex" || t % 3 == 0 || t === 8) && (n.type === "hex8" && t !== 8 || $w(e) && r("change", e));
		}, c = () => {
			let e = o.value.length;
			o.value[0] === "#" && --e, !($w(o.value) && (n.type === "hex" && e === 6 || n.type === "hex8" && e === 8)) && (o.value = a(n.value, n.type));
		};
		return (e, t) => (H(), Ho(Qw, {
			label: n.label,
			a11y: i,
			value: o.value,
			onChange: s,
			onBlur: c
		}, null, 8, ["label", "value"]));
	}
});
function tT() {
	let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	return e.charAt(Math.floor(Math.random() * 62)) + e.charAt(Math.floor(Math.random() * 62));
}
var nT = (e) => {
	let t = /* @__PURE__ */ pn(0), n = `__from__vc__hue__${tT()}`;
	return Kr(e, (e) => {
		if (e[n]) return;
		let r = e.toHsl().h;
		r === 0 && t.value !== 0 || (t.value = r);
	}, { immediate: !0 }), {
		hueRef: t,
		updateHueRef: (r) => {
			let i = $({
				...e.value.toHsl(),
				h: r
			});
			i[n] = !0, e.value = i, t.value = r;
		}
	};
}, rT = { class: "saturation" }, iT = { class: "body" }, aT = { class: "controls" }, oT = { class: "color-wrap" }, sT = ["aria-label"], cT = { class: "sliders" }, lT = { class: "hue-wrap" }, uT = {
	key: 0,
	class: "alpha-wrap"
}, dT = {
	key: 0,
	class: "fieldsWrap",
	"data-testid": "fields"
}, fT = {
	key: 0,
	class: "fields"
}, pT = { class: "field" }, mT = { class: "field" }, hT = { class: "field" }, gT = {
	key: 0,
	class: "field"
}, _T = {
	key: 1,
	class: "fields"
}, vT = { class: "field" }, yT = {
	key: 2,
	class: "fields"
}, bT = { class: "field" }, xT = { class: "field" }, ST = { class: "field" }, CT = {
	key: 0,
	class: "field"
}, wT = {
	class: "toggle-icon",
	role: "presentation"
}, TT = {
	style: {
		width: "24px",
		height: "24px"
	},
	viewBox: "0 0 24 24"
}, ET = {
	class: "toggle-icon_highlighted",
	role: "presentation"
}, DT = /* @__PURE__ */ zw(/* @__PURE__ */ pi({
	__name: "ChromePicker",
	props: {
		disableAlpha: { type: Boolean },
		disableFields: { type: Boolean },
		formats: { default: () => [
			"rgb",
			"hex",
			"hsl"
		] },
		tinyColor: {},
		modelValue: {},
		value: {}
	},
	emits: Ow,
	setup(e, { emit: t }) {
		let n = e, r = kw(n, t), { hueRef: i, updateHueRef: a } = nT(r), o = /* @__PURE__ */ pn(0), s = /* @__PURE__ */ pn(!1), c = Ms(() => {
			let e = r.value.toRgb();
			return "rgba(" + [
				e.r,
				e.g,
				e.b,
				r.value.getAlpha()
			].join(",") + ")";
		}), l = Ms(() => {
			let { h: e, s: t, l: n } = r.value.toHsl();
			return {
				h: e.toFixed(),
				s: `${(t * 100).toFixed()}%`,
				l: `${(n * 100).toFixed()}%`
			};
		}), u = Ms(() => r.value.toRgb()), d = Ms(() => Number(r.value.getAlpha().toFixed(2))), f = /* @__PURE__ */ new Set([
			"hex",
			"hsl",
			"rgb"
		]), p = Ms(() => {
			let e = /* @__PURE__ */ new Set(), t = [], r = n.formats;
			for (let n of r) if (f.has(n)) {
				let r = n;
				e.has(r) || (e.add(r), t.push(r));
			}
			return t;
		}), m = Ms(() => {
			let { disableFields: e, formats: t } = n;
			return !(e === !0 || !Array.isArray(t) || p.value.length === 0);
		}), h = (e) => p.value.includes(e), g = (e) => p.value.indexOf(e), _ = (e) => {
			r.value = e;
		}, v = (e, t) => {
			if (!t || isNaN(Number(t))) return;
			let n = { [e]: t };
			r.value = {
				...u.value,
				a: d.value,
				...n
			};
		}, y = (e, t) => {
			if (!t) return;
			let n = { [e]: +t };
			(e === "s" || e === "l") && (n[e] = t.replace("%", "") / 100), r.value = {
				...r.value.toHsl(),
				a: d.value,
				...n
			};
		}, b = () => {
			if (o.value === p.value.length - 1) {
				o.value = 0;
				return;
			}
			o.value++;
		}, x = () => {
			s.value = !0;
		}, S = () => {
			s.value = !1;
		};
		return (e, t) => (H(), U("div", {
			role: "application",
			"aria-label": "Chrome Color Picker",
			class: F(["vc-chrome-picker", e.disableAlpha ? "alpha-disabled" : ""])
		}, [W("div", rT, [G(Bw, {
			tinyColor: _n(r),
			"onUpdate:tinyColor": t[0] ||= (e) => /* @__PURE__ */ fn(r) ? r.value = e : null,
			hue: _n(i)
		}, null, 8, ["tinyColor", "hue"])]), W("div", iT, [W("div", aT, [W("div", oT, [W("div", {
			class: "active-color",
			style: ge({ backgroundColor: c.value }),
			role: "presentation",
			"aria-live": "polite",
			"aria-label": `Current color is ${c.value}`
		}, null, 12, sT), n.disableAlpha ? q("", !0) : (H(), Ho(qw, { key: 0 }))]), W("div", cT, [W("div", lT, [G(Kw, {
			modelValue: _n(i),
			"onUpdate:modelValue": _n(a)
		}, null, 8, ["modelValue", "onUpdate:modelValue"])]), n.disableAlpha ? q("", !0) : (H(), U("div", uT, [G(Jw, {
			tinyColor: _n(r),
			"onUpdate:tinyColor": t[1] ||= (e) => /* @__PURE__ */ fn(r) ? r.value = e : null
		}, null, 8, ["tinyColor"])]))])]), m.value ? (H(), U("div", dT, [
			h("rgb") ? zr((H(), U("div", fT, [
				W("div", pT, [G(Qw, {
					label: "r",
					value: u.value.r,
					onChange: t[2] ||= (e) => v("r", e),
					a11y: { label: "Red" }
				}, null, 8, ["value"])]),
				W("div", mT, [G(Qw, {
					label: "g",
					value: u.value.g,
					onChange: t[3] ||= (e) => v("g", e),
					a11y: { label: "Green" }
				}, null, 8, ["value"])]),
				W("div", hT, [G(Qw, {
					label: "b",
					value: u.value.b,
					onChange: t[4] ||= (e) => v("b", e),
					a11y: { label: "Blue" }
				}, null, 8, ["value"])]),
				e.disableAlpha ? q("", !0) : (H(), U("div", gT, [G(Qw, {
					label: "a",
					value: d.value,
					step: .01,
					max: 1,
					onChange: t[5] ||= (e) => v("a", e),
					a11y: { label: "Transparency" }
				}, null, 8, ["value"])]))
			], 512)), [[mc, o.value === g("rgb")]]) : q("", !0),
			h("hex") ? zr((H(), U("div", _T, [W("div", vT, [G(eT, {
				type: d.value === 1 ? "hex" : "hex8",
				label: "hex",
				value: _n(r).toHex8String(),
				onChange: _,
				"with-hash": !0
			}, null, 8, ["type", "value"])])], 512)), [[mc, o.value === g("hex")]]) : q("", !0),
			h("hsl") ? zr((H(), U("div", yT, [
				W("div", bT, [G(Qw, {
					label: "h",
					value: _n(i).toFixed(),
					onChange: t[6] ||= (e) => y("h", e),
					a11y: { label: "Hue" }
				}, null, 8, ["value"])]),
				W("div", xT, [G(Qw, {
					label: "s",
					value: l.value.s,
					onChange: t[7] ||= (e) => y("s", e),
					a11y: { label: "Saturation" }
				}, null, 8, ["value"])]),
				W("div", ST, [G(Qw, {
					label: "l",
					value: l.value.l,
					onChange: t[8] ||= (e) => y("l", e),
					a11y: { label: "Lightness" }
				}, null, 8, ["value"])]),
				e.disableAlpha ? q("", !0) : (H(), U("div", CT, [G(Qw, {
					label: "a",
					value: d.value,
					step: .01,
					max: 1,
					onChange: t[9] ||= (e) => y("a", e),
					a11y: { label: "Transparency" }
				}, null, 8, ["value"])]))
			], 512)), [[mc, o.value === g("hsl")]]) : q("", !0),
			p.value.length > 1 ? (H(), U("div", {
				key: 3,
				class: "toggle-btn",
				onClick: b,
				onKeydown: [Tl(b, ["enter"]), Tl(b, ["space"])],
				onMouseover: x,
				onMouseenter: x,
				onMouseout: S,
				onFocus: x,
				onBlur: S,
				role: "button",
				"aria-label": "Change color format",
				tabindex: "0"
			}, [W("div", wT, [(H(), U("svg", TT, t[10] ||= [W("path", {
				fill: "currentColor",
				d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
			}, null, -1)]))]), zr(W("div", ET, null, 512), [[mc, _n(s)]])], 32)) : q("", !0)
		])) : q("", !0)])], 2));
	}
}), [["__scopeId", "data-v-dfdde7e0"]]);
["change"].concat(Ow), ["change"].concat(Ow), Ow.concat([
	"ok",
	"cancel",
	"reset"
]), ["change"].concat(Ow);
//#endregion
//#region src/components/FvlColorPicker.vue
var OT = {
	components: {
		OnClickOutside: fS,
		ValidationErrors: f_,
		"chrome-picker": DT
	},
	mixins: [p_],
	emits: ["changed", "update:modelValue"],
	props: {
		label: {
			type: String,
			required: !1,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			default: null
		},
		modelValue: {
			validator: (e) => typeof e == "string" || e === null,
			default: null
		},
		format: {
			type: String,
			validator: function(e) {
				return [
					"hex",
					"hex8",
					"hsl",
					"hsv",
					"rgba",
					"linearGradient",
					"radialGradient"
				].indexOf(e) !== -1;
			},
			default: "hex"
		},
		placeholder: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		validateFormat: {
			type: Boolean,
			required: !1,
			default: !0
		}
	},
	data() {
		return {
			isOpen: !1,
			patterns: {
				hex: "(?:#[a-fA-F\\d]{3}(?:[a-fA-F\\d]{3}|[a-fA-F\\d]{5})?|(?:linear|radial)-gradient\\(.+\\))",
				linearGradient: "linear-gradient\\(.+\\)",
				radialGradient: "radial-gradient\\(.+\\)",
				hex8: "#[a-fA-F\\d]{8}",
				hsl: "[Hh][Ss][Ll]\\(.+\\)",
				hsla: "[Hh][Ss][Ll][Aa]\\(.+\\)",
				hsv: "[Hh][Ss][Vv]\\(.+\\)",
				rgb: "[Rr][Gg][Bb]\\(.+\\)",
				rgba: "[Rr][Gg][Bb][Aa]\\(.+\\)"
			}
		};
	},
	computed: { pattern() {
		return this.patterns[this.format];
	} },
	methods: {
		updateValue(e) {
			let t = e && typeof e == "object" && this.format in e ? e[this.format] : e;
			this.$emit("update:modelValue", t), this.$emit("changed"), this.formDirty(this.name);
		},
		updateValueManually(e) {
			this.$emit("update:modelValue", e), this.$emit("changed"), this.formDirty(this.name);
		},
		setupPopper() {
			this.popper === void 0 ? this.popper = new xb(this.$refs.colorpicker, this.$refs.picker, { placement: "bottom-end" }) : this.popper.scheduleUpdate();
		},
		open() {
			this.isOpen || (this.isOpen = !0, this.$nextTick(() => {
				this.setupPopper();
			}));
		},
		close() {
			this.isOpen && (this.isOpen = !1, this.$nextTick(() => {
				this.$refs.colorinput.focus();
			}));
		},
		toggle() {
			this.disabled || (this.isOpen ? this.close() : this.open());
		}
	},
	beforeUnmount() {
		this.popper !== void 0 && this.popper.destroy();
	}
}, kT = ["for"], AT = ["innerHTML"], jT = { class: "fvl-color-picker-container" }, MT = [
	"id",
	"value",
	"name",
	"required",
	"disabled",
	"readonly",
	"pattern"
], NT = {
	ref: "picker",
	class: "fvl-color-picker-dropdown"
};
function PT(e, t, n, r, i, a) {
	let o = B("chrome-picker"), s = B("validation-errors"), c = B("on-click-outside");
	return H(), Ho(c, { onDo: t[4] ||= (e) => a.close() }, {
		default: z(() => [W("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-color-picker-wrapper"]) }, [
			n.label ? (H(), U("label", {
				key: 0,
				class: F([n.labelClass, "fvl-color-picker-label"]),
				for: n.name
			}, [W("span", { innerHTML: n.label }, null, 8, AT), V(e.$slots, "label_suffix")], 10, kT)) : q("", !0),
			W("div", { class: F(["fvl-color-picker-group", n.fieldClass]) }, [
				V(e.$slots, "prefix"),
				W("div", jT, [W("input", {
					id: n.id,
					ref: "colorinput",
					autocapitalize: "off",
					spellcheck: "false",
					value: n.modelValue,
					name: n.name,
					required: n.required,
					disabled: n.disabled,
					readonly: n.readonly,
					type: "text",
					class: "fvl-color-picker",
					pattern: n.validateFormat ? a.pattern : null,
					onKeyup: t[0] ||= Tl((e) => a.toggle(), ["space"]),
					onChange: t[1] ||= (e) => a.updateValueManually(e.target.value),
					onInput: t[2] ||= (t) => e.formDirty(n.name)
				}, null, 40, MT), W("div", {
					ref: "colorpicker",
					class: "fvl-color-preview",
					onClick: t[3] ||= (e) => a.toggle()
				}, [W("span", {
					style: ge({ background: n.modelValue }),
					class: "inline-block rounded-full border border-white h-4 w-4"
				}, null, 4)], 512)]),
				V(e.$slots, "suffix"),
				zr(W("div", NT, [G(o, {
					ref: "picker",
					"disable-alpha": n.format == "hex",
					"model-value": n.modelValue,
					"disable-fields": "",
					"onUpdate:modelValue": a.updateValue
				}, null, 8, [
					"disable-alpha",
					"model-value",
					"onUpdate:modelValue"
				])], 512), [[mc, i.isOpen]])
			], 2),
			V(e.$slots, "hint"),
			V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(s, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
		], 2)]),
		_: 3
	});
}
var FT = /*#__PURE__*/ Y(OT, [["render", PT]]), IT = (e) => e.map((e) => ({
	...e,
	options: e.options.map((e) => ({ ...e }))
})), LT = {
	components: {
		ValidationErrors: f_,
		FvlCheckbox: fC
	},
	mixins: [p_],
	emits: ["update:groups", "update:modelValue"],
	props: {
		modelValue: {
			type: Array,
			default: () => []
		},
		label: {
			type: String,
			required: !1,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			required: !1,
			default: null
		},
		groups: {
			type: Array,
			default: () => []
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	data() {
		return { localGroups: this.groupsWithModelValue(this.groups, this.modelValue) };
	},
	watch: {
		groups: {
			deep: !0,
			handler(e) {
				this.localGroups = this.groupsWithModelValue(e, this.modelValue);
			}
		},
		modelValue: {
			deep: !0,
			handler(e) {
				this.localGroups = this.groupsWithModelValue(this.localGroups, e);
			}
		}
	},
	computed: { values() {
		return this.localGroups.flatMap((e) => e.options.map((e) => ({ [e.name]: !!e.checked })));
	} },
	methods: {
		groupsWithModelValue(e, t) {
			let n = Object.assign({}, ...Array.isArray(t) ? t : []);
			return IT(e).map((e) => ({
				...e,
				options: e.options.map((e) => ({
					...e,
					checked: Object.prototype.hasOwnProperty.call(n, e.name) ? !!n[e.name] : !!e.checked
				}))
			}));
		},
		toggleChildren(e, t) {
			e.options = e.options.map((e) => ({
				...e,
				checked: t
			})), this.emitState();
		},
		updateNested(e, t, n) {
			t.checked = n, this.emitState();
		},
		groupAllChecked(e) {
			return e.options.length > 0 && e.options.every((e) => e.checked);
		},
		groupAnyChecked(e) {
			return e.options.some((e) => e.checked);
		},
		emitState() {
			let e = IT(this.localGroups).map((e) => ({
				...e,
				checked: this.groupAllChecked(e)
			}));
			this.$emit("update:modelValue", this.values), this.$emit("update:groups", e), this.formDirty(this.name);
		}
	}
}, RT = ["for"], zT = ["innerHTML"];
function BT(e, t, n, r, i, a) {
	let o = B("fvl-checkbox"), s = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-multi-checkbox-wrapper"]) }, [
		n.label ? (H(), U("label", {
			key: 0,
			class: F([n.labelClass, "fvl-multi-checkbox-label"]),
			for: n.id ? n.id : n.name
		}, [W("span", { innerHTML: n.label }, null, 8, zT), V(e.$slots, "label_suffix")], 10, RT)) : q("", !0),
		(H(!0), U(Mo, null, Wi(i.localGroups, (e) => (H(), U("div", { key: e.name }, [G(o, {
			"model-value": a.groupAllChecked(e),
			label: e.label,
			name: e.name,
			readonly: n.readonly,
			disabled: n.disabled,
			class: F([{
				"fvl-multi-checkbox-all-checked": a.groupAllChecked(e),
				"fvl-multi-checkbox-any-checked": a.groupAnyChecked(e)
			}, "fvl-multi-checkbox"]),
			"onUpdate:modelValue": (t) => a.toggleChildren(e, t)
		}, null, 8, [
			"model-value",
			"label",
			"name",
			"readonly",
			"disabled",
			"class",
			"onUpdate:modelValue"
		]), (H(!0), U(Mo, null, Wi(e.options, (t) => (H(), U("div", {
			key: t.name,
			class: "fvl-multi-checkbox-group"
		}, [G(o, {
			"model-value": t.checked,
			label: t.label,
			name: t.name,
			required: n.required,
			readonly: n.readonly,
			disabled: n.disabled,
			class: "fvl-multi-checkbox-nested",
			"onUpdate:modelValue": (n) => a.updateNested(e, t, n)
		}, null, 8, [
			"model-value",
			"label",
			"name",
			"required",
			"readonly",
			"disabled",
			"onUpdate:modelValue"
		])]))), 128))]))), 128)),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(s, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var VT = /*#__PURE__*/ Y(LT, [["render", BT]]), HT = (e) => typeof File < "u" && e instanceof File, UT = {
	components: { ValidationErrors: f_ },
	mixins: [i_, p_],
	emits: ["changed", "update:modelValue"],
	props: {
		modelValue: {
			default: null,
			validator: (e) => e === null || typeof e == "string" || HT(e)
		},
		label: {
			type: String,
			required: !1,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			default: null
		},
		accept: {
			type: String,
			required: !1,
			default: null
		},
		placeholder: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	data() {
		return { fileName: HT(this.modelValue) ? this.modelValue.name : "" };
	},
	watch: { modelValue(e) {
		this.fileName = HT(e) ? e.name : "";
	} },
	methods: { handleFileChange(e) {
		let t = e.target.files[0];
		t && (this.fileName = t.name, this.$emit("update:modelValue", t), this.$emit("changed"), this.formDirty(this.name));
	} }
}, WT = ["for"], GT = ["innerHTML"], KT = { class: "fvl-file-button-wrapper" }, qT = ["textContent"], JT = ["textContent"], YT = [
	"id",
	"name",
	"placeholder",
	"required",
	"readonly",
	"accept",
	"disabled"
];
function XT(e, t, n, r, i, a) {
	let o = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-file-wrapper"]) }, [
		n.label ? (H(), U("label", {
			key: 0,
			for: n.name,
			class: F([n.labelClass, "fvl-file-label"])
		}, [W("span", { innerHTML: n.label }, null, 8, GT), V(e.$slots, "label_suffix")], 10, WT)) : q("", !0),
		W("div", KT, [
			W("button", {
				class: "fvl-file-button",
				tabindex: "-1",
				type: "button",
				onClick: t[0] ||= Cl(() => {}, ["prevent"])
			}, [V(e.$slots, "button", {}, () => [W("span", { textContent: I(e.getConfig("selectFileText", "Select File")) }, null, 8, qT)])]),
			W("span", {
				class: "fvl-file-name",
				textContent: I(i.fileName)
			}, null, 8, JT),
			W("input", {
				id: n.id,
				ref: n.name,
				name: n.name,
				placeholder: n.placeholder,
				class: F([n.fieldClass, "fvl-file"]),
				required: n.required,
				readonly: n.readonly,
				accept: n.accept,
				disabled: n.disabled || e.formIsLoading,
				type: "file",
				onChange: t[1] ||= (...e) => a.handleFileChange && a.handleFileChange(...e)
			}, null, 42, YT)
		]),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(o, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var ZT = /*#__PURE__*/ Y(UT, [["render", XT]]), QT = (e) => typeof File < "u" && e instanceof File, $T = {
	components: { ValidationErrors: f_ },
	mixins: [i_, p_],
	emits: [
		"changed",
		"previewchanged",
		"processfinished",
		"processstarted",
		"update:modelValue"
	],
	props: {
		modelValue: {
			default: null,
			validator: (e) => e === null || typeof e == "string" || QT(e)
		},
		label: {
			type: String,
			required: !1,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			default: null
		},
		accept: {
			type: String,
			required: !1,
			default: "image/*"
		},
		placeholder: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		showFileName: {
			type: Boolean,
			required: !1,
			default: !0
		}
	},
	data() {
		return {
			currentFile: QT(this.modelValue) ? this.modelValue : null,
			fileName: QT(this.modelValue) ? this.modelValue.name : "",
			preview: {
				isimage: !1,
				size: 0,
				loaded: !1,
				percent: 0,
				status: "initial",
				src: typeof this.modelValue == "string" ? this.modelValue : "",
				ratioHeight: 0
			}
		};
	},
	watch: { modelValue(e) {
		QT(e) ? (this.currentFile = e, this.fileName = e.name) : (this.currentFile = null, this.fileName = "", typeof e == "string" && e != "" && this.isValidURL(e) && (this.preview.src = e), (e === null || e === "") && (this.preview.src = ""));
	} },
	methods: {
		handleFileChange(e) {
			this.$emit("processstarted");
			let t = e.target.files[0];
			if (!t) return;
			this.currentFile = t, this.fileName = t.name;
			let n = t.type;
			n = n.split("/"), this.getFileReader(n).readAsDataURL(t), this.$emit("update:modelValue", t), this.$emit("processfinished"), this.$emit("changed"), this.formDirty(this.name);
		},
		getFileReader(e) {
			let t = this, n = new FileReader();
			return n.onloadstart = (n) => {
				let r = Math.round(n.loaded / n.total * 100);
				t.preview = {
					isimage: e[0] == "image",
					size: n.total,
					loaded: n.loaded,
					percent: r,
					status: "loading",
					src: "",
					ratioHeight: 0
				};
			}, n.onprogress = (e) => {
				let n = Math.round(e.loaded / e.total * 100);
				t.preview.loaded = e.loaded, t.preview.percent = n;
			}, n.onabort = () => {
				t.preview.status = "failed", alert(t.currentFile.name + " could not be loaded!");
			}, n.onerror = () => {
				t.preview.status = "failed", alert(t.currentFile.name + " could not be loaded!"), n.abort();
			}, n.onload = () => {
				t.preview.status = "loaded", t.preview.percent = 100, t.preview.isimage && t.getImagesize();
			}, n;
		},
		getImagesize() {
			let e = window.URL || window.webkitURL, t = this, n = new Image();
			return n.onload = function() {
				t.preview.src = t.resizeImageForPreview(this), t.preview.height = this.height, t.preview.width = this.width;
				let e = this.height > 60 ? this.height / this.width * 100 : 19;
				t.preview.ratioHeight = e < 70 ? e : 70, t.$emit("previewchanged", t.preview);
			}, n.src = e.createObjectURL(this.currentFile), n.src;
		},
		resizeImageForPreview(e) {
			let t = document.createElement("canvas"), n = t.getContext("2d"), r = document.createElement("canvas"), i = r.getContext("2d"), a = 1;
			return e.width > this.maxPreviewImageWidth ? a = this.maxPreviewImageWidth / e.width : e.height > this.maxPreviewImageHeight && (a = this.maxPreviewImageHeight / e.height), r.width = e.width, r.height = e.height, i.drawImage(e, 0, 0), t.width = e.width * a, t.height = e.height * a, n.drawImage(r, 0, 0, r.width, r.height, 0, 0, t.width, t.height), t.toDataURL();
		},
		isValidURL(e) {
			return e.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g) !== null;
		}
	}
}, eE = ["for"], tE = ["innerHTML"], nE = { class: "fvl-image-preview" }, rE = ["src", "alt"], iE = ["textContent"], aE = ["textContent"], oE = [
	"id",
	"name",
	"placeholder",
	"required",
	"readonly",
	"accept",
	"disabled"
];
function sE(e, t, n, r, i, a) {
	let o = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-image-wrapper"]) }, [
		n.label ? (H(), U("label", {
			key: 0,
			for: n.name,
			class: F([n.labelClass, "fvl-image-label"])
		}, [W("span", { innerHTML: n.label }, null, 8, tE), V(e.$slots, "label_suffix")], 10, eE)) : q("", !0),
		W("div", { class: F(["fvl-image-group", n.fieldClass]) }, [
			V(e.$slots, "preview", {
				preview: i.preview,
				selectImage: () => e.$refs[n.name].click()
			}, () => [W("div", nE, [i.preview.src ? (H(), U("img", {
				key: 0,
				src: i.preview.src,
				alt: i.fileName
			}, null, 8, rE)) : q("", !0)])]),
			V(e.$slots, "button-wrapper", {
				preview: i.preview,
				selectImage: () => e.$refs[n.name].click()
			}, () => [W("div", { class: F(["fvl-image-button-wrapper", { "fvl-image-hide-file-name": !n.showFileName }]) }, [W("button", {
				class: "fvl-image-button",
				type: "button",
				onClick: t[0] ||= Cl((t) => e.$refs[n.name].click(), ["prevent"])
			}, [V(e.$slots, "button", {}, () => [W("span", { textContent: I(e.getConfig("selectImageText", "Select Image")) }, null, 8, iE)])]), n.showFileName ? (H(), U("span", {
				key: 0,
				class: "fvl-image-name",
				textContent: I(i.fileName)
			}, null, 8, aE)) : q("", !0)], 2)]),
			W("input", {
				id: n.id,
				ref: n.name,
				name: n.name,
				placeholder: n.placeholder,
				class: F([n.fieldClass, "fvl-image"]),
				required: n.required,
				readonly: n.readonly,
				accept: n.accept,
				disabled: n.disabled || e.formIsLoading,
				type: "file",
				onChange: t[1] ||= (...e) => a.handleFileChange && a.handleFileChange(...e)
			}, null, 42, oE)
		], 2),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(o, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var cE = /*#__PURE__*/ Y($T, [["render", sE]]), lE = {
	components: { ValidationErrors: f_ },
	mixins: [i_, p_],
	emits: ["changed", "update:modelValue"],
	props: {
		modelValue: {
			type: Array,
			default: () => []
		},
		label: {
			type: String,
			required: !1,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			default: null
		},
		accept: {
			type: String,
			required: !1,
			default: null
		},
		placeholder: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		}
	},
	data() {
		return { filesList: Array.isArray(this.modelValue) ? [...this.modelValue] : [] };
	},
	watch: { modelValue(e) {
		e = Array.isArray(e) ? e : [], e.length === this.filesList.length && e.every((e, t) => e === this.filesList[t]) || (this.filesList = [...e]);
	} },
	methods: {
		handleFileChange(e) {
			let t = Array.from(e.target.files || []);
			t.length && (this.filesList = [...this.filesList, ...t], this.emitFiles(), this.$emit("changed"), this.formDirty(this.name));
		},
		removeFile(e) {
			this.filesList = this.filesList.filter((t, n) => n !== e), this.emitFiles(), this.formDirty(this.name);
		},
		emitFiles() {
			this.$emit("update:modelValue", [...this.filesList]);
		}
	}
}, uE = ["for"], dE = ["innerHTML"], fE = { class: "fvl-multi-file-button-wrapper" }, pE = ["textContent"], mE = { class: "fvl-multi-file-name" }, hE = ["textContent"], gE = [
	"id",
	"name",
	"placeholder",
	"required",
	"readonly",
	"accept",
	"disabled"
], _E = ["onClick"];
function vE(e, t, n, r, i, a) {
	let o = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-multi-file-wrapper"]) }, [
		n.label ? (H(), U("label", {
			key: 0,
			for: n.name,
			class: F([n.labelClass, "fvl-multi-file-label"])
		}, [W("span", { innerHTML: n.label }, null, 8, dE), V(e.$slots, "label_suffix")], 10, uE)) : q("", !0),
		W("div", fE, [
			W("button", {
				class: "fvl-multi-file-button",
				tabindex: "-1",
				type: "button",
				onClick: t[0] ||= Cl(() => {}, ["prevent"])
			}, [V(e.$slots, "button", {}, () => [W("span", { textContent: I(e.getConfig("addFilesText", "Add Files")) }, null, 8, pE)])]),
			W("span", mE, [V(e.$slots, "selected-text", { files: i.filesList }, () => [K(I(i.filesList.length) + " ", 1), W("span", { textContent: I(e.getConfig("filesSelectedText", "Files Selected")) }, null, 8, hE)])]),
			W("input", {
				id: n.id,
				ref: n.name,
				name: n.name,
				placeholder: n.placeholder,
				class: F([n.fieldClass, "fvl-multi-file"]),
				required: n.required,
				readonly: n.readonly,
				accept: n.accept,
				disabled: n.disabled || e.formIsLoading,
				multiple: "",
				type: "file",
				onChange: t[1] ||= (...e) => a.handleFileChange && a.handleFileChange(...e)
			}, null, 42, gE)
		]),
		(H(!0), U(Mo, null, Wi(i.filesList, (n, r) => (H(), U("div", {
			key: r,
			class: "fvl-multi-file-list"
		}, [K(I(n.name) + " ", 1), W("span", {
			class: "fvl-multi-file-remove",
			onClick: (e) => a.removeFile(r)
		}, [V(e.$slots, "remove", {}, () => [t[2] ||= W("svg", { viewBox: "0 0 40 40" }, [W("path", {
			stroke: "current",
			"stroke-linecap": "round",
			"stroke-width": "4",
			d: "M 10,10 L 30,30 M 30,10 L 10,30"
		})], -1)])], 8, _E)]))), 128)),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(o, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var yE = /*#__PURE__*/ Y(lE, [["render", vE]]), bE = (e) => ({
	isimage: e.type.split("/")[0] === "image",
	size: e.size,
	loaded: 0,
	percent: 0,
	status: "loading",
	src: "",
	ratioHeight: 0
}), xE = {
	components: { ValidationErrors: f_ },
	mixins: [i_, p_],
	emits: ["changed", "update:modelValue"],
	props: {
		modelValue: {
			type: Array,
			default: () => []
		},
		label: {
			type: String,
			required: !1,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			default: null
		},
		accept: {
			type: String,
			required: !1,
			default: null
		},
		placeholder: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		maxSizePerFile: {
			type: Number,
			required: !1,
			default: 20971520
		},
		maxFiles: {
			type: Number,
			required: !1,
			default: 50
		},
		maxSizeOfAllFiles: {
			type: Number,
			required: !1,
			default: null
		},
		maxPreviewImageWidth: {
			type: Number,
			required: !1,
			default: 400
		},
		maxPreviewImageHeight: {
			type: Number,
			required: !1,
			default: 200
		}
	},
	data() {
		return {
			files: Array.isArray(this.modelValue) ? [...this.modelValue] : [],
			previews: Array.isArray(this.modelValue) ? this.modelValue.map(bE) : [],
			loaded: 0
		};
	},
	watch: { modelValue(e) {
		e = Array.isArray(e) ? e : [], e.length === this.files.length && e.every((e, t) => e === this.files[t]) || (this.files = [...e], this.previews = e.map(bE));
	} },
	computed: {
		filesCount() {
			return this.files.length;
		},
		filesSizeSum() {
			let e = 0;
			return this.previews.forEach(function(t) {
				e += t.size;
			}), this.formatBytes(e);
		}
	},
	methods: {
		handleFileChange(e) {
			let t = Array.from(e.target.files || []);
			for (let e of t) {
				let t = e.type;
				t = t.split("/");
				let n = this.files.push(e) - 1;
				this.previews.push(bE(e)), this.getFileReader(t, n).readAsDataURL(e);
			}
			t.length && (this.emitFiles(), this.$emit("changed"), this.formDirty(this.name));
		},
		removeFile(e) {
			this.files.splice(e, 1), this.previews.splice(e, 1), this.emitFiles(), this.formDirty(this.name);
		},
		emitFiles() {
			this.$emit("update:modelValue", [...this.files]);
		},
		formatBytes(e, t) {
			if (e == 0) return "0 Bytes";
			var n = 1024, r = t || 2, i = [
				"Bytes",
				"KB",
				"MB",
				"GB",
				"TB",
				"PB",
				"EB",
				"ZB",
				"YB"
			], a = Math.floor(Math.log(e) / Math.log(n));
			return parseFloat((e / n ** +a).toFixed(r)) + " " + i[a];
		},
		getFileReader(e, t) {
			let n = this, r = new FileReader();
			return r.onloadstart = (r) => {
				let i = Math.round(r.loaded / r.total * 100);
				n.previews[t].isimage = e[0] == "image", n.previews[t].size = r.total, n.previews[t].loaded = r.loaded, n.previews[t].percent = i;
			}, r.onprogress = (e) => {
				let r = Math.round(e.loaded / e.total * 100);
				n.previews[t].loaded = e.loaded, n.previews[t].percent = r;
			}, r.onabort = () => {
				n.previews[t].status = "failed", alert(n.files[t].name + " could not be loaded!");
			}, r.onerror = () => {
				n.previews[t].status = "failed", alert(n.files[t].name + " could not be loaded!"), r.abort();
			}, r.onload = () => {
				n.previews[t].status = "loaded", n.previews[t].percent = 100, n.previews[t].isimage && n.getImagesize(t);
			}, r;
		},
		getImagesize(e) {
			let t = window.URL || window.webkitURL, n = this, r = new Image();
			return r.onload = function() {
				n.previews[e].src = n.resizeImageForPreview(this), n.previews[e].height = this.height, n.previews[e].width = this.width;
				let t = this.height > 60 ? this.height / this.width * 100 : 19;
				n.previews[e].ratioHeight = t < 70 ? t : 70;
			}, r.src = t.createObjectURL(this.files[e]), r.src;
		},
		resizeImageForPreview(e) {
			let t = document.createElement("canvas"), n = t.getContext("2d"), r = document.createElement("canvas"), i = r.getContext("2d"), a = 1;
			return e.width > this.maxPreviewImageWidth ? a = this.maxPreviewImageWidth / e.width : e.height > this.maxPreviewImageHeight && (a = this.maxPreviewImageHeight / e.height), r.width = e.width, r.height = e.height, i.drawImage(e, 0, 0), t.width = e.width * a, t.height = e.height * a, n.drawImage(r, 0, 0, r.width, r.height, 0, 0, t.width, t.height), t.toDataURL();
		}
	}
}, SE = ["for"], CE = ["innerHTML"], wE = ["textContent"], TE = { class: "fvl-dropzone-area-wrapper" }, EE = { class: "fvl-dropzone-area" }, DE = {
	key: 0,
	class: "fvl-dropzone-area-placeholder"
}, OE = ["textContent"], kE = {
	key: 0,
	class: "fvl-dropzone-file-preview-loader"
}, AE = { class: "fvl-dropzone-file-preview-size" }, jE = ["onClick"], ME = [
	"id",
	"name",
	"placeholder",
	"required",
	"readonly",
	"accept",
	"disabled"
];
function NE(e, t, n, r, i, a) {
	let o = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-dropzone-wrapper"]) }, [
		n.label ? (H(), U("label", {
			key: 0,
			for: n.name,
			class: F([n.labelClass, "fvl-dropzone-label"])
		}, [W("span", { innerHTML: n.label }, null, 8, CE), V(e.$slots, "label_suffix")], 10, SE)) : q("", !0),
		a.filesCount ? V(e.$slots, "summary", {
			filesCount: a.filesCount,
			filesSizeSum: a.filesSizeSum
		}, () => [
			K(I(a.filesCount) + " ", 1),
			W("span", { textContent: I(e.getConfig("filesSelectedAndSizeText", "files selected with a combined size of")) }, null, 8, wE),
			K(" " + I(a.filesSizeSum), 1)
		], void 0, 1) : q("", !0),
		W("div", TE, [W("div", EE, [a.filesCount ? (H(!0), U(Mo, { key: 1 }, Wi(i.files, (n, r) => (H(), U("div", {
			key: r,
			class: F([i.previews[r] && i.previews[r].status == "failed" ? "fvl-dropzone-file-has-error" : "", "fvl-dropzone-file-preview"])
		}, [
			i.previews[r] && i.previews[r].status == "loading" ? (H(), U("div", kE, [W("div", { style: ge("width:" + i.previews[r].percent + "%") }, null, 4)])) : q("", !0),
			i.previews[r] ? (H(), U("div", {
				key: 1,
				class: F([{ "fvl-dropzone-file-preview-name-background": i.previews[r].isimage }, "fvl-dropzone-file-preview-name"])
			}, [K(I(n.name) + " ", 1), W("div", AE, I(a.formatBytes(i.previews[r].size)), 1)], 2)) : q("", !0),
			G(Xs, { name: "fvl-dropzone-fade" }, {
				default: z(() => [i.previews[r] && i.previews[r].isimage && i.previews[r].src ? (H(), U("div", {
					key: 0,
					style: ge({
						backgroundImage: "url(" + i.previews[r].src + ")",
						paddingTop: i.previews[r].ratioHeight + "%"
					}),
					class: "fvl-dropzone-file-image"
				}, null, 4)) : q("", !0)]),
				_: 2
			}, 1024),
			W("span", {
				class: "fvl-dropzone-remove",
				onClick: (e) => a.removeFile(r)
			}, [V(e.$slots, "remove", {}, () => [t[1] ||= W("svg", { viewBox: "0 0 40 40" }, [W("path", {
				stroke: "current",
				"stroke-linecap": "round",
				"stroke-width": "4",
				d: "M 10,10 L 30,30 M 30,10 L 10,30"
			})], -1)])], 8, jE)
		], 2))), 128)) : (H(), U("span", DE, [V(e.$slots, "placeholder", {}, () => [W("span", { textContent: I(e.getConfig("dropFilesHereText", "Drop files here or click to upload.")) }, null, 8, OE)])]))]), W("input", {
			id: n.id,
			ref: n.name,
			name: n.name,
			placeholder: n.placeholder,
			class: F([n.fieldClass, "fvl-dropzone"]),
			required: n.required,
			readonly: n.readonly,
			accept: n.accept,
			disabled: n.disabled || e.formIsLoading,
			multiple: "",
			type: "file",
			onChange: t[0] ||= (...e) => a.handleFileChange && a.handleFileChange(...e)
		}, null, 42, ME)]),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(o, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var PE = /*#__PURE__*/ Y(xE, [["render", NE]]), FE = {
	mixins: [p_],
	emits: ["submit"],
	props: {
		loader: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		buttonClass: {
			type: String,
			default: null
		}
	}
}, IE = { class: "fvl-submit-wrapper" }, LE = ["disabled"], RE = { class: "fvl-submit-text" }, zE = { class: "fvl-submit-button-loader" };
function BE(e, t, n, r, i, a) {
	return H(), U("div", IE, [W("button", {
		disabled: n.disabled || e.formIsLoading,
		class: F([n.buttonClass, "fvl-submit-button"]),
		onClick: t[0] ||= (t) => e.$emit("submit")
	}, [W("span", RE, [V(e.$slots, "default")]), n.loader && e.formIsLoading ? V(e.$slots, "loader", {
		isLoading: e.formIsLoading,
		uploadPercentage: e.formUploadPercentage
	}, () => [W("div", zE, [W("div", {
		style: ge({ width: e.formUploadPercentage + "%" }),
		class: "fvl-submit-button-loader-progress"
	}, null, 4)])], void 0, 0) : q("", !0)], 10, LE)]);
}
var VE = /*#__PURE__*/ Y(FE, [["render", BE]]), HE = [
	"onChange",
	"onClose",
	"onDayCreate",
	"onDestroy",
	"onKeyDown",
	"onMonthChange",
	"onOpen",
	"onParseConfig",
	"onReady",
	"onValueUpdate",
	"onYearChange",
	"onPreCalendarPosition"
], UE = {
	_disable: [],
	allowInput: !1,
	allowInvalidPreload: !1,
	altFormat: "F j, Y",
	altInput: !1,
	altInputClass: "form-control input",
	animate: typeof window == "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
	ariaDateFormat: "F j, Y",
	autoFillDefaultTime: !0,
	clickOpens: !0,
	closeOnSelect: !0,
	conjunction: ", ",
	dateFormat: "Y-m-d",
	defaultHour: 12,
	defaultMinute: 0,
	defaultSeconds: 0,
	disable: [],
	disableMobile: !1,
	enableSeconds: !1,
	enableTime: !1,
	errorHandler: function(e) {
		return typeof console < "u" && console.warn(e);
	},
	getWeek: function(e) {
		var t = new Date(e.getTime());
		t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
		var n = new Date(t.getFullYear(), 0, 4);
		return 1 + Math.round(((t.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7);
	},
	hourIncrement: 1,
	ignoredFocusElements: [],
	inline: !1,
	locale: "default",
	minuteIncrement: 5,
	mode: "single",
	monthSelectorType: "dropdown",
	nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
	noCalendar: !1,
	now: /* @__PURE__ */ new Date(),
	onChange: [],
	onClose: [],
	onDayCreate: [],
	onDestroy: [],
	onKeyDown: [],
	onMonthChange: [],
	onOpen: [],
	onParseConfig: [],
	onReady: [],
	onValueUpdate: [],
	onYearChange: [],
	onPreCalendarPosition: [],
	plugins: [],
	position: "auto",
	positionElement: void 0,
	prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
	shorthandCurrentMonth: !1,
	showMonths: 1,
	static: !1,
	time_24hr: !1,
	weekNumbers: !1,
	wrap: !1
}, WE = {
	weekdays: {
		shorthand: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		],
		longhand: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		]
	},
	months: {
		shorthand: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		],
		longhand: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		]
	},
	daysInMonth: [
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	],
	firstDayOfWeek: 0,
	ordinal: function(e) {
		var t = e % 100;
		if (t > 3 && t < 21) return "th";
		switch (t % 10) {
			case 1: return "st";
			case 2: return "nd";
			case 3: return "rd";
			default: return "th";
		}
	},
	rangeSeparator: " to ",
	weekAbbreviation: "Wk",
	scrollTitle: "Scroll to increment",
	toggleTitle: "Click to toggle",
	amPM: ["AM", "PM"],
	yearAriaLabel: "Year",
	monthAriaLabel: "Month",
	hourAriaLabel: "Hour",
	minuteAriaLabel: "Minute",
	time_24hr: !1
}, GE = function(e, t) {
	return t === void 0 && (t = 2), ("000" + e).slice(t * -1);
}, KE = function(e) {
	return +(e === !0);
};
function qE(e, t) {
	var n;
	return function() {
		var r = this, i = arguments;
		clearTimeout(n), n = setTimeout(function() {
			return e.apply(r, i);
		}, t);
	};
}
var JE = function(e) {
	return e instanceof Array ? e : [e];
};
//#endregion
//#region node_modules/flatpickr/dist/esm/utils/dom.js
function YE(e, t, n) {
	if (n === !0) return e.classList.add(t);
	e.classList.remove(t);
}
function XE(e, t, n) {
	var r = window.document.createElement(e);
	return t ||= "", n ||= "", r.className = t, n !== void 0 && (r.textContent = n), r;
}
function ZE(e) {
	for (; e.firstChild;) e.removeChild(e.firstChild);
}
function QE(e, t) {
	if (t(e)) return e;
	if (e.parentNode) return QE(e.parentNode, t);
}
function $E(e, t) {
	var n = XE("div", "numInputWrapper"), r = XE("input", "numInput " + e), i = XE("span", "arrowUp"), a = XE("span", "arrowDown");
	if (navigator.userAgent.indexOf("MSIE 9.0") === -1 ? r.type = "number" : (r.type = "text", r.pattern = "\\d*"), t !== void 0) for (var o in t) r.setAttribute(o, t[o]);
	return n.appendChild(r), n.appendChild(i), n.appendChild(a), n;
}
function eD(e) {
	try {
		return typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
	} catch {
		return e.target;
	}
}
//#endregion
//#region node_modules/flatpickr/dist/esm/utils/formatting.js
var tD = function() {}, nD = function(e, t, n) {
	return n.months[t ? "shorthand" : "longhand"][e];
}, rD = {
	D: tD,
	F: function(e, t, n) {
		e.setMonth(n.months.longhand.indexOf(t));
	},
	G: function(e, t) {
		e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(t));
	},
	H: function(e, t) {
		e.setHours(parseFloat(t));
	},
	J: function(e, t) {
		e.setDate(parseFloat(t));
	},
	K: function(e, t, n) {
		e.setHours(e.getHours() % 12 + 12 * KE(new RegExp(n.amPM[1], "i").test(t)));
	},
	M: function(e, t, n) {
		e.setMonth(n.months.shorthand.indexOf(t));
	},
	S: function(e, t) {
		e.setSeconds(parseFloat(t));
	},
	U: function(e, t) {
		return /* @__PURE__ */ new Date(parseFloat(t) * 1e3);
	},
	W: function(e, t, n) {
		var r = parseInt(t), i = new Date(e.getFullYear(), 0, 2 + (r - 1) * 7, 0, 0, 0, 0);
		return i.setDate(i.getDate() - i.getDay() + n.firstDayOfWeek), i;
	},
	Y: function(e, t) {
		e.setFullYear(parseFloat(t));
	},
	Z: function(e, t) {
		return new Date(t);
	},
	d: function(e, t) {
		e.setDate(parseFloat(t));
	},
	h: function(e, t) {
		e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(t));
	},
	i: function(e, t) {
		e.setMinutes(parseFloat(t));
	},
	j: function(e, t) {
		e.setDate(parseFloat(t));
	},
	l: tD,
	m: function(e, t) {
		e.setMonth(parseFloat(t) - 1);
	},
	n: function(e, t) {
		e.setMonth(parseFloat(t) - 1);
	},
	s: function(e, t) {
		e.setSeconds(parseFloat(t));
	},
	u: function(e, t) {
		return new Date(parseFloat(t));
	},
	w: tD,
	y: function(e, t) {
		e.setFullYear(2e3 + parseFloat(t));
	}
}, iD = {
	D: "",
	F: "",
	G: "(\\d\\d|\\d)",
	H: "(\\d\\d|\\d)",
	J: "(\\d\\d|\\d)\\w+",
	K: "",
	M: "",
	S: "(\\d\\d|\\d)",
	U: "(.+)",
	W: "(\\d\\d|\\d)",
	Y: "(\\d{4})",
	Z: "(.+)",
	d: "(\\d\\d|\\d)",
	h: "(\\d\\d|\\d)",
	i: "(\\d\\d|\\d)",
	j: "(\\d\\d|\\d)",
	l: "",
	m: "(\\d\\d|\\d)",
	n: "(\\d\\d|\\d)",
	s: "(\\d\\d|\\d)",
	u: "(.+)",
	w: "(\\d\\d|\\d)",
	y: "(\\d{2})"
}, aD = {
	Z: function(e) {
		return e.toISOString();
	},
	D: function(e, t, n) {
		return t.weekdays.shorthand[aD.w(e, t, n)];
	},
	F: function(e, t, n) {
		return nD(aD.n(e, t, n) - 1, !1, t);
	},
	G: function(e, t, n) {
		return GE(aD.h(e, t, n));
	},
	H: function(e) {
		return GE(e.getHours());
	},
	J: function(e, t) {
		return t.ordinal === void 0 ? e.getDate() : e.getDate() + t.ordinal(e.getDate());
	},
	K: function(e, t) {
		return t.amPM[KE(e.getHours() > 11)];
	},
	M: function(e, t) {
		return nD(e.getMonth(), !0, t);
	},
	S: function(e) {
		return GE(e.getSeconds());
	},
	U: function(e) {
		return e.getTime() / 1e3;
	},
	W: function(e, t, n) {
		return n.getWeek(e);
	},
	Y: function(e) {
		return GE(e.getFullYear(), 4);
	},
	d: function(e) {
		return GE(e.getDate());
	},
	h: function(e) {
		return e.getHours() % 12 ? e.getHours() % 12 : 12;
	},
	i: function(e) {
		return GE(e.getMinutes());
	},
	j: function(e) {
		return e.getDate();
	},
	l: function(e, t) {
		return t.weekdays.longhand[e.getDay()];
	},
	m: function(e) {
		return GE(e.getMonth() + 1);
	},
	n: function(e) {
		return e.getMonth() + 1;
	},
	s: function(e) {
		return e.getSeconds();
	},
	u: function(e) {
		return e.getTime();
	},
	w: function(e) {
		return e.getDay();
	},
	y: function(e) {
		return String(e.getFullYear()).substring(2);
	}
}, oD = function(e) {
	var t = e.config, n = t === void 0 ? UE : t, r = e.l10n, i = r === void 0 ? WE : r, a = e.isMobile, o = a !== void 0 && a;
	return function(e, t, r) {
		var a = r || i;
		return n.formatDate !== void 0 && !o ? n.formatDate(e, t, a) : t.split("").map(function(t, r, i) {
			return aD[t] && i[r - 1] !== "\\" ? aD[t](e, a, n) : t === "\\" ? "" : t;
		}).join("");
	};
}, sD = function(e) {
	var t = e.config, n = t === void 0 ? UE : t, r = e.l10n, i = r === void 0 ? WE : r;
	return function(e, t, r, a) {
		if (!(e !== 0 && !e)) {
			var o = a || i, s, c = e;
			if (e instanceof Date) s = new Date(e.getTime());
			else if (typeof e != "string" && e.toFixed !== void 0) s = new Date(e);
			else if (typeof e == "string") {
				var l = t || (n || UE).dateFormat, u = String(e).trim();
				if (u === "today") s = /* @__PURE__ */ new Date(), r = !0;
				else if (n && n.parseDate) s = n.parseDate(e, l);
				else if (/Z$/.test(u) || /GMT$/.test(u)) s = new Date(e);
				else {
					for (var d = void 0, f = [], p = 0, m = 0, h = ""; p < l.length; p++) {
						var g = l[p], _ = g === "\\", v = l[p - 1] === "\\" || _;
						if (iD[g] && !v) {
							h += iD[g];
							var y = new RegExp(h).exec(e);
							y && (d = !0) && f[g === "Y" ? "unshift" : "push"]({
								fn: rD[g],
								val: y[++m]
							});
						} else _ || (h += ".");
					}
					s = !n || !n.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)), f.forEach(function(e) {
						var t = e.fn, n = e.val;
						return s = t(s, n, o) || s;
					}), s = d ? s : void 0;
				}
			}
			if (!(s instanceof Date && !isNaN(s.getTime()))) {
				n.errorHandler(/* @__PURE__ */ Error("Invalid date provided: " + c));
				return;
			}
			return r === !0 && s.setHours(0, 0, 0, 0), s;
		}
	};
};
function cD(e, t, n) {
	return n === void 0 && (n = !0), n === !1 ? e.getTime() - t.getTime() : new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0);
}
var lD = function(e, t, n) {
	return e > Math.min(t, n) && e < Math.max(t, n);
}, uD = function(e, t, n) {
	return e * 3600 + t * 60 + n;
}, dD = function(e) {
	var t = Math.floor(e / 3600), n = (e - t * 3600) / 60;
	return [
		t,
		n,
		e - t * 3600 - n * 60
	];
}, fD = { DAY: 864e5 };
function pD(e) {
	var t = e.defaultHour, n = e.defaultMinute, r = e.defaultSeconds;
	if (e.minDate !== void 0) {
		var i = e.minDate.getHours(), a = e.minDate.getMinutes(), o = e.minDate.getSeconds();
		t < i && (t = i), t === i && n < a && (n = a), t === i && n === a && r < o && (r = e.minDate.getSeconds());
	}
	if (e.maxDate !== void 0) {
		var s = e.maxDate.getHours(), c = e.maxDate.getMinutes();
		t = Math.min(t, s), t === s && (n = Math.min(c, n)), t === s && n === c && (r = e.maxDate.getSeconds());
	}
	return {
		hours: t,
		minutes: n,
		seconds: r
	};
}
//#endregion
//#region node_modules/flatpickr/dist/esm/utils/polyfills.js
typeof Object.assign != "function" && (Object.assign = function(e) {
	var t = [...arguments].slice(1);
	if (!e) throw TypeError("Cannot convert undefined or null to object");
	for (var n = function(t) {
		t && Object.keys(t).forEach(function(n) {
			return e[n] = t[n];
		});
	}, r = 0, i = t; r < i.length; r++) {
		var a = i[r];
		n(a);
	}
	return e;
});
//#endregion
//#region node_modules/flatpickr/dist/esm/index.js
var mD = function() {
	return mD = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, mD.apply(this, arguments);
}, hD = function() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	for (var r = Array(e), i = 0, t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}, gD = 300;
function _D(e, t) {
	var n = {
		config: mD(mD({}, UE), yD.defaultConfig),
		l10n: WE
	};
	n.parseDate = sD({
		config: n.config,
		l10n: n.l10n
	}), n._handlers = [], n.pluginElements = [], n.loadedPlugins = [], n._bind = h, n._setHoursFromDate = f, n._positionCalendar = be, n.changeMonth = re, n.changeYear = ce, n.clear = ie, n.close = ae, n.onMouseOver = pe, n._createElement = XE, n.createDay = S, n.destroy = oe, n.isEnabled = le, n.jumpToDate = v, n.updateValue = Be, n.open = he, n.redraw = Se, n.set = Ee, n.setDate = Oe, n.toggle = I;
	function r() {
		n.utils = { getDaysInMonth: function(e, t) {
			return e === void 0 && (e = n.currentMonth), t === void 0 && (t = n.currentYear), e === 1 && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : n.l10n.daysInMonth[e];
		} };
	}
	function i() {
		n.element = n.input = e, n.isOpen = !1, _e(), ye(), je(), Ae(), r(), n.isMobile || x(), _(), (n.selectedDates.length || n.config.noCalendar) && (n.config.enableTime && f(n.config.noCalendar ? n.latestSelectedDateObj : void 0), Be(!1)), s();
		var t = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		!n.isMobile && t && be(), Pe("onReady");
	}
	function a() {
		return (n.calendarContainer?.getRootNode()).activeElement || document.activeElement;
	}
	function o(e) {
		return e.bind(n);
	}
	function s() {
		var e = n.config;
		(e.weekNumbers !== !1 || e.showMonths !== 1) && e.noCalendar !== !0 && window.requestAnimationFrame(function() {
			if (n.calendarContainer !== void 0 && (n.calendarContainer.style.visibility = "hidden", n.calendarContainer.style.display = "block"), n.daysContainer !== void 0) {
				var t = (n.days.offsetWidth + 1) * e.showMonths;
				n.daysContainer.style.width = t + "px", n.calendarContainer.style.width = t + (n.weekWrapper === void 0 ? 0 : n.weekWrapper.offsetWidth) + "px", n.calendarContainer.style.removeProperty("visibility"), n.calendarContainer.style.removeProperty("display");
			}
		});
	}
	function c(e) {
		if (n.selectedDates.length === 0) {
			var t = n.config.minDate === void 0 || cD(/* @__PURE__ */ new Date(), n.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(n.config.minDate.getTime()), r = pD(n.config);
			t.setHours(r.hours, r.minutes, r.seconds, t.getMilliseconds()), n.selectedDates = [t], n.latestSelectedDateObj = t;
		}
		e !== void 0 && e.type !== "blur" && He(e);
		var i = n._input.value;
		d(), Be(), n._input.value !== i && n._debouncedChange();
	}
	function l(e, t) {
		return e % 12 + 12 * KE(t === n.l10n.amPM[1]);
	}
	function u(e) {
		switch (e % 24) {
			case 0:
			case 12: return 12;
			default: return e % 12;
		}
	}
	function d() {
		if (n.hourElement !== void 0 && n.minuteElement !== void 0) {
			var e = (parseInt(n.hourElement.value.slice(-2), 10) || 0) % 24, t = (parseInt(n.minuteElement.value, 10) || 0) % 60, r = n.secondElement === void 0 ? 0 : (parseInt(n.secondElement.value, 10) || 0) % 60;
			n.amPM !== void 0 && (e = l(e, n.amPM.textContent));
			var i = n.config.minTime !== void 0 || n.config.minDate && n.minDateHasTime && n.latestSelectedDateObj && cD(n.latestSelectedDateObj, n.config.minDate, !0) === 0, a = n.config.maxTime !== void 0 || n.config.maxDate && n.maxDateHasTime && n.latestSelectedDateObj && cD(n.latestSelectedDateObj, n.config.maxDate, !0) === 0;
			if (n.config.maxTime !== void 0 && n.config.minTime !== void 0 && n.config.minTime > n.config.maxTime) {
				var o = uD(n.config.minTime.getHours(), n.config.minTime.getMinutes(), n.config.minTime.getSeconds()), s = uD(n.config.maxTime.getHours(), n.config.maxTime.getMinutes(), n.config.maxTime.getSeconds()), c = uD(e, t, r);
				if (c > s && c < o) {
					var u = dD(o);
					e = u[0], t = u[1], r = u[2];
				}
			} else {
				if (a) {
					var d = n.config.maxTime === void 0 ? n.config.maxDate : n.config.maxTime;
					e = Math.min(e, d.getHours()), e === d.getHours() && (t = Math.min(t, d.getMinutes())), t === d.getMinutes() && (r = Math.min(r, d.getSeconds()));
				}
				if (i) {
					var f = n.config.minTime === void 0 ? n.config.minDate : n.config.minTime;
					e = Math.max(e, f.getHours()), e === f.getHours() && t < f.getMinutes() && (t = f.getMinutes()), t === f.getMinutes() && (r = Math.max(r, f.getSeconds()));
				}
			}
			p(e, t, r);
		}
	}
	function f(e) {
		var t = e || n.latestSelectedDateObj;
		t && t instanceof Date && p(t.getHours(), t.getMinutes(), t.getSeconds());
	}
	function p(e, t, r) {
		n.latestSelectedDateObj !== void 0 && n.latestSelectedDateObj.setHours(e % 24, t, r || 0, 0), !(!n.hourElement || !n.minuteElement || n.isMobile) && (n.hourElement.value = GE(n.config.time_24hr ? e : (12 + e) % 12 + 12 * KE(e % 12 == 0)), n.minuteElement.value = GE(t), n.amPM !== void 0 && (n.amPM.textContent = n.l10n.amPM[KE(e >= 12)]), n.secondElement !== void 0 && (n.secondElement.value = GE(r)));
	}
	function m(e) {
		var t = eD(e), n = parseInt(t.value) + (e.delta || 0);
		(n / 1e3 > 1 || e.key === "Enter" && !/[^\d]/.test(n.toString())) && ce(n);
	}
	function h(e, t, r, i) {
		if (t instanceof Array) return t.forEach(function(t) {
			return h(e, t, r, i);
		});
		if (e instanceof Array) return e.forEach(function(e) {
			return h(e, t, r, i);
		});
		e.addEventListener(t, r, i), n._handlers.push({ remove: function() {
			return e.removeEventListener(t, r, i);
		} });
	}
	function g() {
		Pe("onChange");
	}
	function _() {
		if (n.config.wrap && [
			"open",
			"close",
			"toggle",
			"clear"
		].forEach(function(e) {
			Array.prototype.forEach.call(n.element.querySelectorAll("[data-" + e + "]"), function(t) {
				return h(t, "click", n[e]);
			});
		}), n.isMobile) {
			Ne();
			return;
		}
		var e = qE(me, 50);
		n._debouncedChange = qE(g, gD), n.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && h(n.daysContainer, "mouseover", function(e) {
			n.config.mode === "range" && pe(eD(e));
		}), h(n._input, "keydown", fe), n.calendarContainer !== void 0 && h(n.calendarContainer, "keydown", fe), !n.config.inline && !n.config.static && h(window, "resize", e), window.ontouchstart === void 0 ? h(window.document, "mousedown", se) : h(window.document, "touchstart", se), h(window.document, "focus", se, { capture: !0 }), n.config.clickOpens === !0 && (h(n._input, "focus", n.open), h(n._input, "click", n.open)), n.daysContainer !== void 0 && (h(n.monthNav, "click", Ve), h(n.monthNav, ["keyup", "increment"], m), h(n.daysContainer, "click", we)), n.timeContainer !== void 0 && n.minuteElement !== void 0 && n.hourElement !== void 0 && (h(n.timeContainer, ["increment"], c), h(n.timeContainer, "blur", c, { capture: !0 }), h(n.timeContainer, "click", y), h([n.hourElement, n.minuteElement], ["focus", "click"], function(e) {
			return eD(e).select();
		}), n.secondElement !== void 0 && h(n.secondElement, "focus", function() {
			return n.secondElement && n.secondElement.select();
		}), n.amPM !== void 0 && h(n.amPM, "click", function(e) {
			c(e);
		})), n.config.allowInput && h(n._input, "blur", de);
	}
	function v(e, t) {
		var r = e === void 0 ? n.latestSelectedDateObj || (n.config.minDate && n.config.minDate > n.now ? n.config.minDate : n.config.maxDate && n.config.maxDate < n.now ? n.config.maxDate : n.now) : n.parseDate(e), i = n.currentYear, a = n.currentMonth;
		try {
			r !== void 0 && (n.currentYear = r.getFullYear(), n.currentMonth = r.getMonth());
		} catch (e) {
			e.message = "Invalid date supplied: " + r, n.config.errorHandler(e);
		}
		t && n.currentYear !== i && (Pe("onYearChange"), k()), t && (n.currentYear !== i || n.currentMonth !== a) && Pe("onMonthChange"), n.redraw();
	}
	function y(e) {
		var t = eD(e);
		~t.className.indexOf("arrow") && b(e, t.classList.contains("arrowUp") ? 1 : -1);
	}
	function b(e, t, n) {
		var r = e && eD(e), i = n || r && r.parentNode && r.parentNode.firstChild, a = Fe("increment");
		a.delta = t, i && i.dispatchEvent(a);
	}
	function x() {
		var e = window.document.createDocumentFragment();
		if (n.calendarContainer = XE("div", "flatpickr-calendar"), n.calendarContainer.tabIndex = -1, !n.config.noCalendar) {
			if (e.appendChild(M()), n.innerContainer = XE("div", "flatpickr-innerContainer"), n.config.weekNumbers) {
				var t = ne(), r = t.weekWrapper, i = t.weekNumbers;
				n.innerContainer.appendChild(r), n.weekNumbers = i, n.weekWrapper = r;
			}
			n.rContainer = XE("div", "flatpickr-rContainer"), n.rContainer.appendChild(N()), n.daysContainer || (n.daysContainer = XE("div", "flatpickr-days"), n.daysContainer.tabIndex = -1), O(), n.rContainer.appendChild(n.daysContainer), n.innerContainer.appendChild(n.rContainer), e.appendChild(n.innerContainer);
		}
		n.config.enableTime && e.appendChild(ee()), YE(n.calendarContainer, "rangeMode", n.config.mode === "range"), YE(n.calendarContainer, "animate", n.config.animate === !0), YE(n.calendarContainer, "multiMonth", n.config.showMonths > 1), n.calendarContainer.appendChild(e);
		var a = n.config.appendTo !== void 0 && n.config.appendTo.nodeType !== void 0;
		if ((n.config.inline || n.config.static) && (n.calendarContainer.classList.add(n.config.inline ? "inline" : "static"), n.config.inline && (!a && n.element.parentNode ? n.element.parentNode.insertBefore(n.calendarContainer, n._input.nextSibling) : n.config.appendTo !== void 0 && n.config.appendTo.appendChild(n.calendarContainer)), n.config.static)) {
			var o = XE("div", "flatpickr-wrapper");
			n.element.parentNode && n.element.parentNode.insertBefore(o, n.element), o.appendChild(n.element), n.altInput && o.appendChild(n.altInput), o.appendChild(n.calendarContainer);
		}
		!n.config.static && !n.config.inline && (n.config.appendTo === void 0 ? window.document.body : n.config.appendTo).appendChild(n.calendarContainer);
	}
	function S(e, t, r, i) {
		var a = le(t, !0), o = XE("span", e, t.getDate().toString());
		return o.dateObj = t, o.$i = i, o.setAttribute("aria-label", n.formatDate(t, n.config.ariaDateFormat)), e.indexOf("hidden") === -1 && cD(t, n.now) === 0 && (n.todayDateElem = o, o.classList.add("today"), o.setAttribute("aria-current", "date")), a ? (o.tabIndex = -1, Ie(t) && (o.classList.add("selected"), n.selectedDateElem = o, n.config.mode === "range" && (YE(o, "startRange", n.selectedDates[0] && cD(t, n.selectedDates[0], !0) === 0), YE(o, "endRange", n.selectedDates[1] && cD(t, n.selectedDates[1], !0) === 0), e === "nextMonthDay" && o.classList.add("inRange")))) : o.classList.add("flatpickr-disabled"), n.config.mode === "range" && Le(t) && !Ie(t) && o.classList.add("inRange"), n.weekNumbers && n.config.showMonths === 1 && e !== "prevMonthDay" && i % 7 == 6 && n.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + n.config.getWeek(t) + "</span>"), Pe("onDayCreate", o), o;
	}
	function C(e) {
		e.focus(), n.config.mode === "range" && pe(e);
	}
	function w(e) {
		for (var t = e > 0 ? 0 : n.config.showMonths - 1, r = e > 0 ? n.config.showMonths : -1, i = t; i != r; i += e) for (var a = n.daysContainer.children[i], o = e > 0 ? 0 : a.children.length - 1, s = e > 0 ? a.children.length : -1, c = o; c != s; c += e) {
			var l = a.children[c];
			if (l.className.indexOf("hidden") === -1 && le(l.dateObj)) return l;
		}
	}
	function T(e, t) {
		for (var r = e.className.indexOf("Month") === -1 ? e.dateObj.getMonth() : n.currentMonth, i = t > 0 ? n.config.showMonths : -1, a = t > 0 ? 1 : -1, o = r - n.currentMonth; o != i; o += a) for (var s = n.daysContainer.children[o], c = r - n.currentMonth === o ? e.$i + t : t < 0 ? s.children.length - 1 : 0, l = s.children.length, u = c; u >= 0 && u < l && u != (t > 0 ? l : -1); u += a) {
			var d = s.children[u];
			if (d.className.indexOf("hidden") === -1 && le(d.dateObj) && Math.abs(e.$i - u) >= Math.abs(t)) return C(d);
		}
		n.changeMonth(a), E(w(a), 0);
	}
	function E(e, t) {
		var r = a(), i = ue(r || document.body), o = e === void 0 ? i ? r : n.selectedDateElem !== void 0 && ue(n.selectedDateElem) ? n.selectedDateElem : n.todayDateElem !== void 0 && ue(n.todayDateElem) ? n.todayDateElem : w(t > 0 ? 1 : -1) : e;
		o === void 0 ? n._input.focus() : i ? T(o, t) : C(o);
	}
	function D(e, t) {
		for (var r = (new Date(e, t, 1).getDay() - n.l10n.firstDayOfWeek + 7) % 7, i = n.utils.getDaysInMonth((t - 1 + 12) % 12, e), a = n.utils.getDaysInMonth(t, e), o = window.document.createDocumentFragment(), s = n.config.showMonths > 1, c = s ? "prevMonthDay hidden" : "prevMonthDay", l = s ? "nextMonthDay hidden" : "nextMonthDay", u = i + 1 - r, d = 0; u <= i; u++, d++) o.appendChild(S("flatpickr-day " + c, new Date(e, t - 1, u), u, d));
		for (u = 1; u <= a; u++, d++) o.appendChild(S("flatpickr-day", new Date(e, t, u), u, d));
		for (var f = a + 1; f <= 42 - r && (n.config.showMonths === 1 || d % 7 != 0); f++, d++) o.appendChild(S("flatpickr-day " + l, new Date(e, t + 1, f % a), f, d));
		var p = XE("div", "dayContainer");
		return p.appendChild(o), p;
	}
	function O() {
		if (n.daysContainer !== void 0) {
			ZE(n.daysContainer), n.weekNumbers && ZE(n.weekNumbers);
			for (var e = document.createDocumentFragment(), t = 0; t < n.config.showMonths; t++) {
				var r = new Date(n.currentYear, n.currentMonth, 1);
				r.setMonth(n.currentMonth + t), e.appendChild(D(r.getFullYear(), r.getMonth()));
			}
			n.daysContainer.appendChild(e), n.days = n.daysContainer.firstChild, n.config.mode === "range" && n.selectedDates.length === 1 && pe();
		}
	}
	function k() {
		if (!(n.config.showMonths > 1 || n.config.monthSelectorType !== "dropdown")) {
			var e = function(e) {
				return n.config.minDate !== void 0 && n.currentYear === n.config.minDate.getFullYear() && e < n.config.minDate.getMonth() ? !1 : !(n.config.maxDate !== void 0 && n.currentYear === n.config.maxDate.getFullYear() && e > n.config.maxDate.getMonth());
			};
			n.monthsDropdownContainer.tabIndex = -1, n.monthsDropdownContainer.innerHTML = "";
			for (var t = 0; t < 12; t++) if (e(t)) {
				var r = XE("option", "flatpickr-monthDropdown-month");
				r.value = new Date(n.currentYear, t).getMonth().toString(), r.textContent = nD(t, n.config.shorthandCurrentMonth, n.l10n), r.tabIndex = -1, n.currentMonth === t && (r.selected = !0), n.monthsDropdownContainer.appendChild(r);
			}
		}
	}
	function A() {
		var e = XE("div", "flatpickr-month"), t = window.document.createDocumentFragment(), r;
		n.config.showMonths > 1 || n.config.monthSelectorType === "static" ? r = XE("span", "cur-month") : (n.monthsDropdownContainer = XE("select", "flatpickr-monthDropdown-months"), n.monthsDropdownContainer.setAttribute("aria-label", n.l10n.monthAriaLabel), h(n.monthsDropdownContainer, "change", function(e) {
			var t = eD(e), r = parseInt(t.value, 10);
			n.changeMonth(r - n.currentMonth), Pe("onMonthChange");
		}), k(), r = n.monthsDropdownContainer);
		var i = $E("cur-year", { tabindex: "-1" }), a = i.getElementsByTagName("input")[0];
		a.setAttribute("aria-label", n.l10n.yearAriaLabel), n.config.minDate && a.setAttribute("min", n.config.minDate.getFullYear().toString()), n.config.maxDate && (a.setAttribute("max", n.config.maxDate.getFullYear().toString()), a.disabled = !!n.config.minDate && n.config.minDate.getFullYear() === n.config.maxDate.getFullYear());
		var o = XE("div", "flatpickr-current-month");
		return o.appendChild(r), o.appendChild(i), t.appendChild(o), e.appendChild(t), {
			container: e,
			yearElement: a,
			monthElement: r
		};
	}
	function j() {
		ZE(n.monthNav), n.monthNav.appendChild(n.prevMonthNav), n.config.showMonths && (n.yearElements = [], n.monthElements = []);
		for (var e = n.config.showMonths; e--;) {
			var t = A();
			n.yearElements.push(t.yearElement), n.monthElements.push(t.monthElement), n.monthNav.appendChild(t.container);
		}
		n.monthNav.appendChild(n.nextMonthNav);
	}
	function M() {
		return n.monthNav = XE("div", "flatpickr-months"), n.yearElements = [], n.monthElements = [], n.prevMonthNav = XE("span", "flatpickr-prev-month"), n.prevMonthNav.innerHTML = n.config.prevArrow, n.nextMonthNav = XE("span", "flatpickr-next-month"), n.nextMonthNav.innerHTML = n.config.nextArrow, j(), Object.defineProperty(n, "_hidePrevMonthArrow", {
			get: function() {
				return n.__hidePrevMonthArrow;
			},
			set: function(e) {
				n.__hidePrevMonthArrow !== e && (YE(n.prevMonthNav, "flatpickr-disabled", e), n.__hidePrevMonthArrow = e);
			}
		}), Object.defineProperty(n, "_hideNextMonthArrow", {
			get: function() {
				return n.__hideNextMonthArrow;
			},
			set: function(e) {
				n.__hideNextMonthArrow !== e && (YE(n.nextMonthNav, "flatpickr-disabled", e), n.__hideNextMonthArrow = e);
			}
		}), n.currentYearElement = n.yearElements[0], Re(), n.monthNav;
	}
	function ee() {
		n.calendarContainer.classList.add("hasTime"), n.config.noCalendar && n.calendarContainer.classList.add("noCalendar");
		var e = pD(n.config);
		n.timeContainer = XE("div", "flatpickr-time"), n.timeContainer.tabIndex = -1;
		var t = XE("span", "flatpickr-time-separator", ":"), r = $E("flatpickr-hour", { "aria-label": n.l10n.hourAriaLabel });
		n.hourElement = r.getElementsByTagName("input")[0];
		var i = $E("flatpickr-minute", { "aria-label": n.l10n.minuteAriaLabel });
		if (n.minuteElement = i.getElementsByTagName("input")[0], n.hourElement.tabIndex = n.minuteElement.tabIndex = -1, n.hourElement.value = GE(n.latestSelectedDateObj ? n.latestSelectedDateObj.getHours() : n.config.time_24hr ? e.hours : u(e.hours)), n.minuteElement.value = GE(n.latestSelectedDateObj ? n.latestSelectedDateObj.getMinutes() : e.minutes), n.hourElement.setAttribute("step", n.config.hourIncrement.toString()), n.minuteElement.setAttribute("step", n.config.minuteIncrement.toString()), n.hourElement.setAttribute("min", n.config.time_24hr ? "0" : "1"), n.hourElement.setAttribute("max", n.config.time_24hr ? "23" : "12"), n.hourElement.setAttribute("maxlength", "2"), n.minuteElement.setAttribute("min", "0"), n.minuteElement.setAttribute("max", "59"), n.minuteElement.setAttribute("maxlength", "2"), n.timeContainer.appendChild(r), n.timeContainer.appendChild(t), n.timeContainer.appendChild(i), n.config.time_24hr && n.timeContainer.classList.add("time24hr"), n.config.enableSeconds) {
			n.timeContainer.classList.add("hasSeconds");
			var a = $E("flatpickr-second");
			n.secondElement = a.getElementsByTagName("input")[0], n.secondElement.value = GE(n.latestSelectedDateObj ? n.latestSelectedDateObj.getSeconds() : e.seconds), n.secondElement.setAttribute("step", n.minuteElement.getAttribute("step")), n.secondElement.setAttribute("min", "0"), n.secondElement.setAttribute("max", "59"), n.secondElement.setAttribute("maxlength", "2"), n.timeContainer.appendChild(XE("span", "flatpickr-time-separator", ":")), n.timeContainer.appendChild(a);
		}
		return n.config.time_24hr || (n.amPM = XE("span", "flatpickr-am-pm", n.l10n.amPM[KE((n.latestSelectedDateObj ? n.hourElement.value : n.config.defaultHour) > 11)]), n.amPM.title = n.l10n.toggleTitle, n.amPM.tabIndex = -1, n.timeContainer.appendChild(n.amPM)), n.timeContainer;
	}
	function N() {
		n.weekdayContainer ? ZE(n.weekdayContainer) : n.weekdayContainer = XE("div", "flatpickr-weekdays");
		for (var e = n.config.showMonths; e--;) {
			var t = XE("div", "flatpickr-weekdaycontainer");
			n.weekdayContainer.appendChild(t);
		}
		return te(), n.weekdayContainer;
	}
	function te() {
		if (n.weekdayContainer) {
			var e = n.l10n.firstDayOfWeek, t = hD(n.l10n.weekdays.shorthand);
			e > 0 && e < t.length && (t = hD(t.splice(e, t.length), t.splice(0, e)));
			for (var r = n.config.showMonths; r--;) n.weekdayContainer.children[r].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + t.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
		}
	}
	function ne() {
		n.calendarContainer.classList.add("hasWeeks");
		var e = XE("div", "flatpickr-weekwrapper");
		e.appendChild(XE("span", "flatpickr-weekday", n.l10n.weekAbbreviation));
		var t = XE("div", "flatpickr-weeks");
		return e.appendChild(t), {
			weekWrapper: e,
			weekNumbers: t
		};
	}
	function re(e, t) {
		t === void 0 && (t = !0);
		var r = t ? e : e - n.currentMonth;
		r < 0 && n._hidePrevMonthArrow === !0 || r > 0 && n._hideNextMonthArrow === !0 || (n.currentMonth += r, (n.currentMonth < 0 || n.currentMonth > 11) && (n.currentYear += n.currentMonth > 11 ? 1 : -1, n.currentMonth = (n.currentMonth + 12) % 12, Pe("onYearChange"), k()), O(), Pe("onMonthChange"), Re());
	}
	function ie(e, t) {
		if (e === void 0 && (e = !0), t === void 0 && (t = !0), n.input.value = "", n.altInput !== void 0 && (n.altInput.value = ""), n.mobileInput !== void 0 && (n.mobileInput.value = ""), n.selectedDates = [], n.latestSelectedDateObj = void 0, t === !0 && (n.currentYear = n._initialDate.getFullYear(), n.currentMonth = n._initialDate.getMonth()), n.config.enableTime === !0) {
			var r = pD(n.config), i = r.hours, a = r.minutes, o = r.seconds;
			p(i, a, o);
		}
		n.redraw(), e && Pe("onChange");
	}
	function ae() {
		n.isOpen = !1, n.isMobile || (n.calendarContainer !== void 0 && n.calendarContainer.classList.remove("open"), n._input !== void 0 && n._input.classList.remove("active")), Pe("onClose");
	}
	function oe() {
		n.config !== void 0 && Pe("onDestroy");
		for (var e = n._handlers.length; e--;) n._handlers[e].remove();
		if (n._handlers = [], n.mobileInput) n.mobileInput.parentNode && n.mobileInput.parentNode.removeChild(n.mobileInput), n.mobileInput = void 0;
		else if (n.calendarContainer && n.calendarContainer.parentNode) {
			if (n.config.static && n.calendarContainer.parentNode) {
				var t = n.calendarContainer.parentNode;
				if (t.lastChild && t.removeChild(t.lastChild), t.parentNode) {
					for (; t.firstChild;) t.parentNode.insertBefore(t.firstChild, t);
					t.parentNode.removeChild(t);
				}
			} else n.calendarContainer.parentNode.removeChild(n.calendarContainer);
		}
		n.altInput && (n.input.type = "text", n.altInput.parentNode && n.altInput.parentNode.removeChild(n.altInput), delete n.altInput), n.input && (n.input.type = n.input._type, n.input.classList.remove("flatpickr-input"), n.input.removeAttribute("readonly")), (/* @__PURE__ */ "_showTimeInput.latestSelectedDateObj._hideNextMonthArrow._hidePrevMonthArrow.__hideNextMonthArrow.__hidePrevMonthArrow.isMobile.isOpen.selectedDateElem.minDateHasTime.maxDateHasTime.days.daysContainer._input._positionElement.innerContainer.rContainer.monthNav.todayDateElem.calendarContainer.weekdayContainer.prevMonthNav.nextMonthNav.monthsDropdownContainer.currentMonthElement.currentYearElement.navigationCurrentMonth.selectedDateElem.config".split(".")).forEach(function(e) {
			try {
				delete n[e];
			} catch {}
		});
	}
	function P(e) {
		return n.calendarContainer.contains(e);
	}
	function se(e) {
		if (n.isOpen && !n.config.inline) {
			var t = eD(e), r = P(t), i = !(t === n.input || t === n.altInput || n.element.contains(t) || e.path && e.path.indexOf && (~e.path.indexOf(n.input) || ~e.path.indexOf(n.altInput))) && !r && !P(e.relatedTarget), a = !n.config.ignoredFocusElements.some(function(e) {
				return e.contains(t);
			});
			i && a && (n.config.allowInput && n.setDate(n._input.value, !1, n.config.altInput ? n.config.altFormat : n.config.dateFormat), n.timeContainer !== void 0 && n.minuteElement !== void 0 && n.hourElement !== void 0 && n.input.value !== "" && n.input.value !== void 0 && c(), n.close(), n.config && n.config.mode === "range" && n.selectedDates.length === 1 && n.clear(!1));
		}
	}
	function ce(e) {
		if (!(!e || n.config.minDate && e < n.config.minDate.getFullYear() || n.config.maxDate && e > n.config.maxDate.getFullYear())) {
			var t = e, r = n.currentYear !== t;
			n.currentYear = t || n.currentYear, n.config.maxDate && n.currentYear === n.config.maxDate.getFullYear() ? n.currentMonth = Math.min(n.config.maxDate.getMonth(), n.currentMonth) : n.config.minDate && n.currentYear === n.config.minDate.getFullYear() && (n.currentMonth = Math.max(n.config.minDate.getMonth(), n.currentMonth)), r && (n.redraw(), Pe("onYearChange"), k());
		}
	}
	function le(e, t) {
		t === void 0 && (t = !0);
		var r = n.parseDate(e, void 0, t);
		if (n.config.minDate && r && cD(r, n.config.minDate, t === void 0 ? !n.minDateHasTime : t) < 0 || n.config.maxDate && r && cD(r, n.config.maxDate, t === void 0 ? !n.maxDateHasTime : t) > 0) return !1;
		if (!n.config.enable && n.config.disable.length === 0) return !0;
		if (r === void 0) return !1;
		for (var i = !!n.config.enable, a = n.config.enable ?? n.config.disable, o = 0, s = void 0; o < a.length; o++) {
			if (s = a[o], typeof s == "function" && s(r) || s instanceof Date && r !== void 0 && s.getTime() === r.getTime()) return i;
			if (typeof s == "string") {
				var c = n.parseDate(s, void 0, !0);
				return c && c.getTime() === r.getTime() ? i : !i;
			}
			if (typeof s == "object" && r !== void 0 && s.from && s.to && r.getTime() >= s.from.getTime() && r.getTime() <= s.to.getTime()) return i;
		}
		return !i;
	}
	function ue(e) {
		return n.daysContainer !== void 0 && e.className.indexOf("hidden") === -1 && e.className.indexOf("flatpickr-disabled") === -1 && n.daysContainer.contains(e);
	}
	function de(e) {
		var t = e.target === n._input, r = n._input.value.trimEnd() !== ze();
		t && r && !(e.relatedTarget && P(e.relatedTarget)) && n.setDate(n._input.value, !0, e.target === n.altInput ? n.config.altFormat : n.config.dateFormat);
	}
	function fe(t) {
		var r = eD(t), i = n.config.wrap ? e.contains(r) : r === n._input, o = n.config.allowInput, s = n.isOpen && (!o || !i), l = n.config.inline && i && !o;
		if (t.keyCode === 13 && i) {
			if (o) return n.setDate(n._input.value, !0, r === n.altInput ? n.config.altFormat : n.config.dateFormat), n.close(), r.blur();
			n.open();
		} else if (P(r) || s || l) {
			var u = !!n.timeContainer && n.timeContainer.contains(r);
			switch (t.keyCode) {
				case 13:
					u ? (t.preventDefault(), c(), Ce()) : we(t);
					break;
				case 27:
					t.preventDefault(), Ce();
					break;
				case 8:
				case 46:
					i && !n.config.allowInput && (t.preventDefault(), n.clear());
					break;
				case 37:
				case 39:
					if (!u && !i) {
						t.preventDefault();
						var f = a();
						if (n.daysContainer !== void 0 && (o === !1 || f && ue(f))) {
							var p = t.keyCode === 39 ? 1 : -1;
							t.ctrlKey ? (t.stopPropagation(), re(p), E(w(1), 0)) : E(void 0, p);
						}
					} else n.hourElement && n.hourElement.focus();
					break;
				case 38:
				case 40:
					t.preventDefault();
					var m = t.keyCode === 40 ? 1 : -1;
					n.daysContainer && r.$i !== void 0 || r === n.input || r === n.altInput ? t.ctrlKey ? (t.stopPropagation(), ce(n.currentYear - m), E(w(1), 0)) : u || E(void 0, m * 7) : r === n.currentYearElement ? ce(n.currentYear - m) : n.config.enableTime && (!u && n.hourElement && n.hourElement.focus(), c(t), n._debouncedChange());
					break;
				case 9: if (u) {
					var h = [
						n.hourElement,
						n.minuteElement,
						n.secondElement,
						n.amPM
					].concat(n.pluginElements).filter(function(e) {
						return e;
					}), g = h.indexOf(r);
					if (g !== -1) {
						var _ = h[g + (t.shiftKey ? -1 : 1)];
						t.preventDefault(), (_ || n._input).focus();
					}
				} else !n.config.noCalendar && n.daysContainer && n.daysContainer.contains(r) && t.shiftKey && (t.preventDefault(), n._input.focus());
			}
		}
		if (n.amPM !== void 0 && r === n.amPM) switch (t.key) {
			case n.l10n.amPM[0].charAt(0):
			case n.l10n.amPM[0].charAt(0).toLowerCase():
				n.amPM.textContent = n.l10n.amPM[0], d(), Be();
				break;
			case n.l10n.amPM[1].charAt(0):
			case n.l10n.amPM[1].charAt(0).toLowerCase(): n.amPM.textContent = n.l10n.amPM[1], d(), Be();
		}
		(i || P(r)) && Pe("onKeyDown", t);
	}
	function pe(e, t) {
		if (t === void 0 && (t = "flatpickr-day"), !(n.selectedDates.length !== 1 || e && (!e.classList.contains(t) || e.classList.contains("flatpickr-disabled")))) {
			for (var r = e ? e.dateObj.getTime() : n.days.firstElementChild.dateObj.getTime(), i = n.parseDate(n.selectedDates[0], void 0, !0).getTime(), a = Math.min(r, n.selectedDates[0].getTime()), o = Math.max(r, n.selectedDates[0].getTime()), s = !1, c = 0, l = 0, u = a; u < o; u += fD.DAY) le(new Date(u), !0) || (s ||= u > a && u < o, u < i && (!c || u > c) ? c = u : u > i && (!l || u < l) && (l = u));
			Array.from(n.rContainer.querySelectorAll("*:nth-child(-n+" + n.config.showMonths + ") > ." + t)).forEach(function(t) {
				var a = t.dateObj.getTime(), o = c > 0 && a < c || l > 0 && a > l;
				if (o) {
					t.classList.add("notAllowed"), [
						"inRange",
						"startRange",
						"endRange"
					].forEach(function(e) {
						t.classList.remove(e);
					});
					return;
				}
				s && !o || ([
					"startRange",
					"inRange",
					"endRange",
					"notAllowed"
				].forEach(function(e) {
					t.classList.remove(e);
				}), e !== void 0 && (e.classList.add(r <= n.selectedDates[0].getTime() ? "startRange" : "endRange"), i < r && a === i ? t.classList.add("startRange") : i > r && a === i && t.classList.add("endRange"), a >= c && (l === 0 || a <= l) && lD(a, i, r) && t.classList.add("inRange")));
			});
		}
	}
	function me() {
		n.isOpen && !n.config.static && !n.config.inline && be();
	}
	function he(e, t) {
		if (t === void 0 && (t = n._positionElement), n.isMobile === !0) {
			if (e) {
				e.preventDefault();
				var r = eD(e);
				r && r.blur();
			}
			n.mobileInput !== void 0 && (n.mobileInput.focus(), n.mobileInput.click()), Pe("onOpen");
			return;
		}
		if (!(n._input.disabled || n.config.inline)) {
			var i = n.isOpen;
			n.isOpen = !0, i || (n.calendarContainer.classList.add("open"), n._input.classList.add("active"), Pe("onOpen"), be(t)), n.config.enableTime === !0 && n.config.noCalendar === !0 && n.config.allowInput === !1 && (e === void 0 || !n.timeContainer.contains(e.relatedTarget)) && setTimeout(function() {
				return n.hourElement.select();
			}, 50);
		}
	}
	function ge(e) {
		return function(t) {
			var r = n.config["_" + e + "Date"] = n.parseDate(t, n.config.dateFormat), i = n.config["_" + (e === "min" ? "max" : "min") + "Date"];
			r !== void 0 && (n[e === "min" ? "minDateHasTime" : "maxDateHasTime"] = r.getHours() > 0 || r.getMinutes() > 0 || r.getSeconds() > 0), n.selectedDates && (n.selectedDates = n.selectedDates.filter(function(e) {
				return le(e);
			}), !n.selectedDates.length && e === "min" && f(r), Be()), n.daysContainer && (Se(), r === void 0 ? n.currentYearElement.removeAttribute(e) : n.currentYearElement[e] = r.getFullYear().toString(), n.currentYearElement.disabled = !!i && r !== void 0 && i.getFullYear() === r.getFullYear());
		};
	}
	function _e() {
		var r = [
			"wrap",
			"weekNumbers",
			"allowInput",
			"allowInvalidPreload",
			"clickOpens",
			"time_24hr",
			"enableTime",
			"noCalendar",
			"altInput",
			"shorthandCurrentMonth",
			"inline",
			"static",
			"enableSeconds",
			"disableMobile"
		], i = mD(mD({}, JSON.parse(JSON.stringify(e.dataset || {}))), t), a = {};
		n.config.parseDate = i.parseDate, n.config.formatDate = i.formatDate, Object.defineProperty(n.config, "enable", {
			get: function() {
				return n.config._enable;
			},
			set: function(e) {
				n.config._enable = ke(e);
			}
		}), Object.defineProperty(n.config, "disable", {
			get: function() {
				return n.config._disable;
			},
			set: function(e) {
				n.config._disable = ke(e);
			}
		});
		var s = i.mode === "time";
		if (!i.dateFormat && (i.enableTime || s)) {
			var c = yD.defaultConfig.dateFormat || UE.dateFormat;
			a.dateFormat = i.noCalendar || s ? "H:i" + (i.enableSeconds ? ":S" : "") : c + " H:i" + (i.enableSeconds ? ":S" : "");
		}
		if (i.altInput && (i.enableTime || s) && !i.altFormat) {
			var l = yD.defaultConfig.altFormat || UE.altFormat;
			a.altFormat = i.noCalendar || s ? "h:i" + (i.enableSeconds ? ":S K" : " K") : l + (" h:i" + (i.enableSeconds ? ":S" : "") + " K");
		}
		Object.defineProperty(n.config, "minDate", {
			get: function() {
				return n.config._minDate;
			},
			set: ge("min")
		}), Object.defineProperty(n.config, "maxDate", {
			get: function() {
				return n.config._maxDate;
			},
			set: ge("max")
		});
		var u = function(e) {
			return function(t) {
				n.config[e === "min" ? "_minTime" : "_maxTime"] = n.parseDate(t, "H:i:S");
			};
		};
		Object.defineProperty(n.config, "minTime", {
			get: function() {
				return n.config._minTime;
			},
			set: u("min")
		}), Object.defineProperty(n.config, "maxTime", {
			get: function() {
				return n.config._maxTime;
			},
			set: u("max")
		}), i.mode === "time" && (n.config.noCalendar = !0, n.config.enableTime = !0), Object.assign(n.config, a, i);
		for (var d = 0; d < r.length; d++) n.config[r[d]] = n.config[r[d]] === !0 || n.config[r[d]] === "true";
		HE.filter(function(e) {
			return n.config[e] !== void 0;
		}).forEach(function(e) {
			n.config[e] = JE(n.config[e] || []).map(o);
		}), n.isMobile = !n.config.disableMobile && !n.config.inline && n.config.mode === "single" && !n.config.disable.length && !n.config.enable && !n.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		for (var d = 0; d < n.config.plugins.length; d++) {
			var f = n.config.plugins[d](n) || {};
			for (var p in f) HE.indexOf(p) > -1 ? n.config[p] = JE(f[p]).map(o).concat(n.config[p]) : i[p] === void 0 && (n.config[p] = f[p]);
		}
		i.altInputClass || (n.config.altInputClass = ve().className + " " + n.config.altInputClass), Pe("onParseConfig");
	}
	function ve() {
		return n.config.wrap ? e.querySelector("[data-input]") : e;
	}
	function ye() {
		typeof n.config.locale != "object" && yD.l10ns[n.config.locale] === void 0 && n.config.errorHandler(/* @__PURE__ */ Error("flatpickr: invalid locale " + n.config.locale)), n.l10n = mD(mD({}, yD.l10ns.default), typeof n.config.locale == "object" ? n.config.locale : n.config.locale === "default" ? void 0 : yD.l10ns[n.config.locale]), iD.D = "(" + n.l10n.weekdays.shorthand.join("|") + ")", iD.l = "(" + n.l10n.weekdays.longhand.join("|") + ")", iD.M = "(" + n.l10n.months.shorthand.join("|") + ")", iD.F = "(" + n.l10n.months.longhand.join("|") + ")", iD.K = "(" + n.l10n.amPM[0] + "|" + n.l10n.amPM[1] + "|" + n.l10n.amPM[0].toLowerCase() + "|" + n.l10n.amPM[1].toLowerCase() + ")", mD(mD({}, t), JSON.parse(JSON.stringify(e.dataset || {}))).time_24hr === void 0 && yD.defaultConfig.time_24hr === void 0 && (n.config.time_24hr = n.l10n.time_24hr), n.formatDate = oD(n), n.parseDate = sD({
			config: n.config,
			l10n: n.l10n
		});
	}
	function be(e) {
		if (typeof n.config.position == "function") {
			n.config.position(n, e);
			return;
		}
		if (n.calendarContainer !== void 0) {
			Pe("onPreCalendarPosition");
			var t = e || n._positionElement, r = Array.prototype.reduce.call(n.calendarContainer.children, (function(e, t) {
				return e + t.offsetHeight;
			}), 0), i = n.calendarContainer.offsetWidth, a = n.config.position.split(" "), o = a[0], s = a.length > 1 ? a[1] : null, c = t.getBoundingClientRect(), l = window.innerHeight - c.bottom, u = o === "above" || o !== "below" && l < r && c.top > r, d = window.pageYOffset + c.top + (u ? -r - 2 : t.offsetHeight + 2);
			if (YE(n.calendarContainer, "arrowTop", !u), YE(n.calendarContainer, "arrowBottom", u), !n.config.inline) {
				var f = window.pageXOffset + c.left, p = !1, m = !1;
				s === "center" ? (f -= (i - c.width) / 2, p = !0) : s === "right" && (f -= i - c.width, m = !0), YE(n.calendarContainer, "arrowLeft", !p && !m), YE(n.calendarContainer, "arrowCenter", p), YE(n.calendarContainer, "arrowRight", m);
				var h = window.document.body.offsetWidth - (window.pageXOffset + c.right), g = f + i > window.document.body.offsetWidth, _ = h + i > window.document.body.offsetWidth;
				if (YE(n.calendarContainer, "rightMost", g), !n.config.static) {
					if (n.calendarContainer.style.top = d + "px", !g) n.calendarContainer.style.left = f + "px", n.calendarContainer.style.right = "auto";
					else if (!_) n.calendarContainer.style.left = "auto", n.calendarContainer.style.right = h + "px";
					else {
						var v = F();
						if (v === void 0) return;
						var y = window.document.body.offsetWidth, b = Math.max(0, y / 2 - i / 2), x = ".flatpickr-calendar.centerMost:before", S = ".flatpickr-calendar.centerMost:after", C = v.cssRules.length, w = "{left:" + c.left + "px;right:auto;}";
						YE(n.calendarContainer, "rightMost", !1), YE(n.calendarContainer, "centerMost", !0), v.insertRule(x + "," + S + w, C), n.calendarContainer.style.left = b + "px", n.calendarContainer.style.right = "auto";
					}
				}
			}
		}
	}
	function F() {
		for (var e = null, t = 0; t < document.styleSheets.length; t++) {
			var n = document.styleSheets[t];
			if (n.cssRules) {
				try {
					n.cssRules;
				} catch {
					continue;
				}
				e = n;
				break;
			}
		}
		return e ?? xe();
	}
	function xe() {
		var e = document.createElement("style");
		return document.head.appendChild(e), e.sheet;
	}
	function Se() {
		n.config.noCalendar || n.isMobile || (k(), Re(), O());
	}
	function Ce() {
		n._input.focus(), window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0 ? setTimeout(n.close, 0) : n.close();
	}
	function we(e) {
		e.preventDefault(), e.stopPropagation();
		var t = QE(eD(e), function(e) {
			return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled") && !e.classList.contains("notAllowed");
		});
		if (t !== void 0) {
			var r = t, i = n.latestSelectedDateObj = new Date(r.dateObj.getTime()), a = (i.getMonth() < n.currentMonth || i.getMonth() > n.currentMonth + n.config.showMonths - 1) && n.config.mode !== "range";
			if (n.selectedDateElem = r, n.config.mode === "single") n.selectedDates = [i];
			else if (n.config.mode === "multiple") {
				var o = Ie(i);
				o ? n.selectedDates.splice(parseInt(o), 1) : n.selectedDates.push(i);
			} else n.config.mode === "range" && (n.selectedDates.length === 2 && n.clear(!1, !1), n.latestSelectedDateObj = i, n.selectedDates.push(i), cD(i, n.selectedDates[0], !0) !== 0 && n.selectedDates.sort(function(e, t) {
				return e.getTime() - t.getTime();
			}));
			if (d(), a) {
				var s = n.currentYear !== i.getFullYear();
				n.currentYear = i.getFullYear(), n.currentMonth = i.getMonth(), s && (Pe("onYearChange"), k()), Pe("onMonthChange");
			}
			if (Re(), O(), Be(), !a && n.config.mode !== "range" && n.config.showMonths === 1 ? C(r) : n.selectedDateElem !== void 0 && n.hourElement === void 0 && n.selectedDateElem && n.selectedDateElem.focus(), n.hourElement !== void 0 && n.hourElement !== void 0 && n.hourElement.focus(), n.config.closeOnSelect) {
				var c = n.config.mode === "single" && !n.config.enableTime, l = n.config.mode === "range" && n.selectedDates.length === 2 && !n.config.enableTime;
				(c || l) && Ce();
			}
			g();
		}
	}
	var Te = {
		locale: [ye, te],
		showMonths: [
			j,
			s,
			N
		],
		minDate: [v],
		maxDate: [v],
		positionElement: [Me],
		clickOpens: [function() {
			n.config.clickOpens === !0 ? (h(n._input, "focus", n.open), h(n._input, "click", n.open)) : (n._input.removeEventListener("focus", n.open), n._input.removeEventListener("click", n.open));
		}]
	};
	function Ee(e, t) {
		if (typeof e == "object" && e) for (var r in Object.assign(n.config, e), e) Te[r] !== void 0 && Te[r].forEach(function(e) {
			return e();
		});
		else n.config[e] = t, Te[e] === void 0 ? HE.indexOf(e) > -1 && (n.config[e] = JE(t)) : Te[e].forEach(function(e) {
			return e();
		});
		n.redraw(), Be(!0);
	}
	function De(e, t) {
		var r = [];
		if (e instanceof Array) r = e.map(function(e) {
			return n.parseDate(e, t);
		});
		else if (e instanceof Date || typeof e == "number") r = [n.parseDate(e, t)];
		else if (typeof e == "string") switch (n.config.mode) {
			case "single":
			case "time":
				r = [n.parseDate(e, t)];
				break;
			case "multiple":
				r = e.split(n.config.conjunction).map(function(e) {
					return n.parseDate(e, t);
				});
				break;
			case "range": r = e.split(n.l10n.rangeSeparator).map(function(e) {
				return n.parseDate(e, t);
			});
		}
		else n.config.errorHandler(/* @__PURE__ */ Error("Invalid date supplied: " + JSON.stringify(e)));
		n.selectedDates = n.config.allowInvalidPreload ? r : r.filter(function(e) {
			return e instanceof Date && le(e, !1);
		}), n.config.mode === "range" && n.selectedDates.sort(function(e, t) {
			return e.getTime() - t.getTime();
		});
	}
	function Oe(e, t, r) {
		if (t === void 0 && (t = !1), r === void 0 && (r = n.config.dateFormat), e !== 0 && !e || e instanceof Array && e.length === 0) return n.clear(t);
		De(e, r), n.latestSelectedDateObj = n.selectedDates[n.selectedDates.length - 1], n.redraw(), v(void 0, t), f(), n.selectedDates.length === 0 && n.clear(!1), Be(t), t && Pe("onChange");
	}
	function ke(e) {
		return e.slice().map(function(e) {
			return typeof e == "string" || typeof e == "number" || e instanceof Date ? n.parseDate(e, void 0, !0) : e && typeof e == "object" && e.from && e.to ? {
				from: n.parseDate(e.from, void 0),
				to: n.parseDate(e.to, void 0)
			} : e;
		}).filter(function(e) {
			return e;
		});
	}
	function Ae() {
		n.selectedDates = [], n.now = n.parseDate(n.config.now) || /* @__PURE__ */ new Date();
		var e = n.config.defaultDate || ((n.input.nodeName === "INPUT" || n.input.nodeName === "TEXTAREA") && n.input.placeholder && n.input.value === n.input.placeholder ? null : n.input.value);
		e && De(e, n.config.dateFormat), n._initialDate = n.selectedDates.length > 0 ? n.selectedDates[0] : n.config.minDate && n.config.minDate.getTime() > n.now.getTime() ? n.config.minDate : n.config.maxDate && n.config.maxDate.getTime() < n.now.getTime() ? n.config.maxDate : n.now, n.currentYear = n._initialDate.getFullYear(), n.currentMonth = n._initialDate.getMonth(), n.selectedDates.length > 0 && (n.latestSelectedDateObj = n.selectedDates[0]), n.config.minTime !== void 0 && (n.config.minTime = n.parseDate(n.config.minTime, "H:i")), n.config.maxTime !== void 0 && (n.config.maxTime = n.parseDate(n.config.maxTime, "H:i")), n.minDateHasTime = !!n.config.minDate && (n.config.minDate.getHours() > 0 || n.config.minDate.getMinutes() > 0 || n.config.minDate.getSeconds() > 0), n.maxDateHasTime = !!n.config.maxDate && (n.config.maxDate.getHours() > 0 || n.config.maxDate.getMinutes() > 0 || n.config.maxDate.getSeconds() > 0);
	}
	function je() {
		if (n.input = ve(), !n.input) {
			n.config.errorHandler(/* @__PURE__ */ Error("Invalid input element specified"));
			return;
		}
		n.input._type = n.input.type, n.input.type = "text", n.input.classList.add("flatpickr-input"), n._input = n.input, n.config.altInput && (n.altInput = XE(n.input.nodeName, n.config.altInputClass), n._input = n.altInput, n.altInput.placeholder = n.input.placeholder, n.altInput.disabled = n.input.disabled, n.altInput.required = n.input.required, n.altInput.tabIndex = n.input.tabIndex, n.altInput.type = "text", n.input.setAttribute("type", "hidden"), !n.config.static && n.input.parentNode && n.input.parentNode.insertBefore(n.altInput, n.input.nextSibling)), n.config.allowInput || n._input.setAttribute("readonly", "readonly"), Me();
	}
	function Me() {
		n._positionElement = n.config.positionElement || n._input;
	}
	function Ne() {
		var e = n.config.enableTime ? n.config.noCalendar ? "time" : "datetime-local" : "date";
		n.mobileInput = XE("input", n.input.className + " flatpickr-mobile"), n.mobileInput.tabIndex = 1, n.mobileInput.type = e, n.mobileInput.disabled = n.input.disabled, n.mobileInput.required = n.input.required, n.mobileInput.placeholder = n.input.placeholder, n.mobileFormatStr = e === "datetime-local" ? "Y-m-d\\TH:i:S" : e === "date" ? "Y-m-d" : "H:i:S", n.selectedDates.length > 0 && (n.mobileInput.defaultValue = n.mobileInput.value = n.formatDate(n.selectedDates[0], n.mobileFormatStr)), n.config.minDate && (n.mobileInput.min = n.formatDate(n.config.minDate, "Y-m-d")), n.config.maxDate && (n.mobileInput.max = n.formatDate(n.config.maxDate, "Y-m-d")), n.input.getAttribute("step") && (n.mobileInput.step = String(n.input.getAttribute("step"))), n.input.type = "hidden", n.altInput !== void 0 && (n.altInput.type = "hidden");
		try {
			n.input.parentNode && n.input.parentNode.insertBefore(n.mobileInput, n.input.nextSibling);
		} catch {}
		h(n.mobileInput, "change", function(e) {
			n.setDate(eD(e).value, !1, n.mobileFormatStr), Pe("onChange"), Pe("onClose");
		});
	}
	function I(e) {
		if (n.isOpen === !0) return n.close();
		n.open(e);
	}
	function Pe(e, t) {
		if (n.config !== void 0) {
			var r = n.config[e];
			if (r !== void 0 && r.length > 0) for (var i = 0; r[i] && i < r.length; i++) r[i](n.selectedDates, n.input.value, n, t);
			e === "onChange" && (n.input.dispatchEvent(Fe("change")), n.input.dispatchEvent(Fe("input")));
		}
	}
	function Fe(e) {
		var t = document.createEvent("Event");
		return t.initEvent(e, !0, !0), t;
	}
	function Ie(e) {
		for (var t = 0; t < n.selectedDates.length; t++) {
			var r = n.selectedDates[t];
			if (r instanceof Date && cD(r, e) === 0) return "" + t;
		}
		return !1;
	}
	function Le(e) {
		return n.config.mode !== "range" || n.selectedDates.length < 2 ? !1 : cD(e, n.selectedDates[0]) >= 0 && cD(e, n.selectedDates[1]) <= 0;
	}
	function Re() {
		n.config.noCalendar || n.isMobile || !n.monthNav || (n.yearElements.forEach(function(e, t) {
			var r = new Date(n.currentYear, n.currentMonth, 1);
			r.setMonth(n.currentMonth + t), n.config.showMonths > 1 || n.config.monthSelectorType === "static" ? n.monthElements[t].textContent = nD(r.getMonth(), n.config.shorthandCurrentMonth, n.l10n) + " " : n.monthsDropdownContainer.value = r.getMonth().toString(), e.value = r.getFullYear().toString();
		}), n._hidePrevMonthArrow = n.config.minDate !== void 0 && (n.currentYear === n.config.minDate.getFullYear() ? n.currentMonth <= n.config.minDate.getMonth() : n.currentYear < n.config.minDate.getFullYear()), n._hideNextMonthArrow = n.config.maxDate !== void 0 && (n.currentYear === n.config.maxDate.getFullYear() ? n.currentMonth + 1 > n.config.maxDate.getMonth() : n.currentYear > n.config.maxDate.getFullYear()));
	}
	function ze(e) {
		var t = e || (n.config.altInput ? n.config.altFormat : n.config.dateFormat);
		return n.selectedDates.map(function(e) {
			return n.formatDate(e, t);
		}).filter(function(e, t, r) {
			return n.config.mode !== "range" || n.config.enableTime || r.indexOf(e) === t;
		}).join(n.config.mode === "range" ? n.l10n.rangeSeparator : n.config.conjunction);
	}
	function Be(e) {
		e === void 0 && (e = !0), n.mobileInput !== void 0 && n.mobileFormatStr && (n.mobileInput.value = n.latestSelectedDateObj === void 0 ? "" : n.formatDate(n.latestSelectedDateObj, n.mobileFormatStr)), n.input.value = ze(n.config.dateFormat), n.altInput !== void 0 && (n.altInput.value = ze(n.config.altFormat)), e !== !1 && Pe("onValueUpdate");
	}
	function Ve(e) {
		var t = eD(e), r = n.prevMonthNav.contains(t), i = n.nextMonthNav.contains(t);
		r || i ? re(r ? -1 : 1) : n.yearElements.indexOf(t) >= 0 ? t.select() : t.classList.contains("arrowUp") ? n.changeYear(n.currentYear + 1) : t.classList.contains("arrowDown") && n.changeYear(n.currentYear - 1);
	}
	function He(e) {
		e.preventDefault();
		var t = e.type === "keydown", r = eD(e), i = r;
		n.amPM !== void 0 && r === n.amPM && (n.amPM.textContent = n.l10n.amPM[KE(n.amPM.textContent === n.l10n.amPM[0])]);
		var a = parseFloat(i.getAttribute("min")), o = parseFloat(i.getAttribute("max")), s = parseFloat(i.getAttribute("step")), c = parseInt(i.value, 10), l = c + s * (e.delta || (t ? e.which === 38 ? 1 : -1 : 0));
		if (i.value !== void 0 && i.value.length === 2) {
			var u = i === n.hourElement, d = i === n.minuteElement;
			l < a ? (l = o + l + KE(!u) + (KE(u) && KE(!n.amPM)), d && b(void 0, -1, n.hourElement)) : l > o && (l = i === n.hourElement ? l - o - KE(!n.amPM) : a, d && b(void 0, 1, n.hourElement)), n.amPM && u && (s === 1 ? l + c === 23 : Math.abs(l - c) > s) && (n.amPM.textContent = n.l10n.amPM[KE(n.amPM.textContent === n.l10n.amPM[0])]), i.value = GE(l);
		}
	}
	return i(), n;
}
function vD(e, t) {
	for (var n = Array.prototype.slice.call(e).filter(function(e) {
		return e instanceof HTMLElement;
	}), r = [], i = 0; i < n.length; i++) {
		var a = n[i];
		try {
			if (a.getAttribute("data-fp-omit") !== null) continue;
			a._flatpickr !== void 0 && (a._flatpickr.destroy(), a._flatpickr = void 0), a._flatpickr = _D(a, t || {}), r.push(a._flatpickr);
		} catch (e) {
			console.error(e);
		}
	}
	return r.length === 1 ? r[0] : r;
}
typeof HTMLElement < "u" && typeof HTMLCollection < "u" && typeof NodeList < "u" && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
	return vD(this, e);
}, HTMLElement.prototype.flatpickr = function(e) {
	return vD([this], e);
});
var yD = function(e, t) {
	return typeof e == "string" ? vD(window.document.querySelectorAll(e), t) : e instanceof Node ? vD([e], t) : vD(e, t);
};
yD.defaultConfig = {}, yD.l10ns = {
	en: mD({}, WE),
	default: mD({}, WE)
}, yD.localize = function(e) {
	yD.l10ns.default = mD(mD({}, yD.l10ns.default), e);
}, yD.setDefaults = function(e) {
	yD.defaultConfig = mD(mD({}, yD.defaultConfig), e);
}, yD.parseDate = sD({}), yD.formatDate = oD({}), yD.compareDates = cD, typeof jQuery < "u" && jQuery.fn !== void 0 && (jQuery.fn.flatpickr = function(e) {
	return vD(this, e);
}), Date.prototype.fp_incr = function(e) {
	return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof e == "string" ? parseInt(e, 10) : e));
}, typeof window < "u" && (window.flatpickr = yD);
//#endregion
//#region node_modules/vue-flatpickr-component/dist/esm/events.js
var bD = [
	"onChange",
	"onClose",
	"onDestroy",
	"onMonthChange",
	"onOpen",
	"onYearChange"
], xD = [
	"onValueUpdate",
	"onDayCreate",
	"onParseConfig",
	"onReady",
	"onPreCalendarPosition",
	"onKeyDown"
];
//#endregion
//#region node_modules/vue-flatpickr-component/dist/esm/util.js
function SD(e) {
	return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function CD(e) {
	return e instanceof Array ? e : [e];
}
function wD(e) {
	return e && e.length ? e : null;
}
//#endregion
//#region node_modules/vue-flatpickr-component/dist/esm/component.js
var TD = [...bD, ...xD], ED = ["locale", "showMonths"], DD = /* @__PURE__ */ pi({
	name: "FlatPickr",
	compatConfig: { MODE: 3 },
	render() {
		return Ns("input", {
			type: "text",
			"data-input": !0,
			disabled: this.disabled,
			onInput: this.onInput
		});
	},
	emits: [
		"blur",
		"update:modelValue",
		...TD.map(SD)
	],
	props: {
		modelValue: {
			type: [
				String,
				Number,
				Date,
				Array,
				null
			],
			required: !0
		},
		config: {
			type: Object,
			default: () => ({
				defaultDate: null,
				wrap: !1
			})
		},
		events: {
			type: Array,
			default: () => bD
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	data() {
		return { fp: null };
	},
	mounted() {
		this.fp || (this.fp = yD(this.getElem(), this.prepareConfig()), this.fpInput().addEventListener("blur", this.onBlur), this.$watch("disabled", this.watchDisabled, { immediate: !0 }));
	},
	methods: {
		prepareConfig() {
			let e = Object.assign({}, this.config);
			this.events.forEach((t) => {
				let n = yD.defaultConfig[t] || [];
				e[t] = CD(e[t] || []).concat(n, (...e) => {
					this.$emit(SD(t), ...e);
				});
			});
			let t = this.onClose.bind(this);
			return e.onClose = CD(e.onClose || []).concat(t), e.defaultDate = this.modelValue || e.defaultDate, e;
		},
		getElem() {
			return this.config.wrap ? this.$el.parentNode : this.$el;
		},
		onInput(e) {
			let t = e.target;
			Zn().then(() => {
				this.$emit("update:modelValue", wD(t.value));
			});
		},
		fpInput() {
			return this.fp.altInput || this.fp.input;
		},
		onBlur(e) {
			this.$emit("blur", wD(e.target.value));
		},
		onClose(e, t) {
			this.$emit("update:modelValue", t);
		},
		watchDisabled(e) {
			e ? this.fpInput().setAttribute("disabled", "") : this.fpInput().removeAttribute("disabled");
		}
	},
	watch: {
		config: {
			deep: !0,
			handler(e) {
				if (!this.fp) return;
				let t = Object.assign({}, e);
				TD.forEach((e) => {
					delete t[e];
				}), this.fp.set(t), ED.forEach((e) => {
					t[e] !== void 0 && this.fp.set(e, t[e]);
				});
			}
		},
		modelValue(e) {
			var t;
			!this.$el || e === wD(this.$el.value) || (t = this.fp) == null || t.setDate(e, !0);
		}
	},
	beforeUnmount() {
		this.fp &&= (this.fpInput().removeEventListener("blur", this.onBlur), this.fp.destroy(), null);
	}
}), OD = {
	components: {
		ValidationErrors: f_,
		flatPickr: DD
	},
	mixins: [p_],
	emits: [
		"changed",
		"closed",
		"update:end",
		"update:modelValue",
		"update:start"
	],
	props: {
		label: {
			type: String,
			required: !1,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			default: null
		},
		modelValue: {
			type: [
				String,
				Array,
				Object
			],
			default: ""
		},
		start: {
			type: String,
			required: !1,
			default: null
		},
		end: {
			type: String,
			required: !1,
			default: null
		},
		type: {
			type: String,
			default: "text"
		},
		placeholder: {
			type: String,
			required: !1,
			default: null
		},
		autocomplete: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		config: {
			type: Object,
			required: !1,
			default: () => ({ dateFormat: "Y-m-d" })
		}
	},
	data() {
		return { inputvalue: this.config.mode == "range" && this.start && this.end ? this.start + " - " + this.end : this.modelValue };
	},
	computed: { flatpickrConfig() {
		let e = { ...this.config };
		return this.config.mode == "range" && (e.locale = {
			...e.locale || {},
			rangeSeparator: " - "
		}), e;
	} },
	watch: {
		modelValue(e, t) {
			this.config.mode != "range" && t != e && (this.inputvalue = e);
		},
		inputvalue(e, t) {
			let n;
			if (this.config.mode == "range") {
				let r = typeof e == "string" ? e.split(" - ") : e;
				n = {
					start: r[0],
					end: r[1]
				}, this.$emit("update:start", n.start), this.$emit("update:end", n.end), t != n && this.$emit("update:modelValue", n);
			} else n = e, this.$emit("update:modelValue", n);
		}
	},
	methods: { handleChange() {
		this.formDirty(this.name), this.$emit("changed");
	} }
}, kD = ["for"], AD = ["innerHTML"], jD = { class: "fvl-input-group fvl-date-picker" };
function MD(e, t, n, r, i, a) {
	let o = B("flat-pickr"), s = B("validation-errors");
	return H(), U("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-input-wrapper"]) }, [
		n.label ? (H(), U("label", {
			key: 0,
			class: F([n.labelClass, "fvl-input-label"]),
			for: n.name
		}, [W("span", { innerHTML: n.label }, null, 8, AD), V(e.$slots, "label_suffix")], 10, kD)) : q("", !0),
		W("div", jD, [
			V(e.$slots, "prefix"),
			G(o, {
				modelValue: i.inputvalue,
				"onUpdate:modelValue": t[0] ||= (e) => i.inputvalue = e,
				name: n.name,
				placeholder: n.placeholder,
				class: F(["fvl-input", n.fieldClass]),
				config: a.flatpickrConfig,
				required: n.required,
				readonly: n.readonly,
				disabled: n.disabled,
				onOnChange: a.handleChange,
				onOnClose: t[1] ||= (t) => e.$emit("closed")
			}, null, 8, [
				"modelValue",
				"name",
				"placeholder",
				"class",
				"config",
				"required",
				"readonly",
				"disabled",
				"onOnChange"
			]),
			V(e.$slots, "suffix")
		]),
		V(e.$slots, "hint"),
		V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(s, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
	], 2);
}
var ND = /*#__PURE__*/ Y(OD, [["render", MD]]), PD = {
	components: {
		ValidationErrors: f_,
		flatPickr: DD,
		OnClickOutside: fS
	},
	mixins: [p_],
	emits: [
		"changed",
		"closed",
		"update:end",
		"update:modelValue",
		"update:start"
	],
	props: {
		label: {
			type: String,
			required: !1,
			default: null
		},
		name: {
			type: String,
			required: !0
		},
		id: {
			type: String,
			default: null
		},
		modelValue: {
			type: [
				String,
				Array,
				Object
			],
			default: ""
		},
		start: {
			type: String,
			required: !1,
			default: null
		},
		end: {
			type: String,
			required: !1,
			default: null
		},
		type: {
			type: String,
			default: "text"
		},
		placeholder: {
			type: String,
			required: !1,
			default: null
		},
		autocomplete: {
			type: String,
			required: !1,
			default: null
		},
		fieldClass: {
			type: String,
			required: !1,
			default: null
		},
		labelClass: {
			type: String,
			required: !1,
			default: null
		},
		readonly: {
			type: Boolean,
			required: !1,
			default: !1
		},
		required: {
			type: Boolean,
			required: !1,
			default: !1
		},
		disabled: {
			type: Boolean,
			required: !1,
			default: !1
		},
		config: {
			type: Object,
			required: !1,
			default: () => ({
				dateFormat: "Y-m-d",
				mode: "range",
				inline: !0
			})
		},
		presets: {
			type: Array,
			required: !1,
			default: () => []
		},
		width: {
			type: String,
			required: !1,
			default: null
		}
	},
	data() {
		return {
			isOpen: !1,
			inputvalue: this.start && this.end ? this.start + " - " + this.end : this.modelValue
		};
	},
	computed: {
		flatpickrConfig() {
			let e = { ...this.config };
			return this.config.mode == "range" && (e.locale = {
				...e.locale || {},
				rangeSeparator: " - "
			}), e;
		},
		datePresets() {
			return this.presets.length ? this.presets : [
				{
					name: "Last 30 Days",
					start: this.getRange(30).start,
					end: this.getRange(30).end
				},
				{
					name: "Last 60 Days",
					start: this.getRange(60).start,
					end: this.getRange(60).end
				},
				{
					name: "Last 90 Days",
					start: this.getRange(90).start,
					end: this.getRange(90).end
				},
				{
					name: "Last 365 Days",
					start: this.getRange(365).start,
					end: this.getRange(365).end
				}
			];
		}
	},
	watch: {
		modelValue(e) {
			this.config.mode != "range" && (this.inputvalue = e);
		},
		inputvalue(e) {
			let t;
			this.config.mode == "range" && typeof e == "string" ? (e = e.split(" - "), t = {
				start: e[0],
				end: e[1]
			}, this.$emit("update:start", e[0]), this.$emit("update:end", e[1])) : t = e, this.$emit("update:modelValue", t);
		}
	},
	beforeUnmount() {
		this.popper !== void 0 && this.popper.destroy();
	},
	methods: {
		setupPopper() {
			this.popper === void 0 ? this.popper = new xb(this.$refs.dateinput, this.$refs.datedropdown, { placement: "bottom" }) : this.popper.scheduleUpdate();
		},
		open() {
			this.isOpen || (this.isOpen = !0, this.$nextTick(() => {
				this.setupPopper();
			}));
		},
		close() {
			this.isOpen && (this.isOpen = !1, this.modelValue && this.modelValue.end === void 0 && (this.inputvalue = "", this.$emit("update:modelValue", ""), this.$emit("update:start", ""), this.$emit("update:end", "")), this.$nextTick(() => {
				this.$emit("closed"), this.$refs.dateinput.focus();
			}));
		},
		toggle() {
			this.disabled || (this.isOpen ? this.close() : this.open());
		},
		handleChange() {
			this.formDirty(this.name), this.$emit("changed");
		},
		getRange(e) {
			let t = /* @__PURE__ */ new Date(), n = `${t.getFullYear()}-${(t.getMonth() + 1).toString().padStart(2, "0")}-${t.getDate()}`, r = new Date(t.setDate(t.getDate() - e));
			return {
				start: `${r.getFullYear()}-${(r.getMonth() + 1).toString().padStart(2, "0")}-${r.getDate()}`,
				end: n
			};
		}
	}
}, FD = ["for"], ID = ["innerHTML"], LD = [
	"value",
	"required",
	"disabled",
	"placeholder"
], RD = { class: "fvl-date-picker-extended-wrapper" }, zD = { class: "flex-grow pr-3" }, BD = ["onClick"], VD = { class: "fvl-date-picker-extended-flatpickr-wrapper" };
function HD(e, t, n, r, i, a) {
	let o = B("flat-pickr"), s = B("validation-errors"), c = B("on-click-outside");
	return H(), Ho(c, { onDo: t[6] ||= (e) => a.close() }, {
		default: z(() => [W("div", { class: F([{ "fvl-has-error": e.formHasErrors(n.name) }, "fvl-input-wrapper"]) }, [
			n.label ? (H(), U("label", {
				key: 0,
				class: F([n.labelClass, "fvl-input-label"]),
				for: n.name
			}, [W("span", { innerHTML: n.label }, null, 8, ID), V(e.$slots, "label_suffix")], 10, FD)) : q("", !0),
			W("div", {
				class: "fvl-input-group",
				onClick: t[3] ||= (e) => i.isOpen = !0
			}, [
				V(e.$slots, "prefix"),
				W("input", {
					ref: "dateinput",
					value: i.inputvalue,
					class: F(["fvl-input cursor-pointer", n.fieldClass]),
					required: n.required,
					readonly: "readonly",
					disabled: n.disabled,
					placeholder: n.placeholder,
					onClick: t[0] ||= Cl((e) => a.toggle(), ["prevent"]),
					onKeydown: [t[1] ||= Tl((e) => a.toggle(), ["space"]), t[2] ||= Tl((e) => a.close(), ["esc"])]
				}, null, 42, LD),
				V(e.$slots, "suffix")
			]),
			G(Xs, { name: "fvl-dropdown-transition" }, {
				default: z(() => [zr(W("div", {
					ref: "datedropdown",
					class: "fvl-date-picker",
					style: ge({ "max-width": n.width })
				}, [W("div", RD, [W("div", zD, [(H(!0), U(Mo, null, Wi(a.datePresets, (e) => (H(), U("button", {
					key: e.name,
					class: F(["fvl-date-picker-extended-preset-item", { "fvl-date-picker-extended-preset-item-active": i.inputvalue == e.start + " - " + e.end }]),
					type: "button",
					onClick: (t) => i.inputvalue = e.start + " - " + e.end,
					onKeydown: t[4] ||= Tl((e) => a.close(), ["esc"])
				}, I(e.name), 43, BD))), 128))]), W("div", VD, [G(o, {
					ref: "flatpickr",
					modelValue: i.inputvalue,
					"onUpdate:modelValue": t[5] ||= (e) => i.inputvalue = e,
					name: n.name,
					placeholder: n.placeholder,
					class: F(["hidden", n.fieldClass]),
					config: a.flatpickrConfig,
					onOnChange: a.handleChange
				}, null, 8, [
					"modelValue",
					"name",
					"placeholder",
					"class",
					"config",
					"onOnChange"
				])])])], 4), [[mc, i.isOpen]])]),
				_: 1
			}),
			V(e.$slots, "hint"),
			V(e.$slots, "errors", { errors: e.formGetErrors(n.name) }, () => [G(s, { errors: e.formGetErrors(n.name) }, null, 8, ["errors"])])
		], 2)]),
		_: 3
	});
}
var UD = /*#__PURE__*/ Y(PD, [["render", HD]]), WD = {};
function GD(e, t) {
	return H(), U("a", {
		title: "show code",
		class: "absolute left-0 -ml-4 mt-1 pt-px",
		onClick: t[0] ||= Cl((t) => e.$emit("toggle"), ["prevent"])
	}, [...t[1] ||= [W("svg", {
		class: "fill-current text-gray-400 hover:text-teal-600 hover:cursor-pointer",
		width: "16",
		height: "15",
		xmlns: "http://www.w3.org/2000/svg"
	}, [W("g", { "fill-rule": "nonzero" }, [W("path", { d: "M15.73647 6.65293l-3.18745-3.19441c-.31059-.31127-.81569-.31127-1.12627 0-.3106.31126-.3106.81746 0 1.12873l2.62274 2.62847-2.62588 2.63162c-.31059.31126-.31059.81746 0 1.12873.2447.24524.8502.27668 1.12627 0l3.18745-3.19441c.31373-.31127.31373-.81432.00314-1.12873zM4.5804 3.45852c-.3106-.31127-.8157-.31127-1.12628 0l-3.1906 3.1944c-.31058.31127-.31058.81747 0 1.12874l3.18746 3.19755c.27608.27669.88157.24524 1.12627 0 .3106-.31126.3106-.81746 0-1.12873L1.95451 7.22201l2.62588-2.63162c.31059-.3144.31059-.81746 0-1.13187zM10.23059.05345c-.4204-.13205-.86588.10061-.99765.52507L5.24863 13.35616c-.13177.4213.09725.8835.52392.99982.4549.12262.89098-.18236.99765-.52506L10.7545 1.05328c.12863-.42131-.10353-.86778-.52392-.99983z" })])], -1)]]);
}
var KD = /*#__PURE__*/ Y(WD, [["render", GD]]), qD = { props: {
	showSource: {
		type: Boolean,
		default: !1
	},
	source: {
		type: String,
		default: ""
	}
} }, JD = {
	key: 0,
	class: "m-2"
};
function YD(e, t, n, r, i, a) {
	let o = Vi("highlightjs");
	return n.showSource ? zr((H(), U("pre", JD, [...t[0] ||= [
		K("    ", -1),
		W("code", { class: "rounded html" }, null, -1),
		K("\n  ", -1)
	]])), [[o, n.source]]) : q("", !0);
}
var XD = /*#__PURE__*/ Y(qD, [["render", YD]]), ZD = {
	components: {
		FvlForm: c_,
		FvlSearchSelect: kS,
		SourceToggle: KD,
		SourceBox: XD
	},
	data() {
		return {
			form: { genre: null },
			genreOptions: [
				{ name: "Blues" },
				{ name: "Jazz" },
				{ name: "Rock and Roll" },
				{ name: "Pop Rock" },
				{ name: "Country" },
				{ name: "Soul" },
				{ name: "Dance" },
				{ name: "Hip Hop" }
			],
			showSource: !1,
			source: "<fvl-search-select\n   v-model=\"form.genre\"\n   :options=\"genreOptions\"\n   :search-keys=\"['name']\"\n   option-key=\"name\"\n   option-value=\"name\"\n   name=\"genre\"\n   label=\"Choose any genre\"\n   placeholder=\"Select...\"\n/>\n"
		};
	}
}, QD = { class: "mb-16" };
function $D(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-search-select"), c = B("source-box"), l = B("fvl-form");
	return H(), U("div", QD, [t[2] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [K(" Select with Search "), W("a", {
		href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/SearchSelect.vue",
		target: "_blank",
		class: "float-right text-gray-600 hover:text-teal-500 text-xs"
	}, "Full Source Code")], -1), G(l, {
		data: i.form,
		url: "/select",
		class: "relative"
	}, {
		default: z(() => [
			G(o, { onToggle: t[0] ||= (e) => i.showSource = !i.showSource }),
			G(s, {
				modelValue: i.form.genre,
				"onUpdate:modelValue": t[1] ||= (e) => i.form.genre = e,
				options: i.genreOptions,
				"search-keys": ["name"],
				"option-key": "name",
				"option-value": "name",
				name: "genre",
				label: "Choose any genre",
				placeholder: "Select..."
			}, null, 8, ["modelValue", "options"]),
			G(c, {
				"show-source": i.showSource,
				source: i.source
			}, null, 8, ["show-source", "source"])
		]),
		_: 1
	}, 8, ["data"])]);
}
var eO = /*#__PURE__*/ Y(ZD, [["render", $D]]), tO = {
	components: {
		FvlForm: c_,
		FvlSearchSelect: kS,
		SourceToggle: KD,
		SourceBox: XD
	},
	data() {
		return {
			optionsUrl: "https://5c113d7d7e18800013bc38d1.mockapi.io/api/v1/users",
			form: { user: null },
			showSource: !1,
			source: "<fvl-search-select\n   v-model=\"form.user\"\n   :search-keys=\"['name']\"\n   :lazy-load=\"true\"\n   options-url=\"https://jsonplaceholder.typicode.com/users\"\n   option-key=\"id\"\n   option-value=\"name\"\n   name=\"user\"\n   label=\"Select a user\"\n   placeholder=\"Select user...\"\n/>\n"
		};
	}
}, nO = { class: "mb-16" };
function rO(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-search-select"), c = B("source-box"), l = B("fvl-form");
	return H(), U("div", nO, [t[2] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [K(" Get Options from Remote URL "), W("a", {
		href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/RemoteSearchSelect.vue",
		target: "_blank",
		class: "float-right text-gray-600 hover:text-teal-500 text-xs"
	}, "Full Source Code")], -1), G(l, {
		data: i.form,
		url: "/select",
		class: "relative"
	}, {
		default: z(() => [
			G(o, { onToggle: t[0] ||= (e) => i.showSource = !i.showSource }),
			G(s, {
				modelValue: i.form.user,
				"onUpdate:modelValue": t[1] ||= (e) => i.form.user = e,
				"search-keys": ["name"],
				"lazy-load": !0,
				"select-first": !0,
				"options-url": i.optionsUrl,
				"option-key": "id",
				"option-value": "name",
				name: "user",
				label: "Select a user",
				placeholder: "Select user..."
			}, null, 8, ["modelValue", "options-url"]),
			G(c, {
				"show-source": i.showSource,
				source: i.source
			}, null, 8, ["show-source", "source"])
		]),
		_: 1
	}, 8, ["data"])]);
}
var iO = /*#__PURE__*/ Y(tO, [["render", rO]]), aO = {
	components: {
		FvlForm: c_,
		FvlSearchSelect: kS,
		SourceToggle: KD,
		SourceBox: XD
	},
	data() {
		return {
			form: { user: null },
			showSource: !1,
			source: "<fvl-search-select\n   v-model=\"form.user\"\n   :search-keys=\"['search']\"\n   :search-remote=\"true\"\n   :lazy-load=\"true\"\n   options-url=\"https://5c113d7d7e18800013bc38d1.mockapi.io/api/v1/users\"\n   option-key=\"id\"\n   option-value=\"name\"\n   name=\"user\"\n   label=\"Select a user\"\n   placeholder=\"Select user...\"\n/>\n"
		};
	}
}, oO = { class: "mb-16" };
function sO(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-search-select"), c = B("source-box"), l = B("fvl-form");
	return H(), U("div", oO, [t[2] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [K(" Get Options from Remote and Search via API request "), W("a", {
		href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/RemoteApiSearchSelect.vue",
		target: "_blank",
		class: "float-right text-gray-600 hover:text-teal-500 text-xs"
	}, "Full Source Code")], -1), G(l, {
		data: i.form,
		url: "/select",
		class: "relative"
	}, {
		default: z(() => [
			G(o, { onToggle: t[0] ||= (e) => i.showSource = !i.showSource }),
			G(s, {
				modelValue: i.form.user,
				"onUpdate:modelValue": t[1] ||= (e) => i.form.user = e,
				"search-keys": ["search"],
				"search-remote": !0,
				"lazy-load": !0,
				"options-url": "https://5c113d7d7e18800013bc38d1.mockapi.io/api/v1/users",
				"option-key": "id",
				"option-value": "name",
				name: "user",
				label: "Select a user",
				placeholder: "Select user..."
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource,
				source: i.source
			}, null, 8, ["show-source", "source"])
		]),
		_: 1
	}, 8, ["data"])]);
}
var cO = /*#__PURE__*/ Y(aO, [["render", sO]]), lO = {
	components: {
		FvlForm: c_,
		FvlSearchSelect: kS,
		SourceToggle: KD,
		SourceBox: XD
	},
	data() {
		return {
			form: { user: 3 },
			disabledOptions: ["1", "2"],
			showSource: !1,
			source: "<fvl-search-select\n   v-model=\"form.user\"\n   :search-keys=\"['search']\"\n   :search-remote=\"true\"\n   :lazy-load=\"true\"\n   options-url=\"https://5c113d7d7e18800013bc38d1.mockapi.io/api/v1/users\"\n   option-key=\"id\"\n   option-value=\"name\"\n   :disabled-options=\"[1,2]\"\n   name=\"user\"\n   label=\"Select a user\"\n   placeholder=\"Select user...\"\n/>\n"
		};
	}
}, uO = { class: "mb-16" };
function dO(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-search-select"), c = B("source-box"), l = B("fvl-form");
	return H(), U("div", uO, [t[2] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [K(" Pass array of disabled options "), W("a", {
		href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/RemoteApiSearchSelect.vue",
		target: "_blank",
		class: "float-right text-gray-600 hover:text-teal-500 text-xs"
	}, "Full Source Code")], -1), G(l, {
		data: i.form,
		url: "/select",
		class: "relative"
	}, {
		default: z(() => [
			G(o, { onToggle: t[0] ||= (e) => i.showSource = !i.showSource }),
			G(s, {
				modelValue: i.form.user,
				"onUpdate:modelValue": t[1] ||= (e) => i.form.user = e,
				"search-keys": ["search"],
				"search-remote": !0,
				"lazy-load": !0,
				"options-url": "https://5c113d7d7e18800013bc38d1.mockapi.io/api/v1/users",
				"option-key": "id",
				"option-value": "name",
				"disabled-options": i.disabledOptions,
				name: "user",
				label: "Select a user",
				placeholder: "Select user..."
			}, null, 8, ["modelValue", "disabled-options"]),
			G(c, {
				"show-source": i.showSource,
				source: i.source
			}, null, 8, ["show-source", "source"])
		]),
		_: 1
	}, 8, ["data"])]);
}
//#endregion
//#region src/examples/AdvancedSelects.vue
var fO = { components: {
	SearchSelect: eO,
	RemoteSearchSelect: iO,
	RemoteApiSearchSelect: cO,
	RemoteApiSearchWithDisabledOptionsSelect: /* @__PURE__ */ Y(lO, [["render", dO]])
} };
function pO(e, t, n, r, i, a) {
	let o = B("search-select"), s = B("remote-search-select"), c = B("remote-api-search-select"), l = B("remote-api-search-with-disabled-options-select");
	return H(), U("div", null, [
		G(o),
		G(s),
		G(c),
		G(l)
	]);
}
var mO = /*#__PURE__*/ Y(fO, [["render", pO]]), hO = {
	components: {
		FvlForm: c_,
		FvlInput: b_,
		FvlTextarea: D_,
		FvlCheckbox: fC,
		FvlRadio: oC,
		FvlSelect: I_,
		FvlTextSwitch: DC,
		FvlSwitch: vC,
		FvlSlider: LC,
		FvlColorPicker: FT,
		FvlSubmit: VE,
		SourceToggle: KD,
		SourceBox: XD
	},
	data() {
		return {
			form: {
				name: "",
				text: "",
				password: "",
				color: "",
				option: "",
				agree: !1,
				switch: !1,
				textSwitch: !1,
				slider: "0",
				colorPicker: "#C75454"
			},
			showSource: "",
			source: {
				name: "<fvl-input\n     label=\"Name\"\n     name=\"name\"\n     type=\"text\"\n     autocomplete=\"name\"\n     v-model=\"form.name\"\n     placeholder=\"Type your name\"\n/>",
				text: "<fvl-textarea\n     label=\"Text\"\n     name=\"text\"\n     v-model=\"form.text\"\n     placeholder=\"Type your story...\"\n/>",
				password: "<fvl-input\n    label=\"Password\"\n    name=\"password\"\n    type=\"password\"\n    autocomplete=\"new-password\"\n    v-model=\"form.password\"\n    placeholder=\"Type password\"\n    class=\"w-1/2 relative\"\n    fieldClass=\"pr-8\"\n>\n    <!-- Optional Password Meter -->\n    <template #hint>\n    <div class=\"absolute right-0 top-0 mt-12 mr-4\">\n        <span v-if=\"form.password.length > 0 &&\n                    form.password.length < 6\">😔</span>\n        <span v-if=\"form.password.length >= 6 &&\n                    form.password.length < 10\">😌</span>\n        <span v-if=\"form.password.length >= 10 &&\n                    form.password.length < 15\">😃</span>\n        <span v-if=\"form.password.length >= 15\">😍</span>\n    </div>\n    </template>\n</fvl-input>\n",
				slider: "<fvl-slider\n    label=\"Slider\"\n    name=\"slider\"\n    value-position=\"left\"\n    v-model=\"form.slider\"\n    class=\"w-full lg:w-1/2 relative\"\n/>\n",
				colorpicker: "<fvl-color-picker\n    label=\"Color\"\n    name=\"color\"\n    format=\"hex\"\n    v-model=\"form.color\"\n    class=\"w-full lg:w-1/2\"\n/>\n",
				color: "<fvl-select\n    label=\"Select your favorite color\"\n    name=\"color\"\n    placeholder=\"-- Select any color --\"\n    :allowEmpty=\"true\"\n    :options=\"{'#ffffff': 'White', '#000000': 'Black', 'blue': 'Blue', 'red': 'Red'}\"\n    v-model=\"form.color\"\n    class=\"w-1/2\"\n/>\n",
				option: "<fvl-radio\n    label=\"Select any option\"\n    name=\"option\"\n    :options=\"{'opt1': 'Option 1', 'opt2': 'Option 2', 'opt3': 'Option 3'}\"\n    v-model=\"form.option\"\n/>\n",
				agree: "<fvl-checkbox\n    label=\"I agree with your terms of use\"\n    name=\"agree\"\n    v-model=\"form.agree\"\n/>",
				switch: "<fvl-switch\n    label=\"Enable this feature\"\n    name=\"switch\"\n    v-model=\"form.switch\"\n/>",
				textSwitch: "<fvl-text-switch\n    name=\"textswitch\"\n    :options=\"['Private', 'Public']\"\n    v-model=\"form.textswitch\"\n/>"
			}
		};
	},
	methods: { toggleSource(e) {
		this.showSource = this.showSource == e ? "" : e;
	} }
}, gO = { class: "mb-16" }, _O = { class: "absolute right-0 top-0 mt-11 mr-4" }, vO = { key: 0 }, yO = { key: 1 }, bO = { key: 2 }, xO = { key: 3 };
function SO(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-input"), c = B("source-box"), l = B("fvl-textarea"), u = B("fvl-slider"), d = B("fvl-color-picker"), f = B("fvl-select"), p = B("fvl-radio"), m = B("fvl-checkbox"), h = B("fvl-switch"), g = B("fvl-text-switch"), _ = B("fvl-submit"), v = B("fvl-form");
	return H(), U("div", gO, [t[21] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [K(" Basic Form "), W("a", {
		class: "float-right text-gray-600 hover:text-teal-500 text-xs",
		href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/BasicForm.vue",
		target: "_blank"
	}, "Full Source Code")], -1), G(v, {
		data: i.form,
		class: "relative",
		url: "/basic",
		multipart: ""
	}, {
		default: z(() => [
			G(o, { onToggle: t[0] ||= (e) => a.toggleSource("name") }),
			G(s, {
				modelValue: i.form.name,
				"onUpdate:modelValue": t[1] ||= (e) => i.form.name = e,
				autocomplete: "name",
				label: "Name",
				name: "name",
				placeholder: "Type your name",
				type: "text"
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource == "name",
				source: i.source.name
			}, null, 8, ["show-source", "source"]),
			G(o, { onToggle: t[2] ||= (e) => a.toggleSource("text") }),
			G(l, {
				modelValue: i.form.text,
				"onUpdate:modelValue": t[3] ||= (e) => i.form.text = e,
				label: "Text",
				name: "text",
				placeholder: "Type your story..."
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource == "text",
				source: i.source.text
			}, null, 8, ["show-source", "source"]),
			G(o, { onToggle: t[4] ||= (e) => a.toggleSource("password") }),
			G(s, {
				modelValue: i.form.password,
				"onUpdate:modelValue": t[5] ||= (e) => i.form.password = e,
				autocomplete: "new-password",
				class: "w-full lg:w-1/2 relative",
				"field-class": "pr-8",
				label: "Password",
				name: "password",
				placeholder: "Type password",
				type: "password"
			}, {
				hint: z(() => [W("div", _O, [G(Xs, { name: "slide-down" }, {
					default: z(() => [i.form.password.length > 0 && i.form.password.length < 6 ? (H(), U("span", vO, "😔")) : i.form.password.length < 10 ? (H(), U("span", yO, "😌")) : i.form.password.length < 15 ? (H(), U("span", bO, "😃")) : (H(), U("span", xO, "😍"))]),
					_: 1
				})])]),
				_: 1
			}, 8, ["modelValue"]),
			G(o, { onToggle: t[6] ||= (e) => a.toggleSource("slider") }),
			G(u, {
				modelValue: i.form.slider,
				"onUpdate:modelValue": t[7] ||= (e) => i.form.slider = e,
				"value-position": "left",
				class: "w-full lg:w-1/2",
				label: "Slider",
				name: "slider"
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource == "slider",
				source: i.source.slider
			}, null, 8, ["show-source", "source"]),
			G(o, { onToggle: t[8] ||= (e) => a.toggleSource("colorpicker") }),
			G(d, {
				modelValue: i.form.colorPicker,
				"onUpdate:modelValue": t[9] ||= (e) => i.form.colorPicker = e,
				class: "w-full lg:w-1/2",
				"field-class": "w-40",
				format: "hex",
				label: "Color Picker",
				name: "colorpicker"
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource == "colorpicker",
				source: i.source.colorpicker
			}, null, 8, ["show-source", "source"]),
			G(c, {
				"show-source": i.showSource == "password",
				source: i.source.password
			}, null, 8, ["show-source", "source"]),
			G(o, { onToggle: t[10] ||= (e) => a.toggleSource("color") }),
			G(f, {
				modelValue: i.form.color,
				"onUpdate:modelValue": t[11] ||= (e) => i.form.color = e,
				"allow-empty": !0,
				options: {
					"#ffffff": "White",
					"#000000": "Black",
					blue: "Blue",
					red: "Red"
				},
				class: "w-full lg:w-1/2",
				label: "Select your favorite color",
				name: "color",
				placeholder: "-- Select any color --"
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource == "color",
				source: i.source.color
			}, null, 8, ["show-source", "source"]),
			G(o, { onToggle: t[12] ||= (e) => a.toggleSource("option") }),
			G(p, {
				modelValue: i.form.option,
				"onUpdate:modelValue": t[13] ||= (e) => i.form.option = e,
				options: {
					opt1: "Option 1",
					opt2: "Option 2",
					opt3: "Option 3"
				},
				class: "w-full lg:w-1/2",
				label: "Select any option",
				name: "option"
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource == "option",
				source: i.source.option
			}, null, 8, ["show-source", "source"]),
			G(o, { onToggle: t[14] ||= (e) => a.toggleSource("agree") }),
			G(m, {
				modelValue: i.form.agree,
				"onUpdate:modelValue": t[15] ||= (e) => i.form.agree = e,
				class: "w-full lg:w-1/2",
				label: "I agree with your terms of use",
				name: "agree"
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource == "agree",
				source: i.source.agree
			}, null, 8, ["show-source", "source"]),
			G(o, { onToggle: t[16] ||= (e) => a.toggleSource("switch") }),
			G(h, {
				modelValue: i.form.switch,
				"onUpdate:modelValue": t[17] ||= (e) => i.form.switch = e,
				class: "w-full lg:w-1/2",
				label: "Enable this feature",
				name: "switch"
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource == "switch",
				source: i.source.switch
			}, null, 8, ["show-source", "source"]),
			G(o, { onToggle: t[18] ||= (e) => a.toggleSource("textSwitch") }),
			G(g, {
				modelValue: i.form.textSwitch,
				"onUpdate:modelValue": t[19] ||= (e) => i.form.textSwitch = e,
				class: "w-auto",
				options: ["Private", "Public"],
				name: "textswitch"
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource == "textSwitch",
				source: i.source.textSwitch
			}, null, 8, ["show-source", "source"]),
			G(_, null, {
				default: z(() => [...t[20] ||= [K("Validate", -1)]]),
				_: 1
			})
		]),
		_: 1
	}, 8, ["data"])]);
}
var CO = /*#__PURE__*/ Y(hO, [["render", SO]]), wO = {
	components: {
		FvlForm: c_,
		FvlDatePicker: ND,
		FvlDatePickerExtended: UD,
		SourceToggle: KD,
		SourceBox: XD
	},
	data() {
		return {
			form: {
				date: null,
				daterange: null,
				range: {
					start: "",
					end: ""
				},
				time: null,
				datetime: null
			},
			showDatePickerSource: !1,
			datePickerSource: "<fvl-date-picker\n   v-model=\"form.date\"\n   name=\"startdate\"\n   label=\"Select a date\"\n   placeholder=\"Select a date\"\n/>\n",
			showRangePickerSource: !1,
			rangePickerSource: "<fvl-date-picker\n   v-model:start=\"form.start_date\"\n   v-model:end=\"form.end_date\"\n   name=\"daterange\"\n   label=\"Date Range Picker\"\n   placeholder=\"Select a range\"\n   :config=\"{mode: 'range'}\"\n/>\n",
			showPickerExtendedSource: !1,
			pickerExtendedSource: "<fvl-date-picker-extended\n   v-model:start=\"form.start_date\"\n   v-model:end=\"form.end_date\"\n   name=\"daterange\"\n   label=\"Date Range Picker\"\n   placeholder=\"Select a range\"\n/>\n",
			showTimePickerSource: !1,
			timePickerSource: "<fvl-date-picker\n   v-model=\"form.time\"\n   name=\"daterange\"\n   label=\"Time Picker\"\n   placeholder=\"00:00\"\n   :config=\"{mode: 'time'}\"\n/>\n",
			showDateTimePickerSource: !1,
			dateTimePickerSource: "<fvl-date-picker\n   v-model=\"form.datetime\"\n   name=\"datetime\"\n   label=\"Date & Time Picker\"\n   placeholder=\"YYYY-MM-DD 00:00\"\n   :config=\"{enableTime: true}\"\n/>\n"
		};
	}
}, TO = { class: "mb-16" };
function EO(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-date-picker"), c = B("source-box"), l = B("fvl-date-picker-extended"), u = B("fvl-form");
	return H(), U("div", TO, [t[11] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [
		K(" Date Picker ( "),
		W("a", {
			class: "text-blue-500",
			href: "https://flatpickr.js.org/",
			target: "_blank",
			rel: "nofollow"
		}, "Flatpickr"),
		K(") "),
		W("a", {
			href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/datepicker/DatePicker.vue",
			target: "_blank",
			class: "float-right text-gray-600 hover:text-teal-500 text-xs"
		}, "Full Source Code")
	], -1), G(u, {
		data: i.form,
		url: "/datepicker",
		class: "relative"
	}, {
		default: z(() => [
			G(o, { onToggle: t[0] ||= (e) => i.showDatePickerSource = !i.showDatePickerSource }),
			G(s, {
				modelValue: i.form.date,
				"onUpdate:modelValue": t[1] ||= (e) => i.form.date = e,
				name: "datepicker",
				label: "Single Date Picker",
				placeholder: "Select a date",
				min: "2019-12-12"
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showDatePickerSource,
				source: i.datePickerSource
			}, null, 8, ["show-source", "source"]),
			G(o, { onToggle: t[2] ||= (e) => i.showRangePickerSource = !i.showRangePickerSource }),
			G(s, {
				modelValue: i.form.daterange,
				"onUpdate:modelValue": t[3] ||= (e) => i.form.daterange = e,
				name: "daterangepicker",
				label: "Date Rage Picker",
				placeholder: "Select a date range",
				config: { mode: "range" }
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showRangePickerSource,
				source: i.rangePickerSource
			}, null, 8, ["show-source", "source"]),
			G(o, { onToggle: t[4] ||= (e) => i.showPickerExtendedSource = !i.showPickerExtendedSource }),
			G(l, {
				start: i.form.range.start,
				"onUpdate:start": t[5] ||= (e) => i.form.range.start = e,
				end: i.form.range.end,
				"onUpdate:end": t[6] ||= (e) => i.form.range.end = e,
				name: "daterangepicker",
				label: "Extended Date Rage Picker",
				placeholder: "Select a date range"
			}, null, 8, ["start", "end"]),
			G(c, {
				"show-source": i.showPickerExtendedSource,
				source: i.pickerExtendedSource
			}, null, 8, ["show-source", "source"]),
			G(o, { onToggle: t[7] ||= (e) => i.showTimePickerSource = !i.showTimePickerSource }),
			G(s, {
				modelValue: i.form.time,
				"onUpdate:modelValue": t[8] ||= (e) => i.form.time = e,
				name: "timepicker",
				label: "Time picker",
				placeholder: "00:00",
				config: { mode: "time" }
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showTimePickerSource,
				source: i.timePickerSource
			}, null, 8, ["show-source", "source"]),
			G(o, { onToggle: t[9] ||= (e) => i.showDateTimePickerSource = !i.showDateTimePickerSource }),
			G(s, {
				modelValue: i.form.datetime,
				"onUpdate:modelValue": t[10] ||= (e) => i.form.datetime = e,
				name: "Datetimepicker",
				label: "Date & Time picker",
				placeholder: "YYYY-MM-DD 00:00",
				config: { enableTime: !0 }
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showDateTimePickerSource,
				source: i.dateTimePickerSource
			}, null, 8, ["show-source", "source"])
		]),
		_: 1
	}, 8, ["data"])]);
}
//#endregion
//#region src/examples/DateTimePickers.vue
var DO = { components: { DatePicker: /* @__PURE__ */ Y(wO, [["render", EO]]) } };
function OO(e, t, n, r, i, a) {
	let o = B("date-picker");
	return H(), U("div", null, [G(o)]);
}
var kO = /*#__PURE__*/ Y(DO, [["render", OO]]), AO = {
	components: {
		FvlForm: c_,
		FvlDropzone: PE,
		FvlSubmit: VE,
		SourceToggle: KD,
		SourceBox: XD
	},
	data() {
		return {
			form: { media: [] },
			showSource: !1,
			source: "<fvl-dropzone\n    label=\"Media\"\n    name=\"media\"\n    v-model=\"form.media\"\n/>\n"
		};
	}
}, jO = { class: "mb-16" };
function MO(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-dropzone"), c = B("source-box"), l = B("fvl-submit"), u = B("fvl-form");
	return H(), U("div", jO, [t[3] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [K(" Dropzone "), W("a", {
		href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/Dropzone.vue",
		target: "_blank",
		class: "float-right text-gray-600 hover:text-teal-500 text-xs"
	}, "Full Source Code")], -1), G(u, {
		data: i.form,
		url: "/upload",
		multipart: "",
		class: "relative"
	}, {
		default: z(() => [
			G(o, { onToggle: t[0] ||= (e) => i.showSource = !i.showSource }),
			G(s, {
				modelValue: i.form.media,
				"onUpdate:modelValue": t[1] ||= (e) => i.form.media = e,
				label: "Media",
				name: "media"
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource,
				source: i.source
			}, null, 8, ["show-source", "source"]),
			G(l, { loader: "" }, {
				default: z(() => [...t[2] ||= [K(" Upload ", -1)]]),
				_: 1
			})
		]),
		_: 1
	}, 8, ["data"])]);
}
var NO = /*#__PURE__*/ Y(AO, [["render", MO]]), PO = {
	components: {
		FvlForm: c_,
		FvlMultiFile: yE,
		FvlSubmit: VE,
		SourceToggle: KD,
		SourceBox: XD
	},
	data() {
		return {
			form: { gallery: [] },
			showSource: !1,
			source: "<fvl-multi-file\n    label=\"Gallery\"\n    name=\"gallery\"\n    v-model=\"form.gallery\"\n/>\n"
		};
	}
}, FO = { class: "mb-16" };
function IO(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-multi-file"), c = B("source-box"), l = B("fvl-submit"), u = B("fvl-form");
	return H(), U("div", FO, [t[4] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [K(" Multi File Upload "), W("a", {
		href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/MultiFileUpload.vue",
		target: "_blank",
		class: "float-right text-gray-600 hover:text-teal-500 text-xs"
	}, "Full Source Code")], -1), G(u, {
		data: i.form,
		url: "/upload",
		multipart: "",
		class: "relative"
	}, {
		default: z(() => [
			G(o, { onToggle: t[0] ||= (e) => i.showSource = !i.showSource }),
			G(s, {
				modelValue: i.form.gallery,
				"onUpdate:modelValue": t[1] ||= (e) => i.form.gallery = e,
				label: "Gallery",
				name: "gallery"
			}, {
				button: z(() => [...t[2] ||= [W("svg", {
					class: "fill-current text-white mr-2",
					width: "18",
					height: "16",
					xmlns: "http://www.w3.org/2000/svg"
				}, [W("g", { "fill-rule": "nonzero" }, [W("path", { d: "M17.0591 6.85227c-.47046 0-.83865.36818-.83865.83864v5.76818H1.7591V7.67045c0-.47045-.36818-.83863-.83864-.83863-.47045 0-.83863.36818-.83863.83863v6.62728c0 .47045.36818.83863.83863.83863H17.0591c.47046 0 .83864-.36818.83864-.83863V7.67045c0-.45-.36818-.81818-.83864-.81818z" }), W("path", { d: "M9.55227.24545C9.53182.225 9.51137.20455 9.47045.1841 9.45.1841 9.45.16364 9.4091.1432 9.28636.0409 9.12273 0 8.9591 0c-.10227 0-.225.02045-.32727.06136S8.42727.16364 8.34545.225l-4.0909 4.13182c-.16364.16363-.24546.38863-.24546.61363 0 .225.10227.4091.24546.55228.16363.16363.34772.24545.59318.24545.24545 0 .45-.08182.59318-.24545L8.1 2.84318v8.5091c0 .47045.36818.83863.83864.83863.47045 0 .83863-.36818.83863-.83864V2.84318l2.72046 2.67955c.16363.16363.34772.24545.59318.24545.24545 0 .45-.08182.59318-.24545.16364-.16364.24546-.38864.24546-.61364 0-.225-.10228-.40909-.24546-.55227L9.55227.24545z" })])], -1), W("span", null, "Add Files", -1)]]),
				_: 1
			}, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource,
				source: i.source
			}, null, 8, ["show-source", "source"]),
			G(l, { loader: "" }, {
				default: z(() => [...t[3] ||= [K(" Upload ", -1)]]),
				_: 1
			})
		]),
		_: 1
	}, 8, ["data"])]);
}
var LO = /*#__PURE__*/ Y(PO, [["render", IO]]), RO = {
	components: {
		FvlForm: c_,
		FvlMultiCheckbox: VT,
		SourceToggle: KD,
		SourceBox: XD
	},
	data() {
		return {
			form: { permissions: [] },
			permissionsStructure: [{
				name: "all",
				label: "User permissions",
				checked: !1,
				options: [
					{
						name: "create",
						label: "Create",
						checked: !1
					},
					{
						name: "update",
						label: "Update",
						checked: !1
					},
					{
						name: "delete",
						label: "Delete",
						checked: !1
					}
				]
			}],
			showSource: "",
			source: { permissions: "<fvl-multi-checkbox\n    label=\"Set your permissions\"\n    name=\"permissions\"\n    v-model=\"form.permissions\"\n/>" }
		};
	},
	methods: { toggleSource(e) {
		this.showSource = this.showSource == e ? "" : e;
	} }
}, zO = { class: "mb-16" };
function BO(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-multi-checkbox"), c = B("source-box"), l = B("fvl-form");
	return H(), U("div", zO, [t[3] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [K(" Nested Checkbox "), W("a", {
		class: "float-right text-gray-600 hover:text-teal-500 text-xs",
		href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/NestedCheckbox.vue",
		target: "_blank"
	}, "Full Source Code")], -1), G(l, {
		data: i.form,
		class: "relative",
		url: "/basic"
	}, {
		default: z(() => [
			G(o, {
				class: "-mt-1",
				onToggle: t[0] ||= (e) => a.toggleSource("permissions")
			}),
			G(s, {
				modelValue: i.form.permissions,
				"onUpdate:modelValue": t[1] ||= (e) => i.form.permissions = e,
				groups: i.permissionsStructure,
				"onUpdate:groups": t[2] ||= (e) => i.permissionsStructure = e,
				label: "Set your permissions",
				name: "permissions"
			}, null, 8, ["modelValue", "groups"]),
			G(c, {
				"show-source": i.showSource == "permissions",
				source: i.source.permissions
			}, null, 8, ["show-source", "source"])
		]),
		_: 1
	}, 8, ["data"])]);
}
var VO = /*#__PURE__*/ Y(RO, [["render", BO]]), HO = {
	components: {
		FvlForm: c_,
		FvlInput: b_,
		FvlTextarea: D_,
		FvlRadio: oC,
		FvlSubmit: VE,
		SourceToggle: KD,
		SourceBox: XD
	},
	props: {
		initFullname: {
			type: String,
			default: ""
		},
		initBio: {
			type: String,
			default: ""
		},
		initPet: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			form: {
				fullname: this.initFullname,
				bio: this.initBio,
				pet: this.initPet
			},
			showSource: "",
			source: {
				fullname: "<fvl-input\n     label=\"Full Name\"\n     name=\"fullname\"\n     type=\"text\"\n     autocomplete=\"name\"\n     v-model=\"form.fullname\"\n     placeholder=\"Type your full name\"\n/>",
				bio: "<fvl-textarea\n     label=\"Bio\"\n     name=\"bio\"\n     v-model=\"form.bio\"\n     placeholder=\"Type your story...\"\n/>",
				pet: "<fvl-radio\n    label=\"Select any option\"\n    name=\"pet\"\n    :options=\"{'cat': 'Cat', 'dog': 'Dog'}\"\n    v-model=\"form.pet\"\n/>\n"
			}
		};
	},
	methods: { toggleSource(e) {
		this.showSource = this.showSource == e ? "" : e;
	} }
}, UO = { class: "mb-16" };
function WO(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-input"), c = B("source-box"), l = B("fvl-textarea"), u = B("fvl-radio"), d = B("fvl-submit"), f = B("fvl-form");
	return H(), U("div", UO, [t[6] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [K(" Prefilled Form "), W("a", {
		class: "float-right text-gray-600 hover:text-teal-500 text-xs",
		href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/PrefilledForm.vue",
		target: "_blank"
	}, "Full Source Code")], -1), G(f, {
		data: i.form,
		class: "relative",
		url: "/update"
	}, {
		default: z(() => [
			G(o, { onToggle: t[0] ||= (e) => a.toggleSource("fullname") }),
			G(s, {
				modelValue: i.form.fullname,
				"onUpdate:modelValue": t[1] ||= (e) => i.form.fullname = e,
				autocomplete: "fullname",
				label: "Full Name",
				name: "fullname",
				placeholder: "Type your full name",
				type: "text"
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource == "fullname",
				source: i.source.fullname
			}, null, 8, ["show-source", "source"]),
			G(o, { onToggle: t[2] ||= (e) => a.toggleSource("bio") }),
			G(l, {
				modelValue: i.form.bio,
				"onUpdate:modelValue": t[3] ||= (e) => i.form.bio = e,
				label: "Bio",
				name: "bio",
				placeholder: "Type your story..."
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource == "bio",
				source: i.source.bio
			}, null, 8, ["show-source", "source"]),
			G(u, {
				modelValue: i.form.pet,
				"onUpdate:modelValue": t[4] ||= (e) => i.form.pet = e,
				options: {
					cat: "Cat",
					dog: "Dog"
				},
				class: "w-full lg:w-1/2",
				label: "Favorite pet",
				name: "pet"
			}, null, 8, ["modelValue"]),
			G(c, {
				"show-source": i.showSource == "pet",
				source: i.source.pet
			}, null, 8, ["show-source", "source"]),
			G(d, null, {
				default: z(() => [...t[5] ||= [K("Validate", -1)]]),
				_: 1
			})
		]),
		_: 1
	}, 8, ["data"])]);
}
var GO = /*#__PURE__*/ Y(HO, [["render", WO]]), KO = {
	components: {
		FvlForm: c_,
		FvlTagSelect: ZS,
		SourceToggle: KD,
		SourceBox: XD
	},
	data() {
		return {
			form: { tags: null },
			tagsOptions: [
				{ name: "Cloud" },
				{ name: "Autocompletion" },
				{ name: "Remote list" },
				{ name: "Fast" },
				{ name: "Nice" },
				{ name: "Cool" },
				{ name: "Vue" },
				{ name: "Advanced" }
			],
			showSource: !1,
			source: "<fvl-tag-select\n   v-model=\"form.tags\"\n   :options=\"tagsOptions\"\n   :search-keys=\"['name']\"\n   :allow-new=\"true\"\n   option-key=\"name\"\n   option-value=\"name\"\n   name=\"tags\"\n   label=\"Choose some tags\"\n   placeholder=\"Select...\"\n/>\n"
		};
	}
}, qO = { class: "mb-16" };
function JO(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-tag-select"), c = B("source-box"), l = B("fvl-form");
	return H(), U("div", qO, [t[2] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [K(" Select existing Tags only "), W("a", {
		href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/TagSelect.vue",
		target: "_blank",
		class: "float-right text-gray-600 hover:text-teal-500 text-xs"
	}, "Full Source Code")], -1), G(l, {
		data: i.form,
		url: "/select",
		class: "relative"
	}, {
		default: z(() => [
			G(o, { onToggle: t[0] ||= (e) => i.showSource = !i.showSource }),
			G(s, {
				modelValue: i.form.tags,
				"onUpdate:modelValue": t[1] ||= (e) => i.form.tags = e,
				options: i.tagsOptions,
				"search-keys": ["name"],
				"option-key": "name",
				"option-value": "name",
				name: "tags",
				label: "Tags",
				placeholder: "Select some tags..."
			}, null, 8, ["modelValue", "options"]),
			G(c, {
				"show-source": i.showSource,
				source: i.source
			}, null, 8, ["show-source", "source"])
		]),
		_: 1
	}, 8, ["data"])]);
}
var YO = /*#__PURE__*/ Y(KO, [["render", JO]]), XO = {
	components: {
		FvlForm: c_,
		FvlTagSelect: ZS,
		SourceToggle: KD,
		SourceBox: XD
	},
	data() {
		return {
			form: { tags: null },
			tagsOptions: [
				{ name: "Cloud" },
				{ name: "Autocompletion" },
				{ name: "Remote list" },
				{ name: "Fast" },
				{ name: "Nice" },
				{ name: "Cool" },
				{ name: "Vue" },
				{ name: "Advanced" }
			],
			showSource: !1,
			source: "<fvl-tag-select\n   v-model=\"form.tags\"\n   :options=\"tagsOptions\"\n   :search-keys=\"['name']\"\n   :allow-new=\"true\"\n   :max=\"20\"\n   option-key=\"name\"\n   option-value=\"name\"\n   name=\"tags\"\n   label=\"Choose some tags\"\n   placeholder=\"Select...\"\n/>\n"
		};
	}
}, ZO = { class: "mb-16" };
function QO(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-tag-select"), c = B("source-box"), l = B("fvl-form");
	return H(), U("div", ZO, [t[2] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [K(" Select or add new Tags "), W("a", {
		href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/TagSelect.vue",
		target: "_blank",
		class: "float-right text-gray-600 hover:text-teal-500 text-xs"
	}, "Full Source Code")], -1), G(l, {
		data: i.form,
		url: "/select",
		class: "relative"
	}, {
		default: z(() => [
			G(o, { onToggle: t[0] ||= (e) => i.showSource = !i.showSource }),
			G(s, {
				modelValue: i.form.tags,
				"onUpdate:modelValue": t[1] ||= (e) => i.form.tags = e,
				options: i.tagsOptions,
				"search-keys": ["name"],
				"allow-new": !0,
				max: 20,
				"option-key": "name",
				"option-value": "name",
				name: "tags",
				label: "Tags",
				placeholder: "Add some tags..."
			}, null, 8, ["modelValue", "options"]),
			G(c, {
				"show-source": i.showSource,
				source: i.source
			}, null, 8, ["show-source", "source"])
		]),
		_: 1
	}, 8, ["data"])]);
}
var $O = /*#__PURE__*/ Y(XO, [["render", QO]]), ek = {
	components: {
		FvlForm: c_,
		FvlTagSelect: ZS,
		SourceToggle: KD,
		SourceBox: XD,
		FvlSubmit: VE
	},
	data() {
		return {
			form: { emails: null },
			form2: { emails: ["donotAllowThis@email.com"] },
			emailsOptions: [
				{
					id: 1,
					email: "my@email.com"
				},
				{
					id: 2,
					email: "your@email.com"
				},
				{
					id: 3,
					email: "his@email.com"
				}
			],
			showSource: !1,
			source: "<fvl-tag-select\n   v-model=\"form.emails\"\n   :options=\"emailsOptions\"\n   :search-keys=\"['email']\"\n   :allow-new=\"true\"\n   :max=\"20\"\n   option-key=\"name\"\n   option-value=\"name\"\n   name=\"emails\"\n   label=\"Choose some emails\"\n   placeholder=\"Select...\"\n/>\n"
		};
	}
}, tk = { class: "mb-16" };
function nk(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-tag-select"), c = B("source-box"), l = B("fvl-form"), u = B("fvl-submit");
	return H(), U("div", tk, [
		t[5] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [K(" Select or add new Emails "), W("a", {
			href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/TagSelectOrAddEmail.vue",
			target: "_blank",
			class: "float-right text-gray-600 hover:text-teal-500 text-xs"
		}, "Full Source Code")], -1),
		G(l, {
			data: i.form,
			url: "/select",
			class: "relative"
		}, {
			default: z(() => [
				G(o, { onToggle: t[0] ||= (e) => i.showSource = !i.showSource }),
				G(s, {
					modelValue: i.form.emails,
					"onUpdate:modelValue": t[1] ||= (e) => i.form.emails = e,
					options: i.emailsOptions,
					"search-keys": ["email"],
					"allow-new": !0,
					max: 20,
					type: "email",
					"option-key": "email",
					"option-value": "email",
					name: "emails",
					label: "Send Email To",
					placeholder: "Add some emails..."
				}, null, 8, ["modelValue", "options"]),
				G(c, {
					"show-source": i.showSource,
					source: i.source
				}, null, 8, ["show-source", "source"])
			]),
			_: 1
		}, 8, ["data"]),
		t[6] ||= W("h3", { class: "border-b-2 mb-4 mt-8 -mx-4 p-1 text-gray-800" }, [K(" Throw error on one email address "), W("a", {
			href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/TagSelectOrAddEmail.vue",
			target: "_blank",
			class: "float-right text-gray-600 hover:text-teal-500 text-xs"
		}, "Full Source Code")], -1),
		G(l, {
			data: i.form2,
			url: "/selecterror",
			class: "relative"
		}, {
			default: z(() => [
				G(o, { onToggle: t[2] ||= (e) => i.showSource = !i.showSource }),
				G(s, {
					modelValue: i.form2.emails,
					"onUpdate:modelValue": t[3] ||= (e) => i.form2.emails = e,
					options: i.emailsOptions,
					"search-keys": ["email"],
					"allow-new": !0,
					max: 20,
					type: "email",
					"option-key": "email",
					"option-value": "email",
					name: "emails",
					label: "Send Email To",
					placeholder: "Add some emails..."
				}, null, 8, ["modelValue", "options"]),
				G(u, null, {
					default: z(() => [...t[4] ||= [K("submit", -1)]]),
					_: 1
				}),
				G(c, {
					"show-source": i.showSource,
					source: i.source
				}, null, 8, ["show-source", "source"])
			]),
			_: 1
		}, 8, ["data"])
	]);
}
//#endregion
//#region src/examples/TagForm.vue
var rk = { components: {
	TagSelect: YO,
	TagSelectOrAdd: $O,
	TagSelectOrAddEmail: /* @__PURE__ */ Y(ek, [["render", nk]])
} }, ik = { class: "mb-16" };
function ak(e, t, n, r, i, a) {
	let o = B("tag-select"), s = B("tag-select-or-add"), c = B("tag-select-or-add-email");
	return H(), U("div", ik, [
		G(o),
		G(s),
		G(c)
	]);
}
var ok = /*#__PURE__*/ Y(rk, [["render", ak]]), sk = {
	components: {
		FvlForm: c_,
		FvlFile: ZT,
		SourceToggle: KD,
		SourceBox: XD,
		FvlImage: cE
	},
	data() {
		return {
			form: {
				file: null,
				avatar: "https://www.fakepersongenerator.com/Face/female/female2016102582457221.jpg",
				avatar2: "https://www.fakepersongenerator.com/Face/female/female2016102582457221.jpg",
				customimage: "",
				name: null
			},
			showFileSource: !1,
			fileSource: "<fvl-file\n    label=\"File\"\n    name=\"file\"\n    v-model=\"form.file\"\n/>\n",
			showImageSource: !1,
			imageSource: "<fvl-image\n    label=\"Avatar\"\n    name=\"avatar\"\n    v-model=\"form.avatar\"\n/>\n",
			showImageSource2: !1,
			imageSource2: "<fvl-image\n    label=\"Avatar\"\n    name=\"avatar\"\n    :show-file-name=\"false\"\n    v-model=\"form.avatar\"\n/>\n",
			showImageSource3: !1,
			imageSource3: "<fvl-image\n    v-model=\"form.customimage\"\n    :show-file-name=\"false\"\n    label=\"Image with custom preview and button\"\n    name=\"customimage\"\n    field-class=\"flex-col\"\n  >\n    <template v-slot:preview=\"{ preview, selectImage }\">\n      <div\n        class=\"flex justify-center w-full h-48 flex-shrink-0 shadow rounded-lg bg-gray-200 cursor-pointer\"\n        @click=\"selectImage\"\n      >\n        <img\n          v-if=\"preview.src\"\n          class=\"self-center h-48 rounded-lg w-full object-cover\"\n          :src=\"preview.src\"\n        />\n        <div v-else class=\"self-center text-center\">\n          <svg\n            viewBox=\"0 0 24 24\"\n            width=\"50\"\n            height=\"50\"\n            stroke=\"currentColor\"\n            stroke-width=\"1\"\n            fill=\"none\"\n            stroke-linecap=\"round\"\n            stroke-linejoin=\"round\"\n            class=\"text-gray-400 mx-auto\"\n          >\n            <polyline points=\"16 16 12 12 8 16\" />\n            <line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\" />\n            <path d=\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\" />\n            <polyline points=\"16 16 12 12 8 16\" />\n          </svg>\n          <h2 class=\"mt-2 text-gray-500 font-bold\">Click to select an image</h2>\n        </div>\n      </div>\n    </template>\n    <template v-slot:button-wrapper=\"{ selectImage }\">\n      <button\n        class=\"mt-5 bg-grey-200 text-xs rounded px-4 py-2\"\n        @click=\"selectImage()\"\n      >You can also click me to trigger file selection</button>\n    </template>\n  </fvl-image>"
		};
	}
}, ck = { class: "mb-16" }, lk = ["onClick"], uk = ["src"], dk = {
	key: 1,
	class: "self-center text-center"
}, fk = ["onClick"];
function pk(e, t, n, r, i, a) {
	let o = B("source-toggle"), s = B("fvl-file"), c = B("source-box"), l = B("fvl-form"), u = B("fvl-image");
	return H(), U("div", ck, [
		t[10] ||= W("h3", { class: "border-b-2 mb-4 -mx-4 p-1 text-gray-800" }, [K(" Single File Upload "), W("a", {
			href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/FileUpload.vue",
			target: "_blank",
			class: "float-right text-gray-600 hover:text-teal-500 text-xs"
		}, "Full Source Code")], -1),
		G(l, {
			data: i.form,
			url: "/upload",
			multipart: "",
			class: "relative"
		}, {
			default: z(() => [
				G(o, { onToggle: t[0] ||= (e) => i.showFileSource = !i.showFileSource }),
				G(s, {
					modelValue: i.form.file,
					"onUpdate:modelValue": t[1] ||= (e) => i.form.file = e,
					label: "File",
					name: "file"
				}, {
					button: z(() => [...t[8] ||= [W("svg", {
						class: "fill-current text-white mr-2",
						width: "18",
						height: "16",
						xmlns: "http://www.w3.org/2000/svg"
					}, [W("g", { "fill-rule": "nonzero" }, [W("path", { d: "M17.0591 6.85227c-.47046 0-.83865.36818-.83865.83864v5.76818H1.7591V7.67045c0-.47045-.36818-.83863-.83864-.83863-.47045 0-.83863.36818-.83863.83863v6.62728c0 .47045.36818.83863.83863.83863H17.0591c.47046 0 .83864-.36818.83864-.83863V7.67045c0-.45-.36818-.81818-.83864-.81818z" }), W("path", { d: "M9.55227.24545C9.53182.225 9.51137.20455 9.47045.1841 9.45.1841 9.45.16364 9.4091.1432 9.28636.0409 9.12273 0 8.9591 0c-.10227 0-.225.02045-.32727.06136S8.42727.16364 8.34545.225l-4.0909 4.13182c-.16364.16363-.24546.38863-.24546.61363 0 .225.10227.4091.24546.55228.16363.16363.34772.24545.59318.24545.24545 0 .45-.08182.59318-.24545L8.1 2.84318v8.5091c0 .47045.36818.83863.83864.83863.47045 0 .83863-.36818.83863-.83864V2.84318l2.72046 2.67955c.16363.16363.34772.24545.59318.24545.24545 0 .45-.08182.59318-.24545.16364-.16364.24546-.38864.24546-.61364 0-.225-.10228-.40909-.24546-.55227L9.55227.24545z" })])], -1), W("span", null, "Select File", -1)]]),
					_: 1
				}, 8, ["modelValue"]),
				G(c, {
					"show-source": i.showFileSource,
					source: i.fileSource
				}, null, 8, ["show-source", "source"])
			]),
			_: 1
		}, 8, ["data"]),
		t[11] ||= W("h3", { class: "border-b-2 mb-4 mt-20 -mx-4 p-1 text-gray-800" }, [K(" Image Upload with Preview "), W("a", {
			href: "https://github.com/janiskelemen/formvuelar/blob/master/src/examples/FileUpload.vue",
			target: "_blank",
			class: "float-right text-gray-600 hover:text-teal-500 text-xs"
		}, "Full Source Code")], -1),
		G(l, {
			data: i.form,
			url: "/upload",
			multipart: "",
			class: "relative"
		}, {
			default: z(() => [
				G(o, { onToggle: t[2] ||= (e) => i.showImageSource = !i.showImageSource }),
				G(u, {
					modelValue: i.form.avatar,
					"onUpdate:modelValue": t[3] ||= (e) => i.form.avatar = e,
					label: "Avatar",
					name: "avatar"
				}, null, 8, ["modelValue"]),
				G(c, {
					"show-source": i.showImageSource,
					source: i.imageSource
				}, null, 8, ["show-source", "source"])
			]),
			_: 1
		}, 8, ["data"]),
		G(l, {
			data: i.form,
			url: "/upload",
			multipart: "",
			class: "relative"
		}, {
			default: z(() => [
				G(o, { onToggle: t[4] ||= (e) => i.showImageSource2 = !i.showImageSource2 }),
				G(u, {
					modelValue: i.form.avatar2,
					"onUpdate:modelValue": t[5] ||= (e) => i.form.avatar2 = e,
					"show-file-name": !1,
					label: "Avatar without file name",
					name: "avatar2"
				}, null, 8, ["modelValue"]),
				G(c, {
					"show-source": i.showImageSource2,
					source: i.imageSource2
				}, null, 8, ["show-source", "source"])
			]),
			_: 1
		}, 8, ["data"]),
		G(l, {
			data: i.form,
			url: "/upload",
			multipart: "",
			class: "relative"
		}, {
			default: z(() => [
				G(o, { onToggle: t[6] ||= (e) => i.showImageSource3 = !i.showImageSource3 }),
				G(u, {
					modelValue: i.form.customimage,
					"onUpdate:modelValue": t[7] ||= (e) => i.form.customimage = e,
					"show-file-name": !1,
					label: "Image with custom preview and button",
					name: "customimage",
					"field-class": "flex-col"
				}, {
					preview: z(({ preview: e, selectImage: n }) => [W("div", {
						class: "flex justify-center w-full h-48 flex-shrink-0 shadow rounded-lg bg-gray-200 cursor-pointer",
						onClick: n
					}, [e.src ? (H(), U("img", {
						key: 0,
						class: "self-center h-48 rounded-lg w-full object-cover",
						src: e.src
					}, null, 8, uk)) : (H(), U("div", dk, [...t[9] ||= [W("svg", {
						viewBox: "0 0 24 24",
						width: "50",
						height: "50",
						stroke: "currentColor",
						"stroke-width": "1",
						fill: "none",
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						class: "text-gray-400 mx-auto"
					}, [
						W("polyline", { points: "16 16 12 12 8 16" }),
						W("line", {
							x1: "12",
							y1: "12",
							x2: "12",
							y2: "21"
						}),
						W("path", { d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" }),
						W("polyline", { points: "16 16 12 12 8 16" })
					], -1), W("h2", { class: "mt-2 text-gray-500 font-bold" }, " Click to select an image ", -1)]]))], 8, lk)]),
					"button-wrapper": z(({ selectImage: e }) => [W("button", {
						class: "mt-5 bg-grey-200 text-xs rounded px-4 py-2",
						onClick: (t) => e()
					}, " You can also click me to trigger file selection ", 8, fk)]),
					_: 1
				}, 8, ["modelValue"]),
				G(c, {
					"show-source": i.showImageSource3,
					source: i.imageSource3
				}, null, 8, ["show-source", "source"])
			]),
			_: 1
		}, 8, ["data"])
	]);
}
var mk = /*#__PURE__*/ Y(sk, [["render", pk]]);
//#endregion
//#region src/main.js
kf.registerLanguage("html", Af);
var hk = Of({
	history: Bd(),
	routes: [
		{
			path: "/",
			component: CO
		},
		{
			path: "/prefilled",
			component: GO,
			props: {
				initFullname: "John Doe",
				initBio: "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
				initPet: "dog"
			}
		},
		{
			path: "/advancedselects",
			component: mO
		},
		{
			path: "/tags",
			component: ok
		},
		{
			path: "/nestedcheckbox",
			component: VO
		},
		{
			path: "/upload",
			component: mk
		},
		{
			path: "/multiupload",
			component: LO
		},
		{
			path: "/dropzone",
			component: NO
		},
		{
			path: "/datepicker",
			component: kO
		}
	]
}), gk = (e, t) => {
	let n = e.querySelector("code");
	n && (n.textContent = t.value, n.removeAttribute("data-highlighted"), kf.highlightElement(n));
};
kl(Lf).use(hk).directive("highlightjs", {
	mounted: gk,
	updated: gk
}).mount("#app");
//#endregion
