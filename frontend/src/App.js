import "@arco-design/web-react/dist/css/arco.css";
import React, { Component } from "react";
import {
  Layout,
  Button,
  Card,
  Message,
  Typography,
} from "@arco-design/web-react";
import { IconPlus } from "@arco-design/web-react/icon";
import TodoList from "./components/TodoList";
import TodoTabs from "./components/TodoTabs";
import CustomModal from "./components/Modal";
import axios from "axios";
import "./App.css";

axios.defaults.baseURL = "https://api.honahec.cc/todo";
axios.defaults.headers.common["Content-Type"] = "application/json";

const { Content, Footer } = Layout;
const { Title } = Typography;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: [],
      modal: false,
      activeItem: {
        title: "",
        description: "",
        completed: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/tasks/")
      .then((res) => {
        const todoList = Array.isArray(res.data) ? res.data : [];
        this.setState({ todoList });
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
        Message.error("获取TODO列表失败");
        this.setState({ todoList: [] });
      });
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();
    if (item.id) {
      axios.put(`/tasks/${item.id}/`, item).then((res) => this.refreshList());
      return;
    }
    axios.post("/tasks/", item).then((res) => this.refreshList());
  };
  handleDelete = (item) => {
    axios.delete(`/tasks/${item.id}/`).then((res) => this.refreshList());
  };

  createItem = () => {
    const item = {
      title: "",
      description: "",
      completed: false,
    };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayComleted = (status) => {
    if (status) {
      return this.setState({ viewCompleted: true });
    }
    return this.setState({ viewCompleted: false });
  };

  render() {
    const filteredItems = this.state.todoList.filter(
      (item) => item.completed === this.state.viewCompleted
    );

    return (
      <Layout className="layout-container">
        <Content style={{ background: "#f5f5f5", padding: "24px" }}>
          <div className="container">
            <Title
              heading={2}
              style={{ textAlign: "center", margin: "24px 0" }}
            >
              TODO
            </Title>
            <Card className="todo-card">
              <Button
                type="primary"
                icon={<IconPlus />}
                onClick={this.createItem}
                style={{ marginBottom: 16 }}
              >
                添加任务
              </Button>
              <TodoTabs
                viewCompleted={this.state.viewCompleted}
                onTabChange={this.displayComleted}
              />
              <TodoList
                items={filteredItems}
                viewCompleted={this.state.viewCompleted}
                onEdit={this.editItem}
                onDelete={this.handleDelete}
              />
            </Card>
          </div>
        </Content>
        <Footer style={{ textAlign: "center", padding: "24px" }}>
          <a href="https://beian.miit.gov.cn/" target="_blank">
            鲁ICP备2024119517号-1
          </a><br/>
          Copyright 2024 &copy; Honahec
        </Footer>
        {this.state.modal && (
          <CustomModal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        )}
      </Layout>
    );
  }
}

export default App;
