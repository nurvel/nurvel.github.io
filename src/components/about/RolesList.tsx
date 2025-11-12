import styled from "styled-components";

const RoleGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const Pill = styled.span`
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 500;
  border: 1.5px solid #666666;
  color: #1a1a1a;
  background: transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: #e91e8c;
    color: #e91e8c;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
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
