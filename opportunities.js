// Extracted verbatim from the SwiftUI source files.
// Each organization mirrors the Opportunity / Opportunity2-8 structs.
//
// HandsOn Greater Phoenix and City of Flagstaff are automatically refreshed
// daily by a scraper (see /scraper folder + GitHub Actions workflow) that
// overwrites scrapedOpportunities.json. If that file is empty or missing
// data (e.g. a scrape failed, or hasn't run yet), this falls back to the
// hardcoded arrays below so the site never shows an empty list.

import scrapedData from './scrapedOpportunities.json';
import { cleanScrapedOpportunities, isUpcoming } from '../utils/opportunityFilters';

const hardcodedHandsOnGreaterPhoenix = {
  title: "HandsOn Greater Phoenix",
  note: "For referral volunteer opportunities (marked \"Referral\" in the title), please contact the listed volunteer coordinator directly to confirm whether service hours can be verified, since HandsOn cannot sign off on hours for projects run by partner organizations.",
  opportunities: [
    {
      name: "TopGolf Competition - Gilbert",
      link: "https://www.handsonphoenix.org/calendar",
      description: "Volunteers are needed for event support.\nIn addition, cheer and support the athletes at the Gilbert TopGolf Competition! \n\n\nTime: 8:45 AM- 1:00 PM\n\nDate: Saturday, August 1, 2026\n\nLocation: 1689 S Santan Village Pkwy, Gilbert, AZ 85295\n\nAge: 8+\n\nInterests: Sports & Recreation"
    },
    {
      name: "Maggie's Place Spruce Up",
      link: "https://www.handsonphoenix.org/calendar",
      description: "Maggie's Place provides safe housing and community for homeless pregnant women. \nWork alongside the moms residing at The Michael House in Glendale to help clean and maintain their home.\n\n\nTime: 10:00 AM - 12:00 PM\n\nDate: Saturday, August 1, 2026\n\nLocation: Details about location will be provided after registration\n\nAge: 12+ \nThe minimum age for this volunteer opportunity is 12 with a parent or guardian. Any volunteer UNDER the age of 16 MUST be accompanied by a parent/gaurdian. Volunteers 16 and 17 MUST bring a Youth Waiver signed by a parent or guardian, to each project.\n\nInterests: Family Services"
    },
    {
      name: "Grief Peer Support Group Facilitators for Kids & Caregivers",
      link: "https://www.handsonphoenix.org/calendar",
      description: "Seeking volunteers who enjoy helping grieving kids and families and can facilitate a peer support group. \nNote: Training and orientations are required (Provided).\nThis opportunity is great for students who want to explore the mental health field or individuals who have lost a loved one and want to support others.\n\n\nTime: 5:30 PM - 8:15 PM\n\nDate: Tuesday, August 4, 2026\n\nLocation: 21505 N 78th Ave #120, Peoria, AZ 85382\n\nAge: 14+ \nThe minimum age to volunteer is 14, however, an adult is required. Any volunteers 18+ don't need a parent /guardian.\n\nInterests: Mental Health, colleges"
    },
    {
      name: "Heart of Isaac Community Center - Food Distribution",
      link: "https://www.handsonphoenix.org/calendar",
      description: "Seeking for volunteers to support families in communities. Help to create a safe and welcoming place where families can quickly access food.\n\n\nTime: 8:00 AM - 11:00 AM\n\nDate: Thursday, August 6, 2026\n\nLocation: Heart of Isaac, 1403 N 32nd Avenue, Phoenix, AZ, 85009\n\nAge: 18+\n\nInterests: Help the homeless, passionate about helping others"
    },
    {
      name: "From the Ground Up: Volunteeer Day at the Ranch",
      link: "https://www.handsonphoenix.org/calendar",
      description: "Interested in helping animals? Then this opportunitiy is for you! Seeking for volunteers who enjoy the outdoors and want to make an impact on the ranch and the horses who call it home. Volunteers will work together on multiple hands-on projects, such as: Fence repairs, stall cleaning and refreshing, barn organization, and general facility beautification. Voluunteers wil help to create a safer and more welcoming environment for horses and animals. In addition, no experience is needed! Connect with nature and be part of something meaningful.\n\n\nTime: 7:00 AM - 9:30 AM\n\nDate: Saturday, August 8, 2026\nAugust 22, 2026\n\nLocation: Wildcat Ranch Phoenix, AZ, 85042\n\nAge: 12+\nThe minimum age to volunteer for this opportunity is 12, however, an adult is required. Any volunteers 18+ don't need a parent/guardian\n\nInterests: Animals, outdoors"
    },
    {
      name: "August 2026 Monthly Park Cleanup and Stinknet Removal - Kiwanis Park",
      link: "https://www.handsonphoenix.org/calendar",
      description: "Join Keep Tempe Beautiful to clean up Kiwanis Park and remove invasive stinknet. Volunteers will help to remove trash, litter, and stinknet. In addition, volunteers can also do shifts anywhere from 1 hour - 2 hours. Volunteers can also expect to help with event setup, teardwon, event raffles, parking lot attendence, taking photos, and more.\n\n\nTime: 7:00 AM - 9:00 AM\n\nDate: Saturday, August 15, 2026\n\nLocation: Kiwanis Park (6111 S All America Way, Tempe, AZ 85283); More location details will be provided upon registration.\n\nAge: There is NO MINIMUM AGE TO VOLUNTEER!!!"
    },
    {
      name: "Chef's Night Off at HomeBase",
      link: "https://www.handsonphoenix.org/calendar",
      description: "Enjoy cooking? Then this opportunitiy is for you. Seeking for volutneers who want to help prepare and serve dinner for homeless youth and young adults. In addition, volunteers will also help pack lunches that willl be distributed to homeless youth and young adults. Volunteers must wear closed-toed shoes to every project, and long hair should be pulled back.\n\n\nTime: 4:00 PM - 6:00 PM\n\nDate: Monday, August 10, 2026\n\nLocation: HomeBase Youth Services, Phoenix, AZ, 85014\n\n11+ \nThe minimum age for this opportunitiy is 11+, however, a parent/guardian is required. Ages 16-17 can volunteer without a parent or guardian, but they MUST bring a youth waiver signed by a parent/guardian.\n\nInterests: Cooking, Helping the homeless"
    },
    {
      name: "Rise and Dine at HomeBase",
      link: "https://www.handsonphoenix.org/calendar",
      description: "Seeking for volunteers who  will provide a warm, wholesome breakfast for homeless youth and young adults at HomeBase Youth Services. Sere up pancakes, bacon, eggs and toast with a smile! Volunteers must wear closed-toe shoes, and long hair must be pulled back.\n\n\nLocation: HomeBase Youth Services, Phoenix, AZ, 85014\nDate: Saturday, August 15, 2026Time: 8:00 AM - 10:00 AM\n\nAge: 11+ \nThe minimum age for this opportunitiy is 11+, however, a parent/guardian is required. Ages 16-17 can volunteer without a parent or guardian, but they MUST bring a youth waiver.\n\nInterests: Cooking, Helping the homeless"
    },
    {
      name: "Afternoon Sort and Pack at St. Mary's Food Bank-Phoenix",
      link: "https://www.handsonphoenix.org/calendar",
      description: "Seeking for volunteers to sort, pack, and distribute food that will go to other nonprofits and families in crisis. Volunteers MUST wear closed toe shoes, short/long sleeved shirts, and pants/jeans.\n\n\nLocation: Full details will be proided after registration.\n\nDate: Saturday, August 15, 2026\n\nTime: 12:00 PM - 2:00 PM\n\nAge: 12+ \nThe minimum age for this opportunitiy is 12+, however,a parent/guardian is required. Ages 16-17 can volunteer without a parent or guardian, but they MUST bring a youth waiver.\n\nInterests: Helping the homeless"
    },
    {
      name: "August 2026 #TrashTag Cleanup and Stinknet Removal - Tempe Town Lake",
      link: "https://www.handsonphoenix.org/calendar",
      description: "Enjoy helping our enviornment? Join Keep Tempe Beautiful to clean up Tempe Town Lake and remove invasive stinknet. You'll be in the area between the Mill Ave Bridges next to North Shore Beach Tempe, AZ, 85288. While volunteering, you will work on Trash and litter removal, along with stinknet removal. You can spend anywhere from 1 hour shifts to even 3 hour shifts. Volunteers can also expect to help with event setup, teardwon, event raffles, parking lot attendence, taking photos, and more.\n\n\nLocation: Tempe, AZ, 85288; Further details about location will be provided after registering.\nDate: Monday, August 24, 2026\n\nTime: 4:00 PM - 6:00 PM\n\nAge: 14+ \nThe minimum age to volunteer for this opportunitiy is 14, however, a parent/guardian is required. Ages 16-17 can volunteer without a parent or guardian, but they MUST bring a youth waiver.\n\nInterests: Helping the environment, Cleaning"
    },
    {
      name: "Thrift Shop Assistants at Hope's Closet",
      link: "https://www.handsonphoenix.org/opportunity/a0CUi00006H5HDeMAN/thrift-shop-assistants-at-hopes-closet",
      description: "Hope's Closet is a New Life Center's social enterprise thrift store, and are seeking for volunteers who can collect and sort clothing donations, move items to the sales floor, and organize clothing racks.\n\n\nLocation: Hope's Closet, Goodyear, AZ, 85338\n\nDate: Saturday, August 22, 2026\n\nTime: 10:00 AM - 12:00 PM\n\nAge: 14+ \nThe minimum age to volunteer for this opportunitiy is 14, however, a parent/guardian is required. Ages 16 to 17 can volunteer without a parent.guardian, but they MUST bring a youth waiver.\n\nInterests: Cleaning, Helping the community"
    },
    {
      name: "Administrative Tasks - Tempe Office",
      link: "https://www.handsonphoenix.org/calendar",
      description: "Help with administrative tasks at the Tempe office.\n\nDate: Various dates available.\n\nLocation: Tempe, AZ\n\nAge: 14+"
    },
    {
      name: "Pizza Maing with St. Vincent de Paul",
      link: "https://www.handsonphoenix.org/calendar",
      description: "Do you enjoy cooking? Help prepare 150 pizzas for Friday night dinner service at St. Vincent de Paul. Volunteers will help roll out dough, spread out the sauce, layer on toppings, and get the pizzas into the ovens to cook. Please wear closed-toe shoes, mid-thigh length shorts or pants, and sleeved skirts. Hairnets, gloves, and aprons will be provided, but pizza making ccan get messy, so ensure to dress accordingly!\n\n\nLocation: Full details will be provided after registration.\n\nDate: August 28, 2026\n\nTime: 1:00 PM - 3:00 PMAge 12+ \nThe minimum age for this opportunity is 12, however, a parent or guardian is required. Ages 16 to 17 can volunteer without a parent.guardian, but they MUST bring a youth waiver.\n\nInterests: Cooking, helping the homeless"
    }
  ]
};

const hardcodedCityOfFlagstaff = {
  title: "City of Flagstaff",
  note: null,
  opportunities: [
    {
      name: "Full Moon Bike Ride/Hike!",
      link: "https://volunteer.flagstaffaz.gov/Calendar",
      description: "Enjoy outdoor activites? Then this opportunitiy is for you! Enjoy a night out walking on a trail or out and back, and watch the full moon rise. You can meet new people, bike, and hike during this event. You will go on the Karen Cooper FUTS trail, which lasts about 6 miles.\n\n\nAge: 0+\nAny age can participate.\n\nLocation: Frances Short Pond\n\nDate: July 29, 2026\n\nTime: 7:30 PM - 9:30 PM"
    },
    {
      name: "Garden Maintenance Volunteer Day - Bonito",
      link: "https://volunteer.flagstaffaz.gov/Calendar",
      description: "Enjoy nature and plants? Then this opportunitiy is for you.\n\n**Note: The Garden Maintenance Volunteer Opportunitiy is available in multiple locations across Flagstaff. Scroll down for more locations.**\n\nGarden Volunteer days are a great way to become directly involved in a community garden, interact with other gardeners, and ensure the gardens continue to thrive in the future. As a volunteer, here are the things you might do:\n\n•Turning compost\n•Weeding\n•Caring for communal plots\n•Hands-on learning expereinces and creative, garden inspired projects.\n\nThis opportunitiy is wonderful if you are looking to build gardening skills, meet new people, or simply spend time giving back to the community.\n\n\nAge: 0+\nAny age can participate.\n\nLocation: Bonito Community Garden Pond\n\nDate: August 04, 2026  \n\nTime: 7:30 PM - 9:30 PM"
    },
    {
      name: "Garden Maintenance Volunteer Day - Southside",
      link: "https://volunteer.flagstaffaz.gov/Calendar",
      description: "Enjoy nature and plants? Then this opportunitiy is for you.\n\nGarden Volunteer days are a great way to become directly involved in a community garden, interact with other gardeners, and ensure the gardens continue to thrive in the future. As a volunteer, here are the things you might do: \n\n•Turning compost\n•Weeding\n•Caring for communal plots\n•Hands-on learning expereinces and creative, garden inspired projects.\n\n\nAge: 0+\nAny age can participate.\n\nLocation: Southside Community Garden\n\nDate: August 04, 2026  \n\nTime: 4:00 PM - 6:00 PM"
    },
    {
      name: "Garden Maintenance Volunteer Day - Hal Jensen",
      link: "https://volunteer.flagstaffaz.gov/Calendar",
      description: "Enjoy nature and plants? Then this opportunitiy is for you.\n\nGarden Volunteer days are a great way to become directly involved in a community garden, interact with other gardeners, and ensure the gardens continue to thrive in the future. As a volunteer, here are the things you might do: \n\n•Turning compost\n•Weeding\n•Caring for communal plots\n•Hands-on learning expereinces and creative, garden inspired projects.\n\n\nAge: 0+\nAny age can participate.\n\nLocation: Hal Jensen Recreation Center Garden\n\nDate: August 21, 2026\n\nTime: 4:00 PM - 6:00 PM"
    },
    {
      name: "Invasive Weed Identification, Removal & Reseeding",
      link: "https://volunteer.flagstaffaz.gov/Calendar",
      description: "Volunteers are requested to help manage invasive weeds at Picture Canyon. In addition to helping the enviornment, you will also learn valuable information on gardening skills, such as how to remove weeds, and plant flowers. This event is on every other Wednesday.\n\nAge: 0+\nAny Age can participate.\n\nLocation: Picture Canyon Natural & Cultural Preserve\n\nDates: Every other Wednesday morning.\n\nTime: 7:00 AM - 10:00 AM"
    },
    {
      name: "Mushroom Walk!",
      link: "https://volunteer.flagstaffaz.gov/Calendar",
      description: "Join mushroom enthusiasts for the Arizona Watchable Wildlife Experience's afternoon mushroom walk! During this event, you will assist with finding fungi and mushrooms. The event is free, but participation is limited to 20.\n\nAge: 0+\nAny age can participate. \n\nLocation: Location details will be revealed after registration.\n\nDate: August 22, 2026\n\nTimes:\n•9:00 AM - 11:00 AM\n•11:30 AM - 1:30 PM"
    },
    {
      name: "Full Moon Hike -- Mars Hill Trail",
      link: "https://volunteer.flagstaffaz.gov/Calendar",
      description: "Enjoy outdoor activites? Then this opportunitiy is for you! Enjoy a night out walking on a trail or out and back, and watch the full moon rise. You can meet new people and hike during this event. You will go on the Mars Hill Trail, which lasts about 3 miles.\n\n\nAge: 0+\nAny age can participate.\n\nLocation: Observatory Mesa - Mars Hill Trail\n\nDate: July 29, 2026\n\nTime: 6:15 PM - 8:15 PM"
    }
  ]
};

// Use scraped data when it actually has opportunities; otherwise fall back
// to the hardcoded arrays above so the site is never left showing nothing.
const rawLiveHandsOnGreaterPhoenix =
  scrapedData.handsOnGreaterPhoenix?.opportunities?.length > 0
    ? scrapedData.handsOnGreaterPhoenix
    : hardcodedHandsOnGreaterPhoenix;

const liveHandsOnGreaterPhoenix = {
  ...rawLiveHandsOnGreaterPhoenix,
  note: "For referral volunteer opportunities (marked \"Referral\" in the title), please contact HandsOn Greater Phoenix to confirm whether volunteer hours can be verified for that project before signing up.",
  opportunities: (rawLiveHandsOnGreaterPhoenix === hardcodedHandsOnGreaterPhoenix
    ? rawLiveHandsOnGreaterPhoenix.opportunities.filter(o => isUpcoming(o.date))
    : cleanScrapedOpportunities(rawLiveHandsOnGreaterPhoenix.opportunities).map(o => ({
        ...o,
        link: o.link || 'https://www.handsonphoenix.org/calendar',
      }))
  ),
};

const rawLiveCityOfFlagstaff =
  scrapedData.cityOfFlagstaff?.opportunities?.length > 0
    ? scrapedData.cityOfFlagstaff
    : hardcodedCityOfFlagstaff;

const liveCityOfFlagstaff = {
  ...rawLiveCityOfFlagstaff,
  opportunities: (rawLiveCityOfFlagstaff === hardcodedCityOfFlagstaff
    ? rawLiveCityOfFlagstaff.opportunities.filter(o => isUpcoming(o.date))
    : cleanScrapedOpportunities(rawLiveCityOfFlagstaff.opportunities, false).map(o => ({
        ...o,
        link: o.link || 'https://volunteer.flagstaffaz.gov/Calendar',
      }))
  ),
};

export const organizations = {
  handsOnGreaterPhoenix: liveHandsOnGreaterPhoenix,

  arizonaStateParks: {
    title: "Arizona State Parks and Trails",
    note: "Note: The following opportunities require an application, which can be done through this link:\n                                 https://azstateparks.com/Open-Volunteer-Positions\n                                         Apply to learn more about dates and times.",
    opportunities: [
      {
        name: "Fort Verde State Historic Park",
        link: "https://azstateparks.com/Open-Volunteer-Positions",
        description: "Seeking volunteers for the following positions:\n\n•Special Event Ambassador: Assist with various event duties throughout the year during many fun events.\n\n•Front Desk/Visitor Services - Greet park visitors at the park's first point of contact and collect park entry fees, assist in the Visitor Center with retail sales, and provide general park information.\n\n•Interpretive Services - Assist park staff in communicating information relating to the history of Fort Verde State Historic Park, the town of Camp Verde, and surrounding areas."
      },
      {
        name: "Jerome State Historic Park",
        link: "https://azstateparks.com/Open-Volunteer-Positions",
        description: "Seeking volunteers for the following positions:\n\n•Interpretive Services - Assist park staff in communicating information relating to Jerome State Historic Park, the Douglas family, mining, geology, and the town of Jerome.\n\n•Visitor Services - Welcome guests, assist in the Park Store with retail sales, and provide general park information."
      },
      {
        name: "Picacho Peak State Park",
        link: "https://azstateparks.com/Open-Volunteer-Positions",
        description: "Seeking volunteers for the following positions: \n\n•Trail Maintenance - General trail maintenance and litter removal\n\n•Visitor Services - Welcome guests, assist in the Visitor Center with retail sales, and provide general park information"
      },
      {
        name: "Rockin' River Ranch State Park",
        link: "https://azstateparks.com/Open-Volunteer-Positions",
        description: "Seeking volunteers for the following positions: \n\n•Trail Ambassador - Welcome and guide guests along our beautiful trail system.\n\n•Visitor Services - Greet park visitors at the park's first point of contact and collect park entry fees, assist in the Visitor Center with retail sales, and provide general park information."
      },
      {
        name: "Red Rock State Park",
        link: "https://azstateparks.com/Open-Volunteer-Positions",
        description: "Seeking volunteers for the following positions:\n\n•Entry Station Attendant - Greet park visitors at the park's first point of contact and collect park entry fees. Must be friendly, patient, and willing to answer basic visitor questions about the park and surrounding Sedona area. Volunteer shifts are typically 3.5 hours (afternoon shift) or 4 hours (morning shift) but shorter shifts on a weekly or every other week basis may be considered."
      },
      {
        name: "Catalina State Park",
        link: "https://azstateparks.com/Open-Volunteer-Positions",
        description: "Seeking volunteers for the following positions:\n\n•Visitor Services - Welcome guests, assist in the Park Store with retail sales, and provide general park information."
      }
    ]
  },

  cityOfFlagstaff: liveCityOfFlagstaff,

  juniorAchievement: {
    title: "Junior Achievement of Arizona",
    note: "                                               Fill out the Youth Consent here:\n https://drive.google.com/file/d/1bXq56e-_GomNSrz1bKU4tejfmIB1fouD/view?usp=sharing",
    opportunities: [
      {
        name: "Administrative Tasks-Tempe Office",
        link: "https://www.jaaz.org/volunteer/admin-tasks/",
        description: "Help Junior Achievement with various tasks while helping students. This opportunitiy requires a positive attitude and good attention. \n\nDates: Thursdays, but contact taylors@jaaz.org in order to reschedule if needed.\n\nTime: 2:00 PM - 4:00 PM, but contact taylors@jaaz.org to reschedule if needed. \n\nAges: Any age can generally volunteer, but contact taylors@jaaz.org to confirm. \n\n\nLocation:\nJunior Achievement Tempe Office\n636 W. Southern Ave., Tempe, AZ 85282"
      },
      {
        name: "JA High School Heroes",
        link: "https://www.jaaz.org/program/ja-high-school-heroes/",
        description: "JA High School Heroes provides exciting leadership opportunities to high school students. You will help students in elementary schools as well. \n\nAfter participation in this program, you will not only gain leadership, but will also:\n •Identify qualities of a leader and recognize the role of civic leadership in a community.\n•Use strong presentation skills to communicate effectively.\n•Recognize and use techniques that further teamwork and achieve group goals.\n•Use a problem-solving technique to solve personal and professional problems.\n• Apply critical-thinking skills to work-based problems.\n•Recognize that decisions have consequences.\n•Recognize the value of constructive feedback and the growth mind-set.\n•Develop a personal action plan. \n\nDate: Contact taylors@jaaz.org for more information on upcoming dates. \n\nTime: Contact taylors@jaaz.org for more information on upcoming times.\n\nLocation: Contact taylors@jaaz.org for more information on upcoming location."
      }
    ]
  },

  feedMyStarvingChildren: {
    title: "Feed My Starving Children",
    note: null,
    opportunities: [
      {
        name: "FMSC MobilePack",
        link: "https://www.fmsc.org/volunteer-listing/?search_term=85260&search_start=2026-06-28&search_end=2026-07-31&miles=150&chosen_mode=Near%20Location&users_zip=85260",
        description: "Seeking volunteers to measure and pack dry meals, such as rice, soy, dried vegetables, and vitamins. This opportunitiy takes just two hours of your time!\n\nLocation: Multiple locations, register to find all locations.\n\nTimes: Multiple times, register to view all times.\n\nAge: 5+"
      }
    ]
  },

  azSustainabilityAlliance: {
    title: "Arizona Sustainability Alliance",
    note: null,
    opportunities: [
      {
        name: "",
        link: "https://www.azsustain.org/volunteer",
        description: ""
      }
    ]
  },

  bureauOfLandManagement: {
    title: "Bureau Of Land Management Arizona",
    note: null,
    opportunities: [
      {
        name: "Preserving History: A Freedom 250 Volunteer Day",
        link: "https://www.blm.gov/get-involved/resource-advisory-councils/near-you/oregon-washington/klamath-falls/volunteer",
        description: "Join the Bureau of Land Management's Klamath Falls Field Office to take part in hands-on projects that support future generations.\n\nVolunteers are requested to help remove invasive weeds to help the wetland ecosystem.\n\nThe BLM will provide tools and supplies, though volunteers are still encouraged to bring lunch, water, hats, gloves, sturdy shoes, long-sleeved clothing, and a camera to capture the experience!\n\nDate: June 20, 2026\n\nTime: 10 AM - 2 PM\n\nLocation: Wood River Wetland"
      }
    ]
  },

  lostOurHomesPetRescue: {
    title: "Lost Our Homes Pet Rescue",
    note: null,
    opportunities: [
      {
        name: "Shadow Shift",
        link: "https://lostourhome.galaxydigital.com/calendar/2026/08?",
        description: "This opportunity is mainly for new volunteers at Lost Our Homes Pet Rescue.\n\nDuring this opportunitiy, you will tour the Lost Our Homes Facility go over proper Shelter Care, procedures, and other volunteer growth opportunities. After this opportunitiy, you will not only be confident and ready, but will also be eligible for independent Shelter Care shifts and more!\n\nTo proceed with this opportunity, specific orientations are needed. \n\n\nAge: 8+ \nThe minimum age to volunteer for this opportunitiy is 8, however, anyone 8-15 require a parent/guardian. Ages 16-17 can volunteer without a parent, but require a parental waiver. Anyone above the age of 18 can volunteer alone.\n\n\nDates and Times: There are numerous dates and times to volunteer for this opportunitiy. Each session is 2 hours long. Visit Lost Our Homes Pet Rescue to learn more information.\n\n\nLocation: \n2323 S Hardy Dr \nTempe, AZ  85282"
      },
      {
        name: "Shelter Care",
        link: "https://lostourhome.galaxydigital.com/calendar/2026/08?",
        description: "Shelter Care is a wonderful opportunity to help pets in need.\n\nVolunteers are requeted for the following: \n\n•Laundry and dishes \n\n•Cleaning kennels \n\n•Logging donations, \n\n•Sweeping and mopping \n\n•Restocking and organizing supplies\n\n•Other special projects. \n\nThis opportunity is VERY family friendly and wonderful for animal lovers. \n\nTo proceed with this opportunity, specific orientations are needed. \n\n\nAge: 8+ \nThe minimum age to volunteer for this opportunitiy is 8, however, anyone 8-15 require a parent/guardian. Ages 16-17 can volunteer without a parent, but require a parental waiver. Anyone above the age of 18 can volunteer alone.\n\n\nDates and Times: There are numerous dates and times to volunteer for this opportunitiy. Each session is 2 hours long. Visit Lost Our Homes Pet Rescue to learn more information.\n\n\nLocation: \n2323 S Hardy Dr \nTempe, AZ  85282"
      }
    ]
  }
};

// Helper mirroring each SwiftUI view's static `contains(name:)` method
export function findOrgByOpportunityName(name) {
  for (const [key, org] of Object.entries(organizations)) {
    if (org.opportunities.some(o => o.name === name)) {
      return key;
    }
  }
  return null;
}
