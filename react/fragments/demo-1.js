function Glossary(props) {
    return (
        <dl>
            {
                props.items.map(item => {
                    <React.Fragment key={item.id}>
                        <dt>{item.term}</dt>
                        <dd>{item.description}</dd>
                    </React.Fragment>
                })
            }
        </dl>
    )
}

