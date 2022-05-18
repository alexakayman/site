import '/css/base.css'
import '/css/main.css'
import '/css/normalize.css'

async function projects() {
    const industries = await fetch('/api/fetchNotionAPI').then((res) => res.json().then((data) => data.results));
    document.getElementById
}