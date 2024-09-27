import Step from '../components/Step';

// This is the Services page
export default function Services() {
  const services = [
      {
        "id": 1,
        "service_package": "Regular AC Service",
        "free_offer": "FREE AC UNIT INSPECTION",
        "previous_price": 3132,
        "current_price": 2349,
        "tasks": [
          {
            "name": "AC Vent Cleaning",
            "completed": true
          },
          {
            "name": "AC Gas (upto 400 gms)",
            "completed": true
          },
          {
            "name": "AC Filter Cleaning",
            "completed": true
          },
          {
            "name": "AC Inspection",
            "completed": true
          },
          {
            "name": "Condenser Cleaning",
            "completed": true
          }
        ],
        "duration": "Takes 4 hours",
        "warranty": "500 Kms or 1 Month Warranty",
        "recommendation": "Every 5,000 Kms or 3 Months"
      },
      // {
      //   "service_package": "Regular AC Service",
      //   "free_offer": "FREE AC UNIT INSPECTION",
      //   "previous_price": 3132,
      //   "current_price": 2349,
      //   "tasks": [
      //     {
      //       "name": "AC Vent Cleaning",
      //       "completed": true
      //     },
      //     {
      //       "name": "AC Gas (upto 400 gms)",
      //       "completed": true
      //     },
      //     {
      //       "name": "AC Filter Cleaning",
      //       "completed": true
      //     },
      //     {
      //       "name": "AC Inspection",
      //       "completed": true
      //     },
      //     {
      //       "name": "Condenser Cleaning",
      //       "completed": true
      //     }
      //   ],
      //   "duration": "Takes 4 hours",
      //   "warranty": "500 Kms or 1 Month Warranty",
      //   "recommendation": "Every 5,000 Kms or 3 Months"
      // },
      // {
      //   "service_package": "Regular AC Service",
      //   "free_offer": "FREE AC UNIT INSPECTION",
      //   "previous_price": 3132,
      //   "current_price": 2349,
      //   "tasks": [
      //     {
      //       "name": "AC Vent Cleaning",
      //       "completed": true
      //     },
      //     {
      //       "name": "AC Gas (upto 400 gms)",
      //       "completed": true
      //     },
      //     {
      //       "name": "AC Filter Cleaning",
      //       "completed": true
      //     },
      //     {
      //       "name": "AC Inspection",
      //       "completed": true
      //     },
      //     {
      //       "name": "Condenser Cleaning",
      //       "completed": true
      //     }
      //   ],
      //   "duration": "Takes 4 hours",
      //   "warranty": "500 Kms or 1 Month Warranty",
      //   "recommendation": "Every 5,000 Kms or 3 Months"
      // },
      // {
      //   "service_package": "Regular AC Service",
      //   "free_offer": "FREE AC UNIT INSPECTION",
      //   "previous_price": 3132,
      //   "current_price": 2349,
      //   "tasks": [
      //     {
      //       "name": "AC Vent Cleaning",
      //       "completed": true
      //     },
      //     {
      //       "name": "AC Gas (upto 400 gms)",
      //       "completed": true
      //     },
      //     {
      //       "name": "AC Filter Cleaning",
      //       "completed": true
      //     },
      //     {
      //       "name": "AC Inspection",
      //       "completed": true
      //     },
      //     {
      //       "name": "Condenser Cleaning",
      //       "completed": true
      //     }
      //   ],
      //   "duration": "Takes 4 hours",
      //   "warranty": "500 Kms or 1 Month Warranty",
      //   "recommendation": "Every 5,000 Kms or 3 Months"
      // },
      // {
      //   "service_package": "Regular AC Service",
      //   "free_offer": "FREE AC UNIT INSPECTION",
      //   "previous_price": 3132,
      //   "current_price": 2349,
      //   "tasks": [
      //     {
      //       "name": "AC Vent Cleaning",
      //       "completed": true
      //     },
      //     {
      //       "name": "AC Gas (upto 400 gms)",
      //       "completed": true
      //     },
      //     {
      //       "name": "AC Filter Cleaning",
      //       "completed": true
      //     },
      //     {
      //       "name": "AC Inspection",
      //       "completed": true
      //     },
      //     {
      //       "name": "Condenser Cleaning",
      //       "completed": true
      //     }
      //   ],
      //   "duration": "Takes 4 hours",
      //   "warranty": "500 Kms or 1 Month Warranty",
      //   "recommendation": "Every 5,000 Kms or 3 Months"
      // }  
  ];

  return (
    <div className="App px-4 py-10">
      <div className="max-w-4xl mx-auto relative">
        {services.map((service, index) => (
          <Step key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
