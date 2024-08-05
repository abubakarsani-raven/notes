import Button4 from "@/components/Button4";

export default function Home() {
  return (
      <div>
        <Button4 name="Test" data={[1,2,3,4,5,6]} />
        <Button4 name="Okay "  />
        <Button4 name="Continue"  />
        <Button4 name="Repeat"  data={['Food','Sport']}/>
      </div>
  );
}
