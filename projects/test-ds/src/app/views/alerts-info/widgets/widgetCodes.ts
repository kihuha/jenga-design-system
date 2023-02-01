export const rawWiddgetCode = {
  dialog: {
    html: `    <div class="alert-widget">
      <jenga-alert color="warning">
        <div class="alert-content">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="alert-content-icon"
          >
            ...
          </svg>

          <span>
            Please not that this action is permanent and your data will be lost
            forever.
          </span>
        </div>
      </jenga-alert>

      <h2 class="alert-widget-header">Deactivate account</h2>
      <p class="alert-widget-text">
        Are you sure you want to deactivate your account? All of your data will be
        permanently removed. <strong>This action cannot be undone</strong>.
      </p>
      <div class="alert-widget-footer">
        <jenga-button label="Cancel"></jenga-button>
        <jenga-button label="Confirm" type="filled"></jenga-button>
      </div>
    </div>
    `,
    scss: `
    .alert-widget {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      background: white;
      border-radius: 1rem;
      box-shadow: 0 3px 3px 4px rgba(0, 0, 0, 0.02);

      &-header {
        margin-top: 1rem;
        font-weight: bold;
      }

      &-text {
        margin-top: 0.5rem;
        font-size: 14px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.65);
      }

      &-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 2rem;
        padding: 0.5rem;
        border-top: solid 1px rgba(0, 0, 0, 0.08);

        & > *:first-child {
          margin-right: 1rem;
        }
      }
    }

    .alert-content {
      display: flex;
      align-items: center;

      &-icon {
        margin-right: 0.5rem;
      }
    }
    `,
  },
};
