// Safari ignores content_scripts "world": "MAIN", so inject page-world scripts as <script> tags instead.
[
    'src/js/global/utils.js',
    'src/js/global/home-scroll-handler.js',
    'src/js/global/stories-view-handler.js',
    'src/js/global/post-modal-view-handler.js',
    'src/js/global/reels-scroll-handler.js',
].forEach((path) => {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(path);
    script.async = false; // keep execution order: later scripts use getValueByKey from utils.js
    script.onload = () => script.remove();
    document.documentElement.appendChild(script);
});
