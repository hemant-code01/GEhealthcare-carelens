import { PrismaClient } from "@prisma/client";
import privateDeluxeRoom from "../../../packages/fixtures/policies/private-deluxe-room.json";
import arogyaKarnataka from "../../../packages/fixtures/policies/arogya-karnataka.json";
import hospitals from "../../../packages/fixtures/hospitals/hospitals.json";

const prisma = new PrismaClient();

async function main() {
  for (const policy of [privateDeluxeRoom, arogyaKarnataka]) {
    await prisma.policy.upsert({
      where: { id: policy.policyId },
      update: {},
      create: {
        id: policy.policyId,
        insurerName: policy.insurerName,
        schemeType: policy.schemeType as any,
        sumInsured: policy.sumInsured,
        roomRentLimit: policy.roomRentLimit,
        roomRentCapType: policy.roomRentCapType as any,
        proportionateDeductionRule: policy.proportionateDeductionRule,
        subLimits: policy.subLimits,
        exclusions: policy.exclusions,
        waitingPeriods: policy.waitingPeriods,
        consumableCoverageRules: policy.consumableCoverageRules,
        networkType: policy.networkType as any,
      },
    });
  }

  for (const hospital of hospitals) {
    await prisma.hospital.upsert({
      where: { id: hospital.hospitalId },
      update: {},
      create: {
        id: hospital.hospitalId,
        name: hospital.name,
        location: hospital.location,
        specialties: hospital.specialties,
        empanelment: hospital.empanelment,
        roomCategories: hospital.roomCategories,
        capabilities: hospital.capabilities,
      },
    });
  }

  console.log(`Seeded ${[privateDeluxeRoom, arogyaKarnataka].length} policies and ${hospitals.length} hospitals.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
