const Breadcrumb = (props) => {

    return (
        <div style={{margin: '20px', padding: '10px', background: '#3d464d'}}>
            {
                props.crumbs.map((crumb, index) => {
                    return (
                        <a href={crumb.path}>{crumb.name} {props.crumbs.length > 1 && (index + 1) != props.crumbs.length ? ' > ' : ''}</a>
                    )
                })
            }
        </div>
    );
}

export default Breadcrumb;