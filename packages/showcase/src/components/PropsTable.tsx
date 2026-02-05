interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropRow[];
  title?: string;
}

export function PropsTable({ props, title }: PropsTableProps) {
  return (
    <div className="overflow-x-auto">
      {title && <h3 className="mb-2 text-lg font-semibold">{title}</h3>}
      <table className="table-zebra table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name}>
              <td>
                <code className="text-sm">{prop.name}</code>
                {prop.required && <span className="text-error ml-1">*</span>}
              </td>
              <td>
                <code className="text-sm">{prop.type}</code>
              </td>
              <td>{prop.default ? <code className="text-sm">{prop.default}</code> : "-"}</td>
              <td>{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type { PropRow };
