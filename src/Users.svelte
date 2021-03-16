<script>
    import { Datatable, rows } from 'svelte-simple-datatables'
    import { onMount } from "svelte";
    let users = [];
    onMount(async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        users = await res.json();
    });

    const settings = {
        sortable: true,
        pagination: true,
        rowPerPage: 50,
        columnFilter: true,
    }
</script>

    <Datatable settings={settings} data={users}>
        <thead>
        <th data-key="id">ID</th>
        <th data-key="first_name">First Name</th>
        <th data-key="last_name">Last Name</th>
        <th data-key="email">Email</th>
        <th data-key="ip_address">Phone</th>
        </thead>
        <tbody>
        {#each $rows as row}
            <tr>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.username}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
            </tr>
        {/each}
        </tbody>
    </Datatable>

<style>
    th:first-child{width:72px;}
    td{text-align:center;padding:4px 0}
</style>