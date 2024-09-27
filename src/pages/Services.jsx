import Step from '../components/Step';

// This is the Services page
export default function Services() {
  const steps = [
    {
      id: 1,
      title: 'Select The Perfect Car Service',
      description: "From GoMechanic's broad portfolio of services",
      imgSrc: 'path/to/image1.png', // replace with actual image path
    },
    {
      id: 2,
      title: 'Schedule Free Doorstep Pick-up',
      description: 'We offer free pick up and drop for all services booked',
      imgSrc: 'path/to/image2.png', // replace with actual image path
    },
    {
      id: 3,
      title: 'Track Your Car Service Real-Time',
      description: 'We will take care of everything from here!',
      imgSrc: 'path/to/image3.png', // replace with actual image path
    },
    {
      id: 4,
      title: 'Earn While We Service',
      description: 'Spread the word! You get Rs.750. Your friends get Rs.750!',
      imgSrc: 'path/to/image4.png', // replace with actual image path
    },
  ];

  return (
    <div className="App px-4 py-10">
      <div className="max-w-4xl mx-auto relative">
        {steps.map((step, index) => (
          <Step key={step.id} step={step} index={index} />
        ))}
      </div>
    </div>
  );
}
