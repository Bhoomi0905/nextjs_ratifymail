import styles from "../../../ui/dashboard/dashboard.module.css";


const dashboard = () => {
    return(
      <div>
        <div>
            <div>
                <div>
                    <div>
                        <h1>Overall Breakdown</h1>
                    </div>
                    <div>
                        <div className={styles.z}>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <h3>0</h3>
                                            <p>Total Emails</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <h3>0</h3>
                                        <p>Deliverables</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <h3>0</h3>
                                        <p>Spam Trap</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <h3>0</h3>
                                        <p>Bad Emails</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <h5>Validation History</h5>
                                    <p>Here are your latest 50 validated emails.</p>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Contact List</th>
                                                        <th>Email</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
  }
  
  export default dashboard