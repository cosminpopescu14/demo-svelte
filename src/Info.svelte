<script>
    //export for passing data between components
    export let name;
    export let version;
    export let speed;
    export let website;
    export let answer = 42 //defalut value
</script>

<p>
    The <code>{name}</code> package is {speed} fast.
    Download version {version} from <a href="https://www.npmjs.com/package/{name}">npm</a>
    and <a href={website}>learn more here</a>
</p>