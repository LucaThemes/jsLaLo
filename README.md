# jsLaLo

The easiest and laziest code to achieve lazy load effect on website divs.

## How to use it?

Include **jslalo.js** file in your website header:
```
<script type="text/javascript" src="PATH/TO/jslalo.js"></script>
````

Add **lazy** class to each element that needs to be lazy loaded:
```
<div class="lazy">content</div>
```

Then call the **jsLaLo** function:
```
<script>
function addListenerMulti(el, s, fn) {
  s.split(' ').forEach(e => el.addEventListener(e, fn, false));
}
addListenerMulti( window, 'scroll load', function() { jsLaLo() } );
</script>
```

## Version

0.0.1 - 2018-01-21

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
