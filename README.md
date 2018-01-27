# jsLaLo

The easiest and laziest code to achieve lazy load effect on website divs.

## How to use it?

### 1. JS
Include **jslalo.js** file in your website footer:
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

## Version

* 0.0.3 - 2018-01-27
  Performance improvements, bug fixes. Code needs to be placed in footer from now on, without need to calling it by additional script.

* 0.0.2 - 2018-01-23
  Added transition effect

* 0.0.1 - 2018-01-21

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
