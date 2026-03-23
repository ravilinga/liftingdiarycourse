import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="text-center space-y-3">
        <Badge variant="secondary">Coming Soon</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Lifting Dairy Course</h1>
        <p className="text-muted-foreground max-w-md">
          Your comprehensive guide to strength training. Sign up to get early access.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Structured Programs</CardTitle>
            <CardDescription>Follow proven lifting programs designed for all levels.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Learn More</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Track Progress</CardTitle>
            <CardDescription>Log your lifts and watch your strength grow over time.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Learn More</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Expert Guidance</CardTitle>
            <CardDescription>Learn proper form and technique from experienced coaches.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">Learn More</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
