import { Button } from "@/components/ui/button";
import { useLogout } from "@/features/auth/hooks/use-logout";

const DashboardPage = () => {
  const { mutate: logout, isPending } = useLogout();
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>

      <Button
        onClick={() => logout()}
        className="bg-red-500 text-white cursor-pointer"
        disabled={isPending}
      >
        {isPending ? "Logging out..." : "Logout"}
      </Button>
    </div>
  );
};

export default DashboardPage;
