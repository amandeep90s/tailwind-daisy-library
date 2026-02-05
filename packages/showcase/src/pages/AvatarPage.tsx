import { Avatar, AvatarGroup } from "@shared-ui-library/react";
import { ComponentPage, ShowcaseSection } from "../components/ComponentPage";

export function AvatarPage() {
  return (
    <ComponentPage title="Avatar" description="Displays an image avatar with fallback support.">
      {/* Sizes */}
      <ShowcaseSection title="Sizes">
        <Avatar size="xs" src="https://i.pravatar.cc/150?img=1" alt="User" />
        <Avatar size="sm" src="https://i.pravatar.cc/150?img=2" alt="User" />
        <Avatar size="md" src="https://i.pravatar.cc/150?img=3" alt="User" />
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=4" alt="User" />
        <Avatar size="xl" src="https://i.pravatar.cc/150?img=5" alt="User" />
      </ShowcaseSection>

      {/* Shapes */}
      <ShowcaseSection title="Shapes">
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=10" alt="Circle" shape="circle" />
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=11" alt="Rounded" shape="rounded" />
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=12" alt="Square" shape="square" />
      </ShowcaseSection>

      {/* Mask Shapes */}
      <ShowcaseSection title="Mask Shapes">
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=13" alt="Squircle" shape="squircle" />
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=14" alt="Hexagon" shape="hexagon" />
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=15" alt="Triangle" shape="triangle" />
      </ShowcaseSection>

      {/* With Ring */}
      <ShowcaseSection title="With Ring">
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=16" alt="Ring" ring />
        <Avatar
          size="lg"
          src="https://i.pravatar.cc/150?img=17"
          alt="Primary Ring"
          ring
          ringColor="primary"
        />
        <Avatar
          size="lg"
          src="https://i.pravatar.cc/150?img=18"
          alt="Secondary Ring"
          ring
          ringColor="secondary"
        />
        <Avatar
          size="lg"
          src="https://i.pravatar.cc/150?img=19"
          alt="Accent Ring"
          ring
          ringColor="accent"
        />
      </ShowcaseSection>

      {/* Ring with Offset */}
      <ShowcaseSection title="Ring with Offset">
        <Avatar
          size="lg"
          src="https://i.pravatar.cc/150?img=20"
          alt="Ring Offset"
          ring
          ringOffset
        />
        <Avatar
          size="lg"
          src="https://i.pravatar.cc/150?img=21"
          alt="Primary Ring Offset"
          ring
          ringColor="primary"
          ringOffset
        />
        <Avatar
          size="lg"
          src="https://i.pravatar.cc/150?img=22"
          alt="Success Ring Offset"
          ring
          ringColor="success"
          ringOffset
        />
      </ShowcaseSection>

      {/* Status Indicators */}
      <ShowcaseSection title="Status Indicators">
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=23" alt="Online" status="online" />
        <Avatar size="lg" src="https://i.pravatar.cc/150?img=24" alt="Offline" status="offline" />
        <Avatar size="lg" fallback="ON" status="online" />
        <Avatar size="lg" fallback="OFF" status="offline" />
      </ShowcaseSection>

      {/* Placeholder / Fallback */}
      <ShowcaseSection title="Placeholder with Initials">
        <Avatar size="md" fallback="JD" />
        <Avatar size="md" fallback="AB" />
        <Avatar size="lg" fallback="XY" />
        <Avatar size="xl" fallback="MN" />
      </ShowcaseSection>

      {/* Placeholder Colors */}
      <ShowcaseSection title="Placeholder Colors">
        <Avatar size="lg" fallback="N" placeholderColor="neutral" />
        <Avatar size="lg" fallback="P" placeholderColor="primary" />
        <Avatar size="lg" fallback="S" placeholderColor="secondary" />
        <Avatar size="lg" fallback="A" placeholderColor="accent" />
        <Avatar size="lg" fallback="I" placeholderColor="info" />
        <Avatar size="lg" fallback="OK" placeholderColor="success" />
        <Avatar size="lg" fallback="W" placeholderColor="warning" />
        <Avatar size="lg" fallback="E" placeholderColor="error" />
      </ShowcaseSection>

      {/* Avatar Group */}
      <ShowcaseSection title="Avatar Group">
        <AvatarGroup>
          <Avatar size="md" src="https://i.pravatar.cc/150?img=25" alt="User 1" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=26" alt="User 2" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=27" alt="User 3" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=28" alt="User 4" />
        </AvatarGroup>
      </ShowcaseSection>

      {/* Avatar Group with Max */}
      <ShowcaseSection title="Avatar Group with Max">
        <AvatarGroup max={3}>
          <Avatar size="md" src="https://i.pravatar.cc/150?img=29" alt="User 1" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=30" alt="User 2" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=31" alt="User 3" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=32" alt="User 4" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=33" alt="User 5" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=34" alt="User 6" />
        </AvatarGroup>
      </ShowcaseSection>

      {/* Avatar Group with Ring */}
      <ShowcaseSection title="Avatar Group with Ring">
        <AvatarGroup>
          <Avatar
            size="md"
            src="https://i.pravatar.cc/150?img=35"
            alt="User 1"
            ring
            ringColor="primary"
          />
          <Avatar
            size="md"
            src="https://i.pravatar.cc/150?img=36"
            alt="User 2"
            ring
            ringColor="primary"
          />
          <Avatar
            size="md"
            src="https://i.pravatar.cc/150?img=37"
            alt="User 3"
            ring
            ringColor="primary"
          />
        </AvatarGroup>
      </ShowcaseSection>

      {/* Combined Features */}
      <ShowcaseSection title="Combined Features">
        <Avatar
          size="lg"
          src="https://i.pravatar.cc/150?img=38"
          alt="User"
          ring
          ringColor="success"
          ringOffset
          status="online"
        />
        <Avatar size="lg" fallback="AB" shape="squircle" placeholderColor="primary" />
        <Avatar
          size="lg"
          fallback="CD"
          shape="hexagon"
          ring
          ringColor="accent"
          placeholderColor="secondary"
        />
      </ShowcaseSection>
    </ComponentPage>
  );
}
