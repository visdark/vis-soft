;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-zuixiaohua" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M129 691h767v11H129z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cuowu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M235.128 782.49l542.346-542.345 7.778 7.778L242.906 790.27z"  ></path>' +
    '' +
    '<path d="M778.935 787.447L236.59 245.102l7.778-7.778 542.345 542.345z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangda" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M191.1 320.5h641.2v11H191.1z"  ></path>' +
    '' +
    '<path d="M191.1 320.6h11v377.7h-11z"  ></path>' +
    '' +
    '<path d="M191 673.3h129.3v30H191zM821 321.7h11.2v446.8H821z"  ></path>' +
    '' +
    '<path d="M320 449h504v11H320z"  ></path>' +
    '' +
    '<path d="M319.9 449.8h11v318.7h-11z"  ></path>' +
    '' +
    '<path d="M325 757.3h501.3v11H325z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)