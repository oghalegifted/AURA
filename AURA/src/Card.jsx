

function Card(props) {
    return (
        <>
            <div class="card-group">
                <div class="card">
                    <div class="card-body">
                    <h4 class="card-title">{props.title}</h4>
                    <p class="card-text">{props.info}</p>
                    <a href={props.link} class="btn btn-primary">Download</a>
                    </div>
                    <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div>
                {/* <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.info}</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div> */}
                {/* <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-body-secondary">Last updated 3 mins ago</small>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Card;