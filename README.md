# d3.forceBounce

[![NPM](https://nodei.co/npm/d3-force-bounce.png?compact=true)](https://nodei.co/npm/d3-force-bounce/)

An elastic collision force type for the d3-force simulation engine.

This force is similar to [d3.forceCollide](https://github.com/d3/d3-force#forceCollide), but allows for fully elastic collisions that [conserve kinetic energy](https://en.wikipedia.org/wiki/Momentum#Elastic_collisions). This makes <i>d3.forceCollide</i> appropriate for preventing the overlap of nodes, and <i>d3.forceBounce</i> better suited when the intent is to achieve an elastic collision effect, with varying degrees of elasticity (coefficient of restitution).

Here's a [visual comparison](https://bl.ocks.org/vasturiano/ea5f3488bf649fa3a5567dbaef7bfe17) between the two forces.

It can be used, for example to [simulate particle collisions](https://bl.ocks.org/vasturiano/2992bcb530bc2d64519c5b25201492fd) or in a [Newton's cradle](https://bl.ocks.org/vasturiano/0a05e58d5122cde888793c374d587aac).

See also [d3.forceSurface](https://github.com/vasturiano/d3-force-surface).

## Quick start

```
import d3ForceBounce from 'd3-force-bounce';
```
or
```
d3.forceBounce = require('d3-force-bounce');
```
or even
```
<script src="//unpkg.com/d3-force-bounce/dist/d3-force-bounce.min.js"></script>
```
then
```
d3.forceSimulation()
    .nodes(<myNodes>)
    .force('bounce', d3.forceBounce()
        .radius(5)   
    );
```

## API reference

| Method | Description | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------- |
| <b>elasticity</b>([<i>number</i>]) | Getter/setter for every collision's <i>coefficient of restitution</i>, aka <i>elasticity</i>. A value of `1` represents a purely elastic collision with no energy loss, while a `0` will fully eliminate the bounce in the collision direction. Values `>1` can be used to introduce acceleration at each collision. Values `<0` are not recommended. | 1 |
| <b>radius</b>([<i>num</i> or <i>fn</i>]) | Getter/setter for the node object radius accessor function (`fn(node)`) or a constant (`num`) for all nodes. | 1 |
| <b>mass</b>([<i>num</i> or <i>fn</i>]) | Getter/setter for the node object mass accessor function (`fn(node)`) or a constant (`num`) for all nodes. Mass affects the symmetry of the energy transfer between two colliding nodes. By default it is proportional to the node's area. | `Math.pow(radius(node), 2)` |
| <b>onImpact</b>([<i>fn</i>]) | Callback function triggered at every collision, with the signature `onImpact(node1, node2)`  ||
