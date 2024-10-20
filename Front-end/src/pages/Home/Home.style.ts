import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #e5e5e5;
  padding: 20px;
  box-sizing: border-box;
`;

export const ProjectsSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #333;
  }
`;

export const ProjectCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 1.5rem;
      color: #333;
    }

    .status {
      padding: 5px 10px;
      background-color: #006400;
      color: white;
      border-radius: 4px;
      font-size: 0.9rem;
    }
  }

  .project-body {
    margin-top: 20px;

    .team {
      display: flex;
      align-items: center;

      .avatars {
        display: flex;
        gap: 10px;

        .avatar {
          width: 40px;
          height: 40px;
          background-color: #ccc;
          border-radius: 50%;
        }
      }
    }

    .progress {
      margin-top: 20px;

      h4 {
        font-size: 1.2rem;
      }

      .progress-bar {
        height: 10px;
        background-color: #ddd;
        border-radius: 5px;
        margin-top: 10px;
        position: relative;

        .progress-filled {
          height: 100%;
          background-color: #007bff;
          border-radius: 5px;
        }
      }

      .dates {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        font-size: 0.9rem;
        color: #666;
      }
    }
  }
`;

export const TaskCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;

  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 1.2rem;
    }

    .status {
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 0.8rem;

      &.overdue {
        background-color: #ff4500;
        color: white;
      }

      &.delivered {
        background-color: #32cd32;
        color: white;
      }
    }
  }

  p {
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
  }

  button {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
