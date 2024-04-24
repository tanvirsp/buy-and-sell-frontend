

const DashboardPage = () => {
    return (
        <section className="bg-white p-4 rounded-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="bg-info p-4 rounded-3">
                        <h5>Total Active Ad:</h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-warning p-4 rounded-3 ">
                        <h5>Total Pending Ad:</h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-danger p-4 rounded-3">
                        <h5>Total Cancel Ad:</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardPage;