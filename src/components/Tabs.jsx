function Tabs(props) {
  const { activeTab, setActiveTab } = props;
  return <div className="tabs">
  <span className={activeTab === "classes" ? "active" : ""} onClick={() => setActiveTab("classes")}>Classes</span>
  <span className={activeTab === "student" ? "active" : ""} onClick={() => setActiveTab("student")}>Student</span>
  <span className={activeTab === "coach" ? "active" : ""} onClick={() => setActiveTab("coach")}>Coach</span>
</div>
}

export default Tabs;