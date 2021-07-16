// https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects?page=1&tab=votes#tab-top
export const groupBy = function (xs, key) {
	return xs.reduce(function (rv, x) {
		let v = key instanceof Function ? key(x) : x[key];
		let el = rv.find((r) => r && r.key === v);
		if (el) {
			el.values.push(x);
		} else {
			rv.push({ key: v, values: [x] });
		}
		return rv;
	}, []);
}

// https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
export const categorySort = function (a, b) {
	let ca = a.key
	let cb = b.key

	if (ca < cb) return -1
	if (ca > cb) return 1
	return 0
}

export const orderSort = function (a, b) {
	// https://usefulangle.com/post/281/javascript-default-value-if-null-or-undefined
	let na = a.childMdx.frontmatter.order
	let nb = b.childMdx.frontmatter.order

	return na - nb
}