import { Card } from "@/components/ui/card";
import Boards from "@/features/boards/boards";
import Container from "@/layout/container/container";
import Layout from "@/layout/layout";
import BoardCreate from "@/features/board/board-create/board-create";

const Dashboard = () => {
  return (
    <Layout>
      <Container className="py-9">
        <Card className="p-5 flex flex-col gap-9">
          <div className="flex justify-between gap-5">
            <div>
              <h3 className="text-xl font-semibold">Application Boards</h3>
              <p className="text-muted-foreground">
                View your created application boards
              </p>
            </div>
            <BoardCreate />
          </div>

          <Boards />
        </Card>
      </Container>
    </Layout>
  );
};

export default Dashboard;
