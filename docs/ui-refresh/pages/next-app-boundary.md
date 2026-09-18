# Next.js implementation boundary

Status: inspected, not part of the static-site refresh.

`next-app/app/page.tsx` currently returns null. The audited live site is the root HTML website. Do not build a second competing website or migrate routes as a side effect of this design cleanup. Keep its existing configuration untouched.

If a later request authorizes migration, first read `next-app/AGENTS.md` and its version-specific framework documentation. Inventory static routes, assets, navigation behavior, metadata, forms and hosting constraints; establish a route mapping and parity checks before moving code. Use the shared design system in this folder only after that boundary is explicitly selected. No stock or mockup production is required for the empty app during this task.

