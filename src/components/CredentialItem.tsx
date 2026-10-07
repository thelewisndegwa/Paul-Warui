import type { Credential } from '../data/credentials'

interface CredentialItemProps {
  credential: Credential
  index?: number
}

export function CredentialItem({ credential, index }: CredentialItemProps) {
  return (
    <li className="cred">
      {index !== undefined ? (
        <span className="cred__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      ) : (
        <span className="cred__mark" aria-hidden="true" />
      )}
      <span className="cred__body">
        <span className="cred__name">{credential.name}</span>
        {credential.issuer ? <span className="cred__issuer">{credential.issuer}</span> : null}
      </span>
    </li>
  )
}
