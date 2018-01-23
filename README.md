# jsLaLo

The easiest and laziest code to achieve lazy load effect on website divs.

## How to use it?

### 1. JS
Include **jslalo.js** file in your website header:
```
<script type="text/javascript" src="PATH/TO/jslalo.js"></script>
````

### 2. CSS
Add this bit of CSS code:
```
.lazy { opacity: 0; }
```

### 3. HTML
Add **lazy** class to each element that needs to be lazy loaded:
```
<div class="lazy">content</div>
```

Then call the **jsLaLo** function in your template:
```
<script>
function addListenerMulti(el, s, fn) {
  s.split(' ').forEach(e => el.addEventListener(e, fn, false));
}
addListenerMulti( window, 'scroll load', function() { jsLaLo() } );
</script>
```

## Version

* 0.0.2 - 2018-01-23
  Added transition effect

* 0.0.1 - 2018-01-21

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
