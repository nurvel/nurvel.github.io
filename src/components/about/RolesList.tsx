import styled from "styled-components";

const RoleGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const Pill = styled.span`
  padding: 0.6rem 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

type RolesListProps = {
  roles: string[];
};

export function RolesList({ roles }: RolesListProps) {
  return (
    <RoleGrid>
      {roles.map((role) => (
        <Pill key={role}>{role}</Pill>
      ))}
    </RoleGrid>
  );
}
